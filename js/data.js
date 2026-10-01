window.SCHOOL_SITE_RELEASE = {
  "version": "1.9.7",
  "releaseDate": "September 16, 2026",
  "downloadUrl": "https://github.com/dbutz/SchoolSite-Pro-Docs/releases/download/1.9.7/SchoolSite.Pro.1.9.7.zip",
  "githubUrl": "https://github.com/dbutz/SchoolSite-Pro-Help_AI",
  "productName": "SchoolSite Pro",
  "requirements": "ArcGIS Pro 3.3.0+"
};

window.SCHOOL_SITE_RELEASE_NOTES = [
  {
    "version": "1.9.7",
    "date": "September 2026",
    "description": "FY26 Q4 Update 10 - Patch.",
    "features": [
      "Quick patch to fix an issue when calculation mobility that broke at 1.9.6"
    ]
  },
  {
    "version": "1.9.6",
    "date": "September 2026",
    "description": "FY26 Q4 Update 9.",
    "features": [
      { "type": "heading", "text": "New Features:" },
      { "type": "list", "items": [
        "New: Utilization Report. This is now an automated report and used to setup boundary comparison web apps during a rezoning project",
        "Export SYF reports during Data Setup",
        "Added CAPACITY field to the automated attendance matrix Excel file",
        "Additional residential forecasting charts available with an optional checkbox during the Report Setup",
        "Additional student types that can be added to the automated attendance matrix are only available if they exist in the student data that has been imported into SchoolSite (just like how Create Plan works)",
        "This change also resulted in much improved performance time when creating Address Directory. It is now roughly twice as fast.",
        "Project Summary Report updated based on feedback from Cameron and the standardization team (example report attached for reference on changes)",
        { "text": "Reassigning study areas by (closest school, capacity, max limit ) now allows you to choose one or more schools to exclude from this process so you can reassign most schools but keep some locked as they are" }
      ] },
      { "type": "heading", "text": "Minor bugs and UI improvements:" },
      { "type": "list", "items": [
        "SYF calculations are only is available when importing Assessor data with polygon geometry",
        "Added a warning when calculating a forecast if Projected Housing Units are detected with no corresponding SYF values",
        "Fixed an issue with the travel modes from Esri that make creating walk zones broken",
        "Tapestry Segmentation report was deprecated, new version has been added",
        "While assigning study areas in a plan based on a forecast, you can no longer change the forecast year in the stats window.",
        { "text": "Doing so would require edits to tables and when those edits were saved it would lock in study area assignments and remove the ability to use the Undo button", "subitems": [] }
      ] }
    ]
  },
  {
    "version": "1.9.5",
    "date": "July 2026",
    "description": "FY26 Q4 Update 8.",
    "features": [
      "User can choose a school to remove, and it will automatically assign those study areas to ‘Unassigned’",
      "Exporting a forecast report includes the tabular data and chart in the same file",
      "Improve performance of calculating a forecast",
      "Improve performance when calculating year 12 of the projected housing units table",
      "Additional misc. minor bug fixes and UI improvements"
    ]
  },
  {
    "version": "1.9.4",
    "date": "June 2026",
    "description": "FY26 Q3 Update 7. Introducing new reporting features for residential forecasts.",
    "features": [
      { "type": "heading", "text": "New Features:" },
      { "type": "list", "items": [
        { "text": "**SYF Automation**", "subitems": [
          "Use parcel data to automatically generate student yield factors to apply to new housing units to estimate how many students will be generated from those new housing developments in the future"
        ] },
        { "text": "The statistics window UI updates such as:", "subitems": [
          "Sorting the table by any column",
          "Scale/zoom in to see larger font size for improved readability"
        ] },
        "Additional data validation to check consistency between student types across historical student data",
        "Lock a plan to prevent further study area re-assignments (Similar to locking in a forecast once delivered to the client)",
        "School layer in a plan's map now has Map Tips turned on by default",
        "The study area numbering tool has been recreated from ArcMap",
        { "text": "Forecast can now be summarized on any available field in the study area data instead of just by attendance zone, district-wide, or sub-District (which uses the DISTRICT field)", "subitems": [
          "This means you can select a CITY, ZIP, or any other field present in the Study Area data to use to group study areas in a report"
        ] },
        { "text": "**Plans with Enrollment now use ALL student types**", "subitems": [
          "The Estimated Enrollment tab has always shown all students who are enrolled in a school who meet the grade criteria with no regard for the value in the STUTYPE field (GE, SE, CH, etc..)",
          "When making a ‘Plan with Enrollment’, it does not ask you which student types you want to use like it does with a residence-based plan. Therefore, it was unclear that the students in the Current tab were only ‘GE’ students.",
          "**This is now DIFFERENT:** Moving forward, the ‘Current’ tab will work similarly to the ‘Estimated Enrollment’ tab in that it will show ALL students who RESIDE in the school’s boundary and meet the grade criteria specified with no regard for the value in the STUTYPE field.",
          "This will make the methodology in ‘Plans with Enrollment’ consistent and show ALL resident students in one tab and ALL enrolled students in the other tab"
        ] }
      ] },
      { "type": "paragraph", "text": "Additional misc. minor bug fixes and UI improvements" }
    ]
  },
  {
    "version": "1.9.3",
    "date": "January 2026",
    "description": "FY26 Q2 Update 6. Introducing new reporting features for residential forecasts.",
    "features": [
      "Show the codes chosen for unit types 1-6 on the projected units, SYF and MSYF pages",
      "In Forecast Report dock pane, add ability to summarize selected study area features",
      "Allow Demographic Reports to be created for All Polygons in a feature class.",
      "Fixed bug in plans based on forecast where the stats window's data for year 0 (current year) did not include other STUTYPES that were included in the forecast (SSP-230)",
      "Fixed issue in forecast reports that did not accept a grade range of -1-6 or -1-12 because it could not correctly parse the two dash characters (SSP-231)",
      "Minor bugs and UI improvements"
    ]
  },
  {
    "version": "1.9.2",
    "date": "January 2026",
    "description": "FY26 Q2 Update 5. Introducing a new Walk Zone tool.",
    "features": [
      "Generate walk zone polygons around school points at any distance or time (e.g. 1, 3, 5 mile distances or 5, 10, 15 minutes) for use in analysis for your district.",
      "Fixed bug in street/address directories when schools have STRT_GRD of -2 (SSP-212)",
      "Added ability to prompt user to open the Address Directory from Pro after exporting, rather than make them browse to the folder first.",
      "Fixed bug SSP-215 that did not update the stats window of plan based on a forecast after viewing other student attribute and then selecting grade distribution and a forecast year in the future (numbers did not reflect the future forecasted year's data)"
    ]
  },
  {
    "version": "1.9.1",
    "date": "December 2025",
    "description": "FY26 Q1 Update 4.",
    "features": [
      "Fixed issue with Rate of Change enrollment forecast that caused no results to be created for grades 10, 11, and 12",
      "Fixed issue that prevented the 'Currently selected study areas on map' option from being enabled in a factor dockpane when features were selected",
      "Fixed issue with closing a forecast factor that would leave the table open",
      "Updated the phrasing of a data validation message to make it more clear (regarding students enrolled outside the grades that the District serves)"
    ]
  },
  {
    "version": "1.9.0",
    "date": "December 2025",
    "description": "FY26 Q1 Update 3. Introducing Sync Plans and more.",
    "features": [
      { "type": "heading", "text": "New Features" },
      { "type": "list", "items": [
        { "text": "New option to sync changes between multiple plans:", "subitems": [
          "This does not work with Plans based on enrollment; only residence and forecasted students.",
          { "text": "Checking on plans in the ‘Plans to Sync’ menu will push the following changes to those plans:", "subitems": [
            "Boundary reassignments; Reassignment of study areas from their current school to a different school.",
            "Any changes using the Reassign Study Area button (allows you to reassign all study areas by closest school, capacity, max limit, etc…)",
            "Add new/existing school or update capacity"
          ] }
        ] },
        "You can now summarize the statistics window by ‘Student Attribute’ in a plan based on forecasted data",
        { "text": "You can now use keyboard modifiers when selecting study areas during reassignment, just like the out-of-the-box selection tools in Pro", "subitems": [
          "Holding SHIFT when selecting will ADD more study areas to the current selection",
          "Holding CTRL when selecting will REMOVE study areas from the current selection"
        ] }
      ] },
      { "type": "heading", "text": "Minor bugs and UI improvements" },
      { "type": "list", "items": [
        "Fixed a bug that would clear out any feature selections unexpectedly, making it difficult to see selected records",
        "Updated Statistics Window title to include the plan's name, so the user can easily tell which plan those statistics relate to when multiple maps are open, sometimes plans can be open side by side when syncing and now the stats dock pane shows the plan's name to reduce confusion.",
        { "text": "**IMPORTANT!** The new enrollment forecast methodology **(Rate of Change)** has been updated slightly", "subitems": [
          "The change in this version is that the K class calculation is now done the same as the PK class using the ‘Direct Rate of Change’ formula. See our full documentation for more details."
        ] }
      ] }
    ]
  },
  {
    "version": "1.8.9",
    "date": "November 2025",
    "description": "FY26 Q1 Update 2. Introducing Rate of Change enrollment forecasts and the study-area ID tool for forecasts.",
    "features": [
      { "type": "heading", "text": "Introducing ‘Rate of Change’ enrollment forecast & study area ID tool for forecasts" },
      { "type": "list", "items": [
        { "text": "New method for creating enrollment forecasts: Rate of Change", "subitems": [
          "This adds a new methodology called 'Rate of Change' in addition to the existing 'Transfer Pattern' method",
          "User can select from a menu which method to use",
          "Rate of Change method only applies to schools with a boundary. Schools with no boundary (magnet, district wide, etc.) will still use the 'Transfer Pattern' method"
        ] },
        "Study area ID tool for forecasts: Click on a study area and see a popup windows with all the factors applied to that polygon and the forecast results generated in a single click",
        "Plan overlay feature now allows you to add more than one overlay and only removes them when you choose the first option in the list \"Do not overlay another plan\", otherwise the user must remove them individually.",
        "New tooltips and explanation labels for Data Enrichment and Enrollment Forecast tools"
      ] },
      { "type": "heading", "text": "New tooltips, help information, and UI updates" },
      { "type": "list", "items": [
        "Fixed bugs and made improvements to copying and renaming plans and forecasts",
        "Data Enrichment: updated tooltips, screenshots, and UI labels to help explain what will be included in the output based on user input selections",
        "Various improvements to UI elements across the application for better consistency",
        "New Help button on SchoolSite 'Share' ribbon to direct users to our web help documents"
      ] }
    ]
  },
  {
    "version": "1.8.8",
    "date": "October 2025",
    "description": "FY26 Q1 Update 1. Introducing the Automated Attendance Matrix feature.",
    "features": [
      { "type": "heading", "text": "Introducing Automated Attendance Matrix feature" },
      { "type": "list", "items": [
        "Fixed error when entering a lowercase grade range like ‘k-6’",
        "Added an option to include ‘SE’ students when making an automated attendance matrix",
        "Changed the data type requirements to enforce only ‘short’ int numerical values instead of ‘short’ or ‘long’ integers to avoid any really large numbers in the input that might be attempted to get written to another table that only accepts ‘short’",
        { "text": "Changed a data validation from error to warning", "subitems": [
          "If a school serves a grade, and no students are enrolled in that grade, it now reports a warning instead of error",
          "Added a warning to identify overlaps in school coverage such as a study area assigned a K-6 elementary and a 6-8 middle that could indicate an option area for grade 6 that might go otherwise unnoticed."
        ] }
      ] }
    ]
  },
  {
    "version": "1.8.7",
    "date": "October 2025",
    "description": "FY26 Q1 release. Introducing the Automated Attendance Matrix feature.",
    "features": [
      { "type": "heading", "text": "Introducing Automated Attendance Matrix feature" },
      { "type": "list", "items": [
        "Create an attendance matrix using GE \"General Education\" students by defining the grade ranges for each of the grade levels present in the study area data."
      ] },
      { "type": "heading", "text": "Data enrichment tool upgrade" },
      { "type": "list", "items": [
        "This tool will now enrich both current study areas as well as now plans so you can attach forecasted student counts to proposed attendance boundaries from plans you create."
      ] },
      { "type": "heading", "text": "Misc changes" },
      { "type": "list", "items": [
        "Imported historical student data is now enriched (just like current year student data already was) with three additional fields of data: school name of residence, school code of residence, and school name of enrollment",
        "New data validation rule that will check to determine grades served district wide (that make up the attendance boundaries) and make sure all students are in grades served by those schools",
        "Minor UI updates, tooltips, etc."
      ] }
    ]
  },
  {
    "version": "1.8.6",
    "date": "Earlier release",
    "description": "Introducing Program Re-assignment feature.",
    "features": [
      { "type": "heading", "text": "Introducing Program Re-assignment feature" },
      { "type": "list", "items": [
        "Import programs (special ed, music, dual language, etc. Each program has a number of reserved classroom seats)",
        "Add new programs/delete programs",
        "Reassign programs from one school to another",
        "Stats window now shows a modified capacity column that reduces the overall capacity based on the number of seats of programs assigned to that school"
      ] },
      { "type": "heading", "text": "New data validation rules" },
      { "type": "list", "items": [
        "Detect if a study area is assigned to schools that create gaps in grade range coverage",
        "Detect if a student is enrolled in a school that does not serve their grade (8th grader enrolled in a 9-12 school)",
        "Detect if a school serves a grade that has no students enrolled (school serves K-6 but only has K-5 enrolled)"
      ] },
      { "type": "heading", "text": "Misc changes" },
      { "type": "list", "items": [
        "Several improvments and bugs addressed for plans with enrollment",
        "Minor UI updates, tooltips, etc."
      ] }
    ]
  },
  {
    "version": "1.8.5",
    "date": "Earlier release",
    "description": "Pre-Fall revisions",
    "features": [
      "Bug fixes to plans with enrollment",
      "Student enrichment to imported data and original source to add fields defining school of enrollment and school of residence",
      "More help information",
      "New background on load",
      "New 'Copy' button for plans/forecasts",
      "Changes to capacity can be saved back to imported schools for future plans",
      "Updates to rendering a forecast to alter alias of DISPLAY for Map Contents window",
      "Bypass warning message option enabled",
      "New schools in a plan automatically becomes target school for assignment"
    ]
  },
  {
    "version": "1.8.4",
    "date": "March 2025",
    "description": "Pre-Fall upgrades",
    "features": [
      "Updates and bug fixes to plans with enrollment",
      "Read-only mode for forecasts to lock in factors",
      "Forecast appearance labeled to describe current settings",
      "New and updated help and tooltip icons and information",
      "Address directory upgrades for more compatibility across different Student Information Systems",
      "Reset Project tool now offers just to reset address directory information instead of all data"
    ]
  },
  {
    "version": "1.8.3",
    "date": "April 2025",
    "description": "Plans with enrollment (April 2025 - internal only release for testing)",
    "features": [
      "First release that will create plans showing both residence and enrollment counts",
      "Minor UI updates and improvements",
      "Fixed issue when closing SchoolSite Pro from start page which caused it the hang requiring a force close",
      "New buttons to show plan/forecast comments to review how they were setup/configured",
      "Update help icons for better, more consistent look across tools",
      "Excel reports prompt the user to open them after export, which auto launches Excel and opens the report"
    ]
  },
  {
    "version": "1.8.2",
    "date": "March 2025",
    "description": "Address Directory updates.",
    "features": [
      "Updated address directory output to include: MID_, prefix direction, prefix type, suffix direction"
    ]
  },
  {
    "version": "1.8.1",
    "date": "February 2025",
    "description": "Street/Address Directory release",
    "features": [
      "Updated error checking to prevent issues in various tools by limiting special characters used in plan and forecast names",
      "Updated tooltips and help links with more to come across the application",
      "Updates, UI tweaks, and bug fixes to Street/Address Directories based on feedback from the beta released at 1.8.0"
    ]
  },
  {
    "version": "1.8.0",
    "date": "February 2025",
    "description": "Internal only release (February 2025)",
    "features": [
      "Beta release of street/address directory tools for internal testing",
      "MGT branding updates",
      "New help button and contextual help icons to help users navigate to https://ssphelp.mgt.us/",
      "Various UI updates, alignments, layout improvements especially on the Start Page",
      "Enrollment forecast Excel formatting updates for better consistency"
    ]
  },
  {
    "version": "1.7.9",
    "date": "August 2024",
    "description": "August release.",
    "features": [
      "Fixed bug introduced with ArcGIS Pro 3.3 when using Plan Impact Summary report"
    ]
  },
  {
    "version": "1.7.8",
    "date": "August 2024",
    "description": "August release.",
    "features": [
      "Fixed bug when copying a forecast",
      "Updated format for enrollment forecasts and Excel export to be more consistent with residence forecasts and align with template guidelines"
    ]
  },
  {
    "version": "1.7.7",
    "date": "July 2024",
    "description": "ArcGIS Pro 3.3+ only.",
    "features": [
      "Fixed additional bugs related to limited field names in ArcGIS Pro 3.3 causing exporting reports/tables to Excel to fail such as the statistics window and causing importing of historical student to fail when calulating mobility",
      "Added ability to import street data in preparation for street directory tool"
    ]
  },
  {
    "version": "1.7.6",
    "date": "July 2024",
    "description": "ArcGIS Pro 3.3+ only.",
    "features": [
      "Minor UI updates",
      "Data Enrichment Tools released to enrich tract data with estimated number of students based on units and SYF. Also creates enriched study area data with numbers of forecasted students in each area.",
      "Reset Project bug fixed that lead to missing TYPE2 units being imported",
      "Added Capacity for each school in forecast report when reporting on attendance areas and formatted for output in Excel"
    ]
  },
  {
    "version": "1.7.5",
    "date": "November 2023",
    "description": "",
    "features": [
      "Fixed problem when importing historical students"
    ]
  },
  {
    "version": "1.7.4",
    "date": "November 2023",
    "description": "",
    "features": [
      "This build fixes an issue preventing the assignment of study areas to the target school in plans that have been copied and/or renamed."
    ]
  },
  {
    "version": "1.7.3",
    "date": "November 2023",
    "description": "",
    "features": [
      "Bugs fixed for labeling in plans",
      "Bugs fixed for symbolizing a forecast",
      "Bugs fixed for showing the data about the selected study areas in a plan when boundary planning",
      "Bugs fixed for changing which grade ranges are shown in the statistics table",
      "Bugs fixed for error messages that are shown when a forecast was first created"
    ]
  },
  {
    "version": "1.7.2",
    "date": "October 2023",
    "description": "",
    "features": [
      "Student yield factors have been expanded from just PK, K-6, 7-8, 9-12 to PK through 12 with all individual grades.",
      "New sorting of enrollment forecasts allows straight alphabetical sorting instead of grouping elementary first followed by middle and high and then listed alphabetically in those groups.",
      "Fixed bugs when using Remove Unassigned Schools and Plan Summary"
    ]
  },
  {
    "version": "1.7.1",
    "date": "August 2023",
    "description": "",
    "features": [
      "New feature: Reset Geodatabase allows the user to delete all imported data and maps that have plans or forecasts to start over with new data in the same project",
      "Plan statistics and forecast reports no longer have pre-defined grade ranges of K-6,7-8,9-12. It only has a grade range textbox for easier entry",
      "Layers that have definition expressions are flagged during Data Setup as warnings to alert the user",
      "Changed all references of Maturation to Buildout",
      "In Forecasts, under Appearance, you are now able to symbolize resident student change to have its end year as Buildout.",
      "Bug fixes related to data setup for historical students",
      "Bug fixes for when enrollment forecast would indicate changes were made to resident forecast when they had not been forcing an unneeded recalculation of the enrollment forecast",
      "Bug fixes when exporting mobility reports."
    ]
  },
  {
    "version": "1.7.0",
    "date": "February 2023",
    "description": "",
    "features": [
      "Updated start page for improved ability to find previous Projects",
      "Fixed bugs found when working with specific datasets related to features such as: Exporting plans; Warning when the license is about to expire; Enrollment forecasts; Reassign by current boundaries",
      "Improved rounding to avoid really long decimal values",
      "Plan Summary report",
      "Forecast report setup was missing grade ranges on occasion"
    ]
  },
  {
    "version": "1.6.9",
    "date": "December 2022",
    "description": "",
    "features": [
      "Fixed bugs when making a forecast"
    ]
  },
  {
    "version": "1.6.8",
    "date": "December 2022",
    "description": "",
    "features": [
      "Fixed bugs preventing the successful export of forecast reports to both text and Excel formats",
      "Improved the rounding of values in the plan stats window so they would not exceed two decimal points",
      "Updated the messaging around enrollment forecasts to make sure the report indicates that it needs to be refreshed after changes are made to residential forecast values. This message would previously disappear too soon.",
      "Enrollment forecasts now show a warning when it detects that a school has had a significant gap in enrollment from year to year to indicate that the resulting forecasted values could be negatively impacted.",
      "When sorting the forecast enrollment report by grade to show elementary first, then middle, followed by high....it now considers PK and K to be the same value for sorting purposes so you don't get PK-6 followed by K-6. Those are both considered 'elementary' and are in the same grouping in the report.",
      "Better handling of 'custom' grade ranges in plan statistics and forecast report setup. Custom ranges no longer accepts grade ranges that are already available via checkbox (i.e. K-6 is not 'custom', just select it from the set of pre-defined grade ranges. Use 'custom' for things like K-4 or 6-8."
    ]
  },
  {
    "version": "1.6.7",
    "date": "December 2022",
    "description": "",
    "features": [
      "Schools are ordered in the report first by grade, then by name so the elementary schools are grouped alphabetically followed by middle schools, etc…",
      "Messages when schools are excluded from reports are re-worded to make more sense as to why they could not be forecasted",
      "Added total enrollment summary line to the top of the report"
    ]
  },
  {
    "version": "1.6.6",
    "date": "November 2022",
    "description": "",
    "features": [
      "Various enhancements to formatting of reports both on screen and when exported to Excel",
      "Bug fix for staffing forecast when calculating the students transferring out of the PK grade in boundary schools",
      "Fixed bug in the Project Summary report that caused it to not find the required DEVELOPER field",
      "Fixed issue where maturation units were not included in a development summary excel report in cases where a studyarea had zero development in years one thru ten but then had development beyond that.",
      "Updated Student Report to summarize an accounting of student data to give insight into what students were in the file, which were in district, and which were used in the plan or forecast broken down by STUTYPE and GRD"
    ]
  },
  {
    "version": "1.6.5",
    "date": "October 2022",
    "description": "",
    "features": [
      "Built for ArcGIS Pro 3.0",
      "First release out of beta"
    ]
  }
];

window.SCHOOL_SITE_TOOLS = [
  { "name": "Data Setup", "category": "Data Setup", "desc": "Set up your SchoolSite project with the necessary feature classes: Study Areas, Schools, and Students.",
     "content": [
    { "type": "heading", "text": "What this tool does" },
    { "type": "paragraph", "text": "Scans each dataset to confirm it conforms to the expected schema and reports Warnings (items you might want to correct) and Errors (items you must correct before continuing)." },
    { "type": "subheading", "text": "Before you begin" },
    { "type": "bullet", "items": [
      "Open a map in the current ArcGIS Pro project.",
      "Import the Study Areas, Schools, and Students feature classes through Data Setup.",
      "Review warnings before continuing and correct all errors."
    ] },
    { "type": "image", "src": "assets/images/datasetup.png", "alt": "SchoolSite Pro Data Setup panel", "caption": "Data Setup validates the datasets used by SchoolSite Pro." }
  ] },
  { "name": "Help", "category": "Help", "desc": "Open help information for SchoolSite Pro tools and workflows.", "content": [{ "type": "image", "src": "assets/images/Tools/help.png", "alt": "SchoolSite Pro Help tool", "caption": "Open contextual help for SchoolSite Pro." }], "details": "Use Help when you need guidance about the active SchoolSite Pro workflow or tool." },
  { "name": "Reset Project Data", "category": "Data Setup", "desc": "Completely start your SchoolSite Pro project over by deleting the SchoolSite geodatabase.", "content": [{ "type": "image", "src": "assets/images/Tools/reset_Project_Data.png", "alt": "Reset Project Data tool", "caption": "Reset Project Data is available from the Data Setup workflow." }], "details": "This deletes all plans, forecasts, and imported data for the project, so use it only when you intend to rebuild from scratch."},

  { "name": "Create", "category": "Create & Manage", "desc": "Create a new plan, forecast, or street/address directory using SchoolSite Pro.", "content": [{ "type": "image", "src": "assets/images/Tools/create_gallery.png", "alt": "Create SchoolSite plan or forecast", "caption": "Create a new SchoolSite planning item." }], "details": "Creating a new SchoolSite item requires at least Schools, Study Areas, and Students feature classes to already be imported into the project via Data Setup." },
  { "name": "Open", "category": "Create & Manage", "desc": "Open an existing SchoolSite plan, forecast, or street/address directory in the project.", "content": [{ "type": "image", "src": "assets/images/Tools/open_gallery.png", "alt": "SchoolSite plans and maps catalog", "caption": "Open an existing plan or forecast from the project catalog." }], "details": "Available whenever one or more SchoolSite items already exist in the current project." },
  { "name": "Delete", "category": "Create & Manage", "desc": "Delete an existing SchoolSite plan, forecast, or street/address directory in the project.", "content": [{ "type": "image", "src": "assets/images/Tools/delete_gallery.png", "alt": "SchoolSite item removal workflow", "caption": "Remove an existing planning item when it is no longer needed." }], "details": "Permanently removes the selected item; this cannot be undone once confirmed." },
  { "name": "Copy", "category": "Create & Manage", "desc": "Copy an existing SchoolSite plan, forecast, or street/address directory in the project.", "content": [{ "type": "image", "src": "assets/images/Tools/copy_gallery.png", "alt": "Copy SchoolSite plan", "caption": "Copy a plan to create a scenario variation." }], "details": "A quick way to branch off a scenario variation without rebuilding a plan or forecast from scratch." },
  { "name": "Address Directory", "category": "Create & Manage", "desc": "Create an address directory of district address points or parcels and school assignments.", "content": [{ "type": "image", "src": "assets/images/address_dir.png", "alt": "SchoolSite address directory", "caption": "Create an address directory from address points or parcels." }], "details": "Requires Schools, Study Areas with school assignments, and either Address Points or Parcel Polygons. Use Export Directories to write the completed address directory to Excel." },
  { "name": "Street Directory", "category": "Create & Manage", "desc": "Create a street directory listing district streets and corresponding schools of assignment.", "content": [{ "type": "image", "src": "assets/images/street_dir.png", "alt": "SchoolSite street directory", "caption": "Create a street directory with assigned schools." }], "details": "Requires Schools, Study Areas, and a Streets network with address ranges and street names. Use Export Directories to write the completed street directory to Excel." },

  { "name": "Export Directories", "category": "Export", "desc": "Export a SchoolSite street or address directory to Microsoft Excel.", "content": [{ "type": "image", "src": "assets/images/Tools/export_directories.png", "alt": "Export SchoolSite directory", "caption": "Export a completed street or address directory." }], "details": "Requires a generated street or address directory. Street output lists district streets and assigned schools; address output lists address points or parcels and assigned schools." },

  { "name": "Start Assignment", "category": "Assign", "desc": "Start assigning Study Areas to different schools while SchoolSite tracks your changes.", "content": [{ "type": "image", "src": "assets/images/Tools/start_assignment.png", "alt": "Start SchoolSite assignment", "caption": "Start an attendance-area assignment session." }], "details": "Begins an editing session so that any reassignments can be reviewed and undone before they are saved." },
  { "name": "Target School", "category": "Assign Tools", "desc": "Select the school's attendance area that you would like to assign Study Areas to.", "content": [{ "type": "image", "src": "assets/images/Tools/select_school_assignment.png", "alt": "Select target school for assignment", "caption": "Choose the target school for selected Study Areas." }], "details": "Only enabled once an assignment session has been started." },
  { "name": "Assign Study Areas", "category": "Assign Tools", "desc": "Assign the selected Study Areas to the target school's attendance area shown in the combo box.", "content": [{ "type": "image", "src": "assets/images/Tools/assign_studyarea.png", "alt": "Assign Study Areas to a school", "caption": "Assign selected Study Areas to the target school." }], "details": "Requires an active assignment session and at least one Study Area selected on the map." },
  { "name": "Save Assignments", "category": "Assign", "desc": "Commit the changes made to your attendance areas before stopping your assignment session.", "content": [{ "type": "image", "src": "assets/images/Tools/save_assignment.png", "alt": "Save Study Area assignments", "caption": "Save the attendance-area assignment changes." }], "details": "Only enabled once one or more assignment edits have been made during the current session." },
  { "name": "Undo", "category": "Assign Tools", "desc": "Undo your previous assignment.", "content": [{ "type": "image", "src": "assets/images/Tools/undo_clear_assingment.png", "alt": "Undo Study Area assignment", "caption": "Undo or clear the most recent assignment change." }], "details": "Reverses the most recent Study Area reassignment made during the active session." },
  { "name": "Select by Rectangle", "category": "Assign Tools", "desc": "Select Study Areas by clicking them or drawing a box around them.", "content": [{ "type": "image", "src": "assets/images/Tools/draw_assignment_group.png", "alt": "Select Study Areas by drawing", "caption": "Select Study Areas with an assignment selection tool." }], "details": "One of the four selection tools available during an assignment session." },
  { "name": "Select by Polygon", "category": "Assign Tools", "desc": "Select Study Areas by drawing a polygon around them.", "content": [{ "type": "image", "src": "assets/images/Tools/draw_assignment_group.png", "alt": "Select Study Areas by drawing", "caption": "Select Study Areas with an assignment selection tool." }], "details": "Useful for irregularly shaped boundary edits that a rectangle can't capture cleanly." },
  { "name": "Select by Lasso", "category": "Assign Tools", "desc": "Select Study Areas by drawing a freehand shape around them.", "content": [{ "type": "image", "src": "assets/images/Tools/draw_assignment_group.png", "alt": "Select Study Areas by drawing", "caption": "Select Study Areas with an assignment selection tool." }], "details": "Ideal for quickly tracing along an existing boundary line." },
  { "name": "Select by Circle", "category": "Assign Tools", "desc": "Select Study Areas by drawing a circle around them.", "content": [{ "type": "image", "src": "assets/images/Tools/draw_assignment_group.png", "alt": "Select Study Areas by drawing", "caption": "Select Study Areas with an assignment selection tool." }], "details": "Handy for radius-based selections such as everything within a set distance of a point." },
  { "name": "Reassign Study Areas", "category": "Reassign", "desc": "Reassign your Study Areas using different methods, like closest school, maximum capacity, or reverting to the plan's original assignment.", "content": [{ "type": "image", "src": "assets/images/Tools/school_management_reassign.png", "alt": "Reassign Study Areas options", "caption": "Reassign Study Areas using a selected method." }], "details": "Build 1.9.6/1.9.7 adds the ability to exclude specific schools from a bulk reassignment run." },
  { "name": "Remove Unassigned Schools", "category": "Schools Management", "desc": "Remove any schools from this plan that do not have any Study Areas assigned to them.", "content": [{ "type": "image", "src": "assets/images/Tools/remove_unassigned_school.png", "alt": "Remove unassigned schools tool", "caption": "Remove schools that no longer have Study Areas assigned." }], "details": "Used to close a school once all of its Study Areas have been reassigned elsewhere. Not available during an active assignment session." },
  { "name": "Update Schools", "category": "Schools Management", "desc": "Add a new school or existing school to your plan.", "content": [{ "type": "image", "src": "assets/images/updateSchools.png", "alt": "Update schools in a plan", "caption": "Add a new or existing school to the plan." }], "details": "Once added, you can assign Study Areas to it to create an attendance boundary for that new school." },
  { "name": "Plans to Sync", "category": "Assign Tools", "desc": "Select plans (resident or forecast plans only, not enrollment) with the same grade type as the current plan to receive synced changes.", "content": [{ "type": "image", "src": "assets/images/Tools/plan_to_sync.png", "alt": "Plans to Sync tool", "caption": "Select plans that should receive synchronized assignment changes." }], "details": "When Sync On Demand is enabled, Study Area school assignment changes made to the current plan are also applied to the selected plans. No changes sync unless plans are selected here." },
  { "name": "Identify", "category": "Map Tools", "desc": "Identify the Study Areas that you select on the map.", "content": [{ "type": "image", "src": "assets/images/Tools/identify.png", "alt": "Identify selected Study Areas", "caption": "Identify selected Study Areas on the map." }], "details": "A redistricting plan must be open and active for this tool to work." },
  { "name": "Lock Assignments", "category": "Assign", "desc": "Lock in the current plan and make it read-only.", "content": [{ "type": "image", "src": "assets/images/Tools/lock_assignment.png", "alt": "Lock attendance assignments", "caption": "Lock the current plan so assignments cannot be changed." }], "details": "Once locked, the plan's output is considered final and no further assignment changes are possible." },
  { "name": "Show Statistics", "category": "Statistics", "desc": "Display and customize information about the students and attendance areas in a table format.", "content": [{ "type": "image", "src": "assets/images/Tools/latest_ui_statisticstable.png", "alt": "SchoolSite Statistics Window", "caption": "Review students and attendance areas in the latest Statistics Window table." }], "details": "Use these statistics to monitor student numbers as Study Areas are assigned to schools." },
  { "name": "Plan Impact Summary", "category": "Assign & Boundaries", "desc": "Produce a summary of Study Areas and students impacted by a new boundary configuration.", "content": [{ "type": "image", "src": "assets/images/plan_impact_summary.png", "alt": "Plan Impact Summary tool", "caption": "Summarize Study Areas and students affected by boundary changes." }], "details": "Creates impacted Study Areas and impacted students outputs with counts by the grade ranges defined in the Plan Statistics Window. Review the generated datasets and export the summary when needed." },
  { "name": "Plan Overlay", "category": "Symbology", "desc": "Overlay another plan's attendance area on top of your current plan for comparison.", "content": [{ "type": "image", "src": "assets/images/Tools/plan_overlay.png", "alt": "Plan Overlay tool", "caption": "Compare another plan's attendance areas with the current plan." }], "details": "Choose which plan's boundaries to display alongside the one you're currently editing." },
  { "name": "Label Areas", "category": "Labeling", "desc": "Display each attendance area's name on the map.", "content": [{ "type": "image", "src": "assets/images/Tools/lable_expression.png", "alt": "Attendance-area labels", "caption": "Display attendance-area names on the map." }], "details": "Toggle labeling on or off for the plan's attendance areas." },

  { "name": "Export Plan", "category": "Export", "desc": "Export your attendance areas to a standalone feature layer.", "content": [{ "type": "image", "src": "assets/images/Tools/export_plan_statistics_plan_as_studyareas_show_plan_comments_group.png", "alt": "Export plan tools", "caption": "Export and review plan information from the Share tools." }], "details": "Produces a shareable layer representing the plan's current boundary configuration." },
  { "name": "Export Statistics", "category": "Export", "desc": "Export the currently selected SchoolSite plan statistics tab to Excel.", "content": [{ "type": "image", "src": "assets/images/Tools/export_plan_statistics_plan_as_studyareas_show_plan_comments_group.png", "alt": "Export plan statistics", "caption": "Export and review plan information from the Share tools." }], "details": "The Statistics Window must be open. Select the schools, grades, grade ranges, and statistic type before exporting; forecast-based statistics require a forecast." },
  { "name": "Export Plan as Study Areas", "category": "Export", "desc": "Export your current boundaries in Study Area format.", "content": [{ "type": "image", "src": "assets/images/Tools/export_plan_statistics_plan_as_studyareas_show_plan_comments_group.png", "alt": "Export plan as Study Areas", "caption": "Export and review plan information from the Share tools." }], "details": "Useful for feeding a finalized plan's boundaries back into future Data Setup imports." },
  { "name": "Show Plan Comments", "category": "Info", "desc": "Show comments recorded against the current plan.", "content": [{ "type": "image", "src": "assets/images/Tools/export_plan_statistics_plan_as_studyareas_show_plan_comments_group.png", "alt": "Show plan comments", "caption": "Export and review plan information from the Share tools." }], "details": "Comments are a lightweight way to track planning notes alongside a plan." },

  { "name": "Forecast Reports", "category": "Forecast Reporting", "desc": "Create and export forecast reports by geography and selected grade ranges.", "content": [{ "type": "image", "src": "assets/images/Tools/forecast_report_show_forecastcomment_symbology.png", "alt": "SchoolSite forecast reports", "caption": "Create forecast reports by geography and grade range." }], "details": "Open Forecasting > Forecast Reports, choose Study Areas, attendance areas, district/subdistrict, or other supported geographies, then select grade ranges. Export to Excel or text; some attendance-area reports include school capacity charts." },
  { "name": "Refresh Forecast", "category": "Forecast Reporting", "desc": "Reapply a forecast after one or more factors have been modified.", "content": [{ "type": "image", "src": "assets/images/Tools/factors_group.png", "alt": "Forecast factors workflow", "caption": "Reapply the forecast after factors change." }], "details": "Enabled whenever a factor has changed and the forecast is out of sync with it; disabled once the forecast is up to date." },
  { "name": "Lock Factors", "category": "Forecast Reporting", "desc": "Lock in the current factors and make this forecast read-only.", "content": [{ "type": "image", "src": "assets/images/Tools/factors_group.png", "alt": "Forecast factors workflow", "caption": "Lock the current forecast factors." }], "details": "Once locked, the forecast report is considered final and no further changes to the factors are possible." },
  { "name": "Enrollment Forecast", "category": "Forecast Reporting", "desc": "Estimate future school enrollment and export the enrollment forecast report to XLSX.", "content": [{ "type": "image", "src": "assets/images/enrollment_forecast.png", "alt": "Enrollment Forecast tool", "caption": "Configure and export an enrollment forecast." }], "details": "Requires at least two years of historical student data imported through Data Setup. Configure schools, grades, forecast years, and the Transfer Pattern or Rate of Change method before generating the report." },
  { "name": "PK Factors", "category": "Forecast Reporting", "desc": "Modify your district's pre-kindergarten birth factors.", "content": [{ "type": "image", "src": "assets/images/Tools/factors_group.png", "alt": "Forecast factors workflow", "caption": "Modify pre-kindergarten birth factors." }], "details": "PK factors play an important role in the forecast model, determining the number of incoming pre-kindergarten students." },
  { "name": "K Factors", "category": "Forecast Reporting", "desc": "Modify your district's kindergarten birth factors.", "content": [{ "type": "image", "src": "assets/images/Tools/factors_group.png", "alt": "Forecast factors workflow", "caption": "Modify kindergarten birth factors." }], "details": "Kindergarten factors, alongside PK factors, drive the projected number of incoming kindergarten students each year." },
  { "name": "Distributed Enrollment", "category": "Forecast Reporting", "desc": "Distribute the forecasted number of students at maturity across grade levels using weighted factors.", "content": [{ "type": "image", "src": "assets/images/Tools/factors_group.png", "alt": "Forecast factors workflow", "caption": "Distribute forecasted enrollment across grade levels." }], "details": "Elementary grades K-6 distribute evenly at 0.14285 and intermediate grades 7-8 at 0.5 (fixed). High school grades 9-12 can be weighted, but must total 1.00 â€” by default each is 0.25." },
  { "name": "Mobility Factors", "category": "Forecast Reporting", "desc": "Calculate mobility values by school and grade from historical student movement.", "content": [{ "type": "image", "src": "assets/images/Tools/factors_group.png", "alt": "Forecast factors workflow", "caption": "Review and export mobility values by school and grade." }], "details": "Open Forecasting > Factors > Mobility Factors, select a grade, and export the mobility summary to Excel. The output includes raw student counts and percentages used to assess calculation confidence." },
  { "name": "Student Yield Factors", "category": "Forecast Reporting", "desc": "Calculate and export Student Yield Factor reports for forecast housing assumptions.", "content": [{ "type": "image", "src": "assets/images/Tools/factors_group.png", "alt": "Forecast factors workflow", "caption": "Calculate and export Student Yield Factor reports." }], "details": "Open an existing or newly created forecast, choose Forecasting > Factors > Student Yield Factor, and export by elementary, middle, high, intermediate, or district-wide geography. Data Setup also provides SYF Export before a forecast exists." },
  { "name": "Projected Housing Units", "category": "Forecast Reporting", "desc": "Track projected housing developments, phases, unit types, and occupancy years.", "content": [{ "type": "image", "src": "assets/images/Tools/factors_group.png", "alt": "Forecast factors workflow", "caption": "Review projected housing and forecast factors." }], "details": "Supports up to ten phases per tract and Student Yield Factors for forecast calculations. The workflow includes Development Summary and Projects Summary exports to Excel." },
  { "name": "Build-out Yield Factors", "category": "Forecast Reporting", "desc": "Estimate how many students will be present once all development in a Study Area is finished.", "content": [{ "type": "image", "src": "assets/images/Tools/factors_group.png", "alt": "Forecast factors workflow", "caption": "Review build-out yield factors for forecast housing." }], "details": "Maturation Student Yield Factors are calculated regardless of construction year and applied to year 12 in the projected housing table, using geocoded student and tax-assessor housing data." },

  { "name": "Forecast Appearance", "category": "Forecast Display", "desc": "Change the map display appearance of an open forecast.", "content": [{ "type": "image", "src": "assets/images/Tools/forecast_report_show_forecastcomment_symbology.png", "alt": "Forecast appearance controls", "caption": "Control how forecast results appear on the map." }], "details": "Controls symbology used to visualize forecast results on the map." },
  { "name": "Show Forecast Comments", "category": "Forecast Display", "desc": "Show comments recorded against the current forecast.", "content": [{ "type": "image", "src": "assets/images/Tools/forecast_report_show_forecastcomment_symbology.png", "alt": "Forecast comments help", "caption": "Review notes associated with the current forecast." }], "details": "Mirrors Show Plan Comments, but scoped to a forecast." },
  { "name": "Identify Forecast", "category": "Forecast Display", "desc": "Identify the forecast Study Areas that you select on the map.", "content": [{ "type": "image", "src": "assets/images/Tools/identify_forecast_studyarea.png", "alt": "Identify forecast Study Areas", "caption": "Identify selected forecast Study Areas on the map." }], "details": "A redistricting forecast must be open and active for this tool to work." },

  { "name": "Student Reports", "category": "Analysis Tools", "desc": "Generate student reports by grade and other selected attributes for the selected area.", "content": [{ "type": "image", "src": "assets/images/Tools/student_report.png", "alt": "Student Reports tool", "caption": "Generate student reports for a selected area." }], "details": "Select an area on the map, choose grade and other attributes, and add fields from the Options menu before running the report. Export the result when an Excel output is needed." },
  { "name": "Demographic Reports", "category": "Analysis Tools", "desc": "Generate community and demographic reports for a selected study area using Esri Business Analyst Online data.", "content": [{ "type": "image", "src": "assets/images/Tools/demographic_report.png", "alt": "Demographic Reports tool", "caption": "Generate community and demographic reports for a study area." }], "details": "Choose a report type, define the study area by drawing a polygon, selecting polygon features, creating an area around a point, or using All Polygons. Generate PDF or Excel reports, review the cost estimate, and save each batch report to a selected folder when needed." },
  { "name": "Walk Zone Analysis", "category": "Analysis Tools", "desc": "Create service-area zones around selected schools based on walking or driving travel time or distance.", "content": [{ "type": "image", "src": "assets/images/Tools/walkzone.png", "alt": "Walk Zone Analysis tool", "caption": "Create walking or driving service-area zones around schools." }], "details": "Select a school layer and school(s), choose a travel mode such as Walk Time, Walk Distance, Drive Time, or Drive Distance, enter comma-separated break values, and run the ArcGIS Online network analysis. The resulting WalkZones feature class is added to the active map." },
  { "name": "Program Placement Analysis", "category": "Analysis Tools", "desc": "Identify the best school locations to serve student demand while considering capacity and the selected number of facilities.", "content": [{ "type": "image", "src": "assets/images/Tools/location_allocation.png", "alt": "Program Placement Analysis tool", "caption": "Evaluate school locations for student demand and capacity." }], "details": "Open the Location Allocation tool, choose the student and school layers, select candidate schools, enter a capacity for each school, and choose the number of optimal locations. Review the ArcGIS Online credit estimate and confirm the run to create Output Facilities, Output Demand Points, and Output Allocation Lines." },
  { "name": "Data Enrichment", "category": "Analysis Tools", "desc": "Enrich existing tract and Study Area datasets with additional data based on a forecast.", "content": [{ "type": "image", "src": "assets/images/Tools/data_enrichment.png", "alt": "Data Enrichment tool", "caption": "Enrich tract and Study Area datasets with forecast data." }], "details": "Tract enrichment adds Year1â€“Year10 forecasted student-count fields; Study Area enrichment creates enriched Study Area and aggregated attendance-boundary feature classes for the grade ranges defined in the forecast." },
  { "name": "Export Event Log", "category": "Analysis Tools", "desc": "Export the project event log to an Excel file in the project home directory.", "content": [{ "type": "image", "src": "assets/images/Tools/export_event_log.png", "alt": "Export project event log", "caption": "Export the project event log for analysis or support." }], "details": "Use the export for analysis or to email activity history to technical support when troubleshooting an issue. No forecast is required." },
  { "name": "Number Study Areas", "category": "Assign Tools", "desc": "Click a Study Area polygon to automatically assign the next available Study Area ID.", "content": [{ "type": "image", "src": "assets/images/Tools/number_Studyarea.png", "alt": "Number Study Areas tool", "caption": "Assign the next available Study Area ID to a selected polygon." }], "details": "Only available when a map with a valid Study Area layer (containing an STDYAREA field) is active." },

  { "name": "Import Programs", "category": "School Programs", "desc": "Browse for an Excel spreadsheet and import program data into a new table.", "content": [{ "type": "image", "src": "assets/images/Tools/school_program_group.png", "alt": "School program tools", "caption": "Manage school program data." }], "details": "The fastest way to bring an existing program roster into a plan in bulk." },
  { "name": "Add Programs", "category": "School Programs", "desc": "Open a panel to enter program details including name, capacity, and current location.", "content": [{ "type": "image", "src": "assets/images/Tools/school_program_group.png", "alt": "School program tools", "caption": "Manage school program data." }], "details": "Once added, the tool automatically updates school capacities based on the new program." },
  { "name": "Delete Programs", "category": "School Programs", "desc": "Delete a program from a school.", "content": [{ "type": "image", "src": "assets/images/Tools/school_program_group.png", "alt": "School program tools", "caption": "Manage school program data." }], "details": "After deletion, school capacity is updated accordingly." },
  { "name": "Reassign Program", "category": "School Programs", "desc": "Edit a program, including moving it to another school.", "content": [{ "type": "image", "src": "assets/images/Tools/school_program_group.png", "alt": "School program tools", "caption": "Manage school program data." }], "details": "Opens an edit panel scoped to the selected program." },

  { "name": "Program Summary Report", "category": "School Programs", "desc": "Generate and export a summary of programs, schools, and capacity changes.", "content": [{ "type": "image", "src": "assets/images/Tools/school_program_group.png", "alt": "School program summary", "caption": "Summarize programs, schools, and capacity changes." }], "details": "Review all programs, programs moved from their original location, original school capacities, and capacity changes caused by program placement. Export the selected summary to Excel." },
  { "name": "Automated Attendance Matrix", "category": "Reports", "desc": "Generate and export an attendance matrix showing resident versus enrolled schools.", "content": [{ "type": "image", "src": "assets/images/Tools/create_gallery.png", "alt": "Attendance matrix report", "caption": "Generate an attendance matrix from configured grade ranges." }], "details": "Configure grade ranges for each school type before generating the matrix. Requires relevant school and student data; the Excel output includes the configured grade bands and CAPACITY where supported." },
  { "name": "Utilization Report", "category": "Reports", "desc": "Generate a standardized utilization or UTA table and export it to Excel.", "content": [{ "type": "image", "src": "assets/images/Tools/create_gallery.png", "alt": "Utilization report", "caption": "Generate a utilization report from attendance and capacity data." }], "details": "Uses attendance matrix data, configured grade bands, school capacity, and approved transfer and adjustment rules. Complete Data Setup and select the grade levels to include." },
  { "name": "Plan Summary Report", "category": "Statistics", "desc": "Summarize forecasted resident students grouped into proposed attendance areas.", "content": [{ "type": "image", "src": "assets/images/plan_summary.png", "alt": "Plan summary report", "caption": "Summarize forecasted students by proposed attendance area." }], "details": "Requires an active plan based on a forecast. The report combines forecasted resident students with proposed boundary changes and can be exported to Excel." },
  { "name": "Export Student Report", "category": "Forecast Reporting", "desc": "Export the student summary for the active plan or forecast to Excel.", "content": [{ "type": "image", "src": "assets/images/export_student_report.png", "alt": "Export student report", "caption": "Export the student summary for the active plan or forecast." }], "details": "Summarizes the student data used in the current plan or forecast and writes the Excel file to the project home directory." }
];
