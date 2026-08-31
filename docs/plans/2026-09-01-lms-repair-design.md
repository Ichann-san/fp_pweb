# Learning Hub Repair Design

Date: 2026-09-01
Status: Approved

## Goal

Repair the existing Learning Hub LMS while preserving its raw HTML, CSS, JavaScript, and PHP stack. Improve reliability, authentication, UI consistency, and maintainability without changing the current information architecture or course URLs.

## Approved Architecture

Use JSON-file persistence with two storage locations:

- Local development: `data/learning-hub.json`
- Vercel PHP runtime: a file inside `sys_get_temp_dir()`

Vercel storage is intentionally treated as demonstration storage. Accounts, sessions, login records, enrollments, and progress may disappear after a cold start, function-instance change, or deployment.

## Authentication

- Registration collects username, email, password, and password confirmation.
- PHP validates and normalizes all input.
- Passwords are stored only through `password_hash()` and checked through `password_verify()`.
- PHP sessions identify the current user. On Vercel, the session path uses the temporary runtime directory.
- Session cookies use `HttpOnly`, `SameSite=Lax`, and `Secure` when the request uses HTTPS.
- API responses use a consistent JSON structure and appropriate HTTP status codes.
- Login records store timestamp, normalized email, outcome, user ID when available, and limited request metadata. Passwords are never logged.

## Storage

A shared PHP storage layer owns reads and writes. It initializes a safe empty data shape, uses file locking for writes, writes through a temporary file where supported, and never exposes the storage file through an API route.

The data shape contains:

- `users`
- `login_events`
- `enrollments`
- `progress`

Course catalog metadata remains in the existing project data unless consolidation is clearly safe during implementation.

## Frontend Repair

- Fix the registration contract mismatch between `auth.js` and `register.php`.
- Replace brittle relative API paths with origin-rooted `/api/...` paths.
- Give navigation rendering one owner so authentication initialization cannot race with homepage rendering.
- Add clear loading, success, empty, and error states.
- Keep the current indigo identity and Bootstrap dependency.
- Improve spacing, form hierarchy, focus visibility, button consistency, mobile navigation, and course-page rhythm.
- Preserve current page routes, section IDs, course slugs, and primary navigation labels.

Design settings:

- Redesign mode: preserve
- Design variance: 4
- Motion intensity: 3
- Visual density: 5
- Theme: existing light and dark modes
- Accent: existing indigo

## Progress and Enrollment

- Authenticated enrollment and progress updates use the shared JSON storage.
- Progress supports both completion and reversal.
- Progress retrieval comes from the backend for authenticated users.
- Local storage may cache presentation state, but it is not the source of truth for authenticated progress.
- Logged-out users receive a clear login prompt instead of silent failure.

## Cleanup

- Remove dead navigation entries and unused helpers.
- Remove debug logging and obsolete comments.
- Remove a stylesheet only after verifying no HTML page references it.
- Consolidate repeated course-page markup only when it does not change URLs or content behavior.
- Keep documentation that still describes the resulting system and update stale backend notes.

## Graphify

Build a baseline graph before implementation, then update or rebuild it after the repair. Final deliverables are:

- `graphify-out/graph.json`
- `graphify-out/graph.html`
- `graphify-out/GRAPH_REPORT.md`

## Verification

- JavaScript syntax checks for every source file.
- PHP syntax checks for every endpoint, with local PHP extension warnings reported separately.
- Static link and asset-path checks across HTML files.
- API tests for registration, duplicate registration, login success, login failure, session check, logout, enrollment, and progress changes.
- Responsive and theme inspection for homepage, login page, and representative course pages.
- Final unused-code and debug-marker scan.
- Graph health check after the final Graphify build.

## Stop Condition

Stop when all existing pages load without known code errors, authentication works with the approved JSON storage limitations, UI defects in the inspected pages are corrected, dead code is removed with evidence, and final Graphify outputs describe the repaired project.
