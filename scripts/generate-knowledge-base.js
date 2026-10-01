const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const outputPath = path.join(root, 'ai-training', 'schoolsite-pro-knowledge.md');
const context = { window: {} };
vm.createContext(context);

for (const relativePath of ['js/docs.js', 'js/data.js']) {
  const sourcePath = path.join(root, relativePath);
  vm.runInContext(fs.readFileSync(sourcePath, 'utf8'), context, { filename: relativePath });
}

const docs = context.window.SCHOOL_SITE_DOCS || [];
const tools = context.window.SCHOOL_SITE_TOOLS || [];
const release = context.window.SCHOOL_SITE_RELEASE || {};
const releaseNotes = context.window.SCHOOL_SITE_RELEASE_NOTES || [];

// Stops generation when source links, assets, metadata, or app scripts are invalid.
function validateSources() {
  const issues = [];
  const docIds = new Set();

  for (const doc of docs) {
    if (!doc.id) issues.push('Documentation entry is missing an id.');
    else if (docIds.has(doc.id)) issues.push(`Duplicate documentation id: ${doc.id}`);
    else docIds.add(doc.id);
  }

  // Walks nested docs and tool data to validate every link and local asset.
  function checkContent(value, location) {
    if (Array.isArray(value)) {
      value.forEach((item, index) => checkContent(item, `${location}[${index}]`));
      return;
    }
    if (!value || typeof value !== 'object') return;

    if (typeof value.href === 'string' && value.href.startsWith('#doc/')) {
      const targetId = value.href.slice('#doc/'.length);
      if (!docIds.has(targetId)) issues.push(`Broken documentation link at ${location}: ${value.href}`);
    }

    if (typeof value.onClick === 'string') {
      const routes = value.onClick.matchAll(/route\(\s*['"]doc['"]\s*,\s*['"]([^'"]+)['"]/g);
      for (const [, targetId] of routes) {
        if (!docIds.has(targetId)) issues.push(`Broken documentation route at ${location}: ${targetId}`);
      }
    }

    if (typeof value.src === 'string' && value.src.startsWith('assets/')) {
      const assetPath = path.resolve(root, value.src);
      if (!assetPath.startsWith(`${root}${path.sep}`) || !fs.existsSync(assetPath)) {
        issues.push(`Missing or invalid local asset at ${location}: ${value.src}`);
      }
    }

    for (const [key, child] of Object.entries(value)) checkContent(child, `${location}.${key}`);
  }

  checkContent(docs, 'docs');
  checkContent(tools, 'tools');

  if (!release.version) issues.push('Current release version is missing.');
  if (!releaseNotes.some(note => note.version === release.version)) {
    issues.push(`No release note matches current version ${release.version || '(missing)'}.`);
  }

  for (const key of ['downloadUrl', 'githubUrl']) {
    try {
      if (new URL(release[key]).protocol !== 'https:') issues.push(`Release ${key} must use HTTPS.`);
    } catch {
      issues.push(`Release ${key} must be a valid HTTPS URL.`);
    }
  }

  try {
    const downloadPath = new URL(release.downloadUrl).pathname.split('/');
    if (!downloadPath.includes(release.version)) {
      issues.push(`Download URL does not contain current release version ${release.version}.`);
    }
  } catch {
    // The URL validation above reports malformed or missing download URLs.
  }

  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const scriptTags = html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi);
  let inlineScriptCount = 0;
  for (const [, attributes, source] of scriptTags) {
    if (/\bsrc\s*=/.test(attributes)) continue;
    inlineScriptCount += 1;
    try {
      new vm.Script(source, { filename: `index.html inline script ${inlineScriptCount}` });
    } catch (error) {
      issues.push(`Invalid inline JavaScript (${error.message}).`);
    }
  }

  if (issues.length) throw new Error(issues.map(issue => `- ${issue}`).join('\n'));
  return { inlineScriptCount };
}

// Extracts plain text from the mixed values used in knowledge-base content.
function text(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'object' && value.text) return text(value.text);
  return '';
}

// Preserves nested list structure when converting content to Markdown.
function renderListItem(item, indent = '') {
  if (typeof item === 'string' || typeof item === 'number') return `${indent}- ${item}`;
  if (!item || typeof item !== 'object') return '';
  const lines = [`${indent}- ${text(item.text)}`];
  if (Array.isArray(item.subitems)) {
    for (const child of item.subitems) lines.push(renderListItem(child, `${indent}  `));
  }
  return lines.filter(Boolean).join('\n');
}

// Converts one supported content block into searchable Markdown text.
function renderBlock(block) {
  if (typeof block === 'string' || typeof block === 'number') return String(block);
  if (!block || typeof block !== 'object') return '';

  switch (block.type) {
    case 'paragraph':
      return text(block.text);
    case 'image':
      return block.caption ? `Image: ${block.caption}` : (block.alt ? `Image: ${block.alt}` : '');
    case 'list':
    case 'ordered': {
      const items = Array.isArray(block.items) ? block.items : [];
      return items.map((item, index) => {
        if (block.type === 'ordered') {
          const rendered = renderListItem(item).replace(/^- /, '');
          return `${index + 1}. ${rendered}`;
        }
        return renderListItem(item);
      }).filter(Boolean).join('\n');
    }
    case 'table': {
      const headers = Array.isArray(block.headers) ? block.headers : [];
      const rows = Array.isArray(block.rows) ? block.rows : [];
      const output = [];
      if (headers.length) {
        output.push(`| ${headers.map(text).join(' | ')} |`);
        output.push(`| ${headers.map(() => '---').join(' | ')} |`);
      }
      for (const row of rows) output.push(`| ${row.map(text).join(' | ')} |`);
      return output.join('\n');
    }
    case 'section':
      return renderBlocks(block.blocks);
    default:
      return text(block.text || block.value);
  }
}

// Joins content blocks while keeping paragraph spacing consistent.
function renderBlocks(blocks) {
  if (!Array.isArray(blocks)) return renderBlock(blocks);
  return blocks.map(renderBlock).filter(Boolean).join('\n\n');
}

// Exports a documentation article and its sections to the knowledge base.
function renderDocument(doc) {
  const output = [`## ${doc.title || doc.id}`];
  if (doc.summary) output.push(doc.summary);
  if (doc.image?.caption) output.push(`Image: ${doc.image.caption}`);
  for (const section of doc.body || []) {
    if (Array.isArray(section)) {
      const heading = text(section[0]);
      const body = renderBlocks(section[1]);
      if (heading) output.push(`### ${heading}`);
      if (body) output.push(body);
    } else {
      const body = renderBlock(section);
      if (body) output.push(body);
    }
  }
  return output.join('\n\n');
}

// Exports toolkit descriptions and details alongside the documentation.
function renderTool(tool) {
  const output = [`### ${tool.name || 'Unnamed tool'}`];
  if (tool.category) output.push(`Category: ${tool.category}`);
  if (tool.desc) output.push(tool.desc);
  if (tool.details) output.push(tool.details);
  for (const item of tool.content || []) {
    const body = renderBlock(item);
    if (body) output.push(body);
  }
  return output.join('\n\n');
}

// Serializes mixed release-note strings and structured blocks without object placeholders.
function renderReleaseNoteFeatures(features) {
  return features.map(feature => {
    if (typeof feature === 'string' || typeof feature === 'number') return `- ${feature}`;
    if (feature && feature.type === 'heading') return `**${text(feature.text)}**`;
    if (feature && typeof feature === 'object' && !feature.type) return renderListItem(feature);
    return renderBlock(feature);
  }).filter(Boolean).join('\n');
}

const { inlineScriptCount } = validateSources();
const sections = [];
sections.push('# SchoolSite Pro Knowledge Base');
sections.push('This file is generated from `js/docs.js` and `js/data.js`. Use it as the primary product-help source. It describes documented SchoolSite Pro workflows for ArcGIS Pro and does not replace official licensing or account support.');
sections.push(`Product: ${release.productName || 'SchoolSite Pro'}\nRequirements: ${release.requirements || 'See the current documentation'}\nCurrent release: ${release.version || 'Unknown'} (${release.releaseDate || 'Unknown date'})`);

sections.push('## Documentation');
let currentSection = '';
for (const doc of docs) {
  if (doc.section && doc.section !== currentSection) {
    sections.push(`## ${doc.section}`);
    currentSection = doc.section;
  }
  sections.push(renderDocument(doc));
}

sections.push('## Toolkit');
for (const tool of tools) sections.push(renderTool(tool));

sections.push('## Release notes');
for (const note of releaseNotes) {
  sections.push(`### Version ${note.version || 'Unknown'} (${note.date || 'Unknown date'})`);
  if (note.description) sections.push(note.description);
  if (Array.isArray(note.features)) sections.push(renderReleaseNoteFeatures(note.features));
}

const output = `${sections.filter(Boolean).join('\n\n')}\n`;
if (output.includes('[object Object]')) throw new Error('Generated knowledge contains an unserialized object.');
if (!output.includes(`Current release: ${release.version}`)) {
  throw new Error('Generated knowledge does not contain the current release version.');
}
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Validated ${docs.length} documents, ${tools.length} tools, and ${inlineScriptCount} inline scripts.`);
console.log(`Generated ${path.relative(root, outputPath)} from ${releaseNotes.length} release notes.`);
