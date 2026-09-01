# Learning Hub System Design

## Scope

Learning Hub is a course catalog and lesson reader with account registration, PHP sessions, enrollment, and per-chapter progress. Application behavior remains native JavaScript; the restored legacy presentation uses Bootstrap plus project CSS.

## Data flow

```text
Browser pages
  -> native JavaScript modules
  -> JSON requests to PHP endpoints
  -> config/app.php storage/session helpers
  -> locked JSON file

Course page
  -> local Markdown lesson
  -> safe in-project Markdown renderer
  -> lesson DOM
```

The catalog is defined once in `config/app.php`; course pages keep their chapter metadata near the page that consumes it.

## JSON model

```json
{
  "version": 1,
  "users": [],
  "login_events": [],
  "enrollments": [],
  "progress": []
}
```

- Passwords are stored using `password_hash`, never as plain text.
- Login events record success/failure, time, user when known, and limited request metadata.
- Enrollment is unique per user/course.
- Progress is unique per user/course/chapter and supports complete or incomplete state.
- Reads and writes take shared/exclusive locks on the JSON file before accessing it.

## Runtime choices

Local and shared hosting use `data/learning-hub.json` unless `LEARNING_HUB_DATA_FILE` overrides it. Vercel uses its temporary directory because the approved demonstration architecture intentionally has no external database. Vercel persistence and sessions are therefore best-effort only.

## Security boundaries

- Mutating endpoints require POST.
- Enrollment and progress require an authenticated session.
- Session IDs regenerate after login.
- Cookies are `HttpOnly`, `SameSite=Lax`, and `Secure` under HTTPS.
- API exceptions return generic messages to clients.
- Rendered Markdown escapes raw HTML and only creates `http`/`https` links.

This remains a teaching/demo system. Durable multi-instance deployment should replace the JSON repository with a managed database.
