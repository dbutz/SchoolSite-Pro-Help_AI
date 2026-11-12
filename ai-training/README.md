# AI knowledge base

`schoolsite-pro-knowledge.md` is generated from the structured documentation in `js/docs.js` and toolkit and release data in `js/data.js`.

To regenerate locally:

```powershell
node .\scripts\generate-knowledge-base.js
```

The GitHub Actions workflow regenerates and commits the Markdown file when either source file changes on `main`.

## Chatbase setup

Use the raw GitHub URL for `ai-training/schoolsite-pro-knowledge.md` as the Chatbase URL source, or upload the generated Markdown file as a document. After a push, refresh or resync that Chatbase source. If the Chatbase plan supports scheduled crawling, enable it for the raw file URL.

The website uses JavaScript hash routes for documentation articles, such as `https://www.schoolsite.pro/#doc/change-boundaries`. Website crawlers may only discover the landing page because these article routes are not separate HTML pages. The generated knowledge base includes a direct published URL for each article so the chatbot can return the article link without relying on website crawling.

In the Chatbase instructions, tell the agent to include the exact article link from the knowledge base as a clickable Markdown link whenever it refers users to an article. Do not link to GitHub or `.md` files, and do not invent URLs. After changing the generator or documentation, regenerate the file and refresh or resync the Chatbase source.

The generated file is the text source for the agent. Keep the existing agent instructions for response behavior, source priority, uncertainty, and licensing support boundaries.
