# Graph Report - fp_pweb  (2026-09-01)

## Corpus Check
- 52 files · ~47,052 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 192 nodes · 229 edges · 27 communities (24 shown, 3 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8e9b8591`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- HTML Front End Course Page
- Learning Hub
- UI/UX Design
- CSS Layout Course Page
- JavaScript
- Learning Hub Deployment Guide
- Learning Hub LMS Repair
- src/html/index.html Entry Point
- vercel.json
- auth.js
- AuthModule
- Curled Cat
- app.php
- static-check.mjs
- api-smoke.mjs

## God Nodes (most connected - your core abstractions)
1. `HTML Front End Course Page` - 13 edges
2. `CSS Layout Course Page` - 13 edges
3. `AuthModule` - 10 edges
4. `LearningHubUI` - 10 edges
5. `CourseModule` - 8 edges
6. `CSS Engineering Best Practices` - 6 edges
7. `Learning Hub` - 6 edges
8. `JavaScript Course Page` - 6 edges
9. `learning_hub_prepare_storage()` - 5 edges
10. `Semantic HTML` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Locked Server-side JSON Storage` --semantically_similar_to--> `Locked JSON File`  [INFERRED] [semantically similar]
  README.md → DESIGN_DOC.md
- `End-to-end API Smoke Test` --semantically_similar_to--> `API Smoke Verification`  [INFERRED] [semantically similar]
  README.md → REPORT.md
- `Interactive Graphify Architecture Graph` --semantically_similar_to--> `Interactive Architecture Graph Demonstration`  [INFERRED] [semantically similar]
  README.md → VIDEO_SCRIPT.md
- `AuthModule` --references--> `CSS Layout Course Page`  [EXTRACTED]
  src/js/auth.js → src/html/course/css.html
- `AuthModule` --references--> `HTML Front End Course Page`  [EXTRACTED]
  src/js/auth.js → src/html/course/html.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **UI/UX Core Principles** — src_content_uiux_intro_user_centered_design, src_content_uiux_intro_accessibility, src_content_uiux_intro_simplicity [EXTRACTED 1.00]
- **Sleeping Cat Visual** — assets_icon_sleeping_cat_icon, assets_icon_curled_cat, assets_icon_closed_eyes_and_smile, assets_icon_minimal_white_line_art [EXTRACTED 1.00]
- **Learning Hub Demonstration Journey** — video_script_account_flow, video_script_learning_flow, video_script_code_walkthrough, video_script_ephemeral_storage_disclosure [EXTRACTED 1.00]
- **Learning Hub Request and Storage Flow** — design_doc_browser_pages, design_doc_javascript_modules, design_doc_php_endpoints, design_doc_app_helpers, design_doc_locked_json_file [EXTRACTED 1.00]
- **Learning Hub Runtime Stack** — readme_native_frontend, readme_php_json_api, readme_locked_json_storage, readme_php_sessions [EXTRACTED 1.00]
- **Responsive and Accessible CSS Practices** — src_content_css_responsive_responsive_design, src_content_css_colors_color_accessibility, src_content_css_animations_reduced_motion, src_content_html_accessibility_web_accessibility [INFERRED 0.85]

## Communities (27 total, 3 thin omitted)

### Community 0 - "HTML Front End Course Page"
Cohesion: 0.08
Nodes (30): Content Security Policy, HTML Engineering Best Practices, Form Accessibility, Form Validation, Forms and Input, Image Accessibility, Image Optimization, Images and Media (+22 more)

### Community 1 - "Learning Hub"
Cohesion: 0.08
Nodes (31): Application Storage and Session Helpers, Browser Pages, Central Course Catalog, Native JavaScript Modules, Learning State JSON Model, Learning Hub System Design, Locked JSON File, Managed Database Migration (+23 more)

### Community 2 - "UI/UX Design"
Cohesion: 0.40
Nodes (5): Antoine de Saint-Exupéry, UI/UX Design Process, Simplicity, UI/UX Design, User-Centered Design

### Community 3 - "CSS Layout Course Page"
Cohesion: 0.13
Nodes (22): CSS Transitions and Animations, Reduced Motion Preference, BEM Component Architecture, Critical CSS, CSS Engineering Best Practices, Border-box Sizing, CSS Box Model, Color Accessibility (+14 more)

### Community 4 - "JavaScript"
Cohesion: 0.31
Nodes (9): JavaScript, JavaScript Runtimes, Operators and Expressions, Short-Circuit Evaluation, Strict Equality, Block Scope, Type Coercion, Variables and Data Types (+1 more)

### Community 5 - "Learning Hub Deployment Guide"
Cohesion: 0.22
Nodes (10): LEARNING_HUB_DATA_FILE Override, Learning Hub Deployment Guide, Local PHP Server Deployment, Durable Managed Database Upgrade, Post-deployment Verification Checks, Shared PHP Hosting Deployment, Vercel Demonstration Deployment, Vercel Temporary JSON and Session Runtime (+2 more)

### Community 6 - "Learning Hub LMS Repair"
Cohesion: 0.33
Nodes (7): Backend Progress Source of Truth, Ephemeral Vercel Demonstration Storage, Shared JSON-file Persistence, Learning Hub LMS Repair, Raw HTML CSS JavaScript and PHP Stack, Secure PHP Sessions, Single Navigation Rendering Owner

### Community 8 - "vercel.json"
Cohesion: 0.33
Nodes (5): runtime, functions, api/**/*.php, rewrites, version

### Community 11 - "AuthModule"
Cohesion: 0.11
Nodes (21): Algorithmic Problem Solving, Competitive Programming, Data Science Process, Python Data Science Ecosystem, Entanglement, Interference, Quantum Computing, Superposition (+13 more)

### Community 12 - "Curled Cat"
Cohesion: 0.50
Nodes (4): Closed Eyes and Gentle Smile, Curled Cat, Minimal White Line Art, Sleeping Cat Icon

### Community 13 - "app.php"
Cohesion: 0.23
Nodes (15): learning_hub_courses(), learning_hub_current_user(), learning_hub_data_path(), learning_hub_empty_data(), learning_hub_find_course(), learning_hub_is_vercel(), learning_hub_json(), learning_hub_normalize_data() (+7 more)

### Community 37 - "static-check.mjs"
Cohesion: 0.33
Nodes (4): appFiles, failures, htmlFiles, root

## Knowledge Gaps
- **42 isolated node(s):** `account`, `root`, `htmlFiles`, `failures`, `appFiles` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HTML Front End Course Page` connect `HTML Front End Course Page` to `AuthModule`, `CSS Layout Course Page`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Why does `CSS Layout Course Page` connect `CSS Layout Course Page` to `AuthModule`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `AuthModule` connect `AuthModule` to `HTML Front End Course Page`, `auth.js`, `CSS Layout Course Page`, `JavaScript`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **What connects `account`, `root`, `htmlFiles` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `HTML Front End Course Page` be split into smaller, more focused modules?**
  _Cohesion score 0.08045977011494253 - nodes in this community are weakly interconnected._
- **Should `Learning Hub` be split into smaller, more focused modules?**
  _Cohesion score 0.07526881720430108 - nodes in this community are weakly interconnected._
- **Should `CSS Layout Course Page` be split into smaller, more focused modules?**
  _Cohesion score 0.12554112554112554 - nodes in this community are weakly interconnected._