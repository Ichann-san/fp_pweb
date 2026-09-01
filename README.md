# Learning Hub

Learning Hub is a small learning management system built with raw HTML, CSS, and JavaScript plus a PHP JSON API. Users can create an account, sign in, enroll in courses, read Markdown lessons, and save chapter progress.

## Stack

- Frontend: native HTML5 and browser JavaScript with the restored Bootstrap 5 visual layer and project CSS
- Backend: PHP 8+
- Storage: one server-side JSON file guarded by file locking
- Sessions: PHP sessions with `HttpOnly` and `SameSite=Lax` cookies
- Content: local Markdown files rendered by a small in-project renderer

No JavaScript framework, package manager, or SQL server is required. The restored legacy UI loads Bootstrap and Inter from CDNs.

## Run locally

From the project root:

```bash
php -S localhost:8000
```

Open `http://localhost:8000/src/html/index.html`.

Runtime data is created at `data/learning-hub.json` and is ignored by Git. To store it elsewhere, set `LEARNING_HUB_DATA_FILE` to an absolute writable path before starting PHP.

## Main structure

```text
api/                 PHP endpoints for auth, courses, enrollment, progress
assets/              Local brand artwork
config/app.php       Catalog, sessions, JSON storage, and API helpers
src/css/             Raw CSS design system and course styles
src/html/            Home, authentication, and course pages
src/js/              Navigation, authentication, and course behavior
src/content/         Course lessons in Markdown
tests/api-smoke.mjs  End-to-end API smoke test
graphify-out/         Interactive architecture graph and report
```

## API

| Feature | Method and path |
|---|---|
| Register | `POST /api/auth/register.php` |
| Login | `POST /api/auth/login.php` |
| Session | `GET /api/auth/check_session.php` |
| Logout | `POST /api/auth/logout.php` |
| Courses | `GET /api/courses/read.php` |
| Course detail | `GET /api/courses/detail.php?id=html` |
| Enroll | `POST /api/enroll/create.php` |
| My courses | `GET /api/enroll/my_courses.php` |
| Read progress | `GET /api/progress/read.php?course_id=html` |
| Update progress | `POST /api/progress/update.php` |

JSON responses use a `success` boolean and either `data` or `message`.

## Verify

With the local PHP server running at port 8000:

```bash
node tests/api-smoke.mjs http://127.0.0.1:8000
```

The test covers registration, failed and successful login recording, session state, enrollment, and progress updates. It uses a unique account each run.

## Deployment note

The included Vercel configuration runs PHP through the community PHP runtime. On Vercel, JSON data and PHP sessions are stored in the function's temporary directory. They can disappear after a cold start, redeployment, or instance change and are not shared reliably between instances. This is suitable only for a demonstration with non-sensitive data. See [DEPLOYMENT.md](DEPLOYMENT.md).

## Team

| Name | NRP | Contribution |
|---|---|---|
| Maulana Ikhsan | 5025241163 | Frontend development |
| Adriel Mahira Dharma | 5025241097 | Backend development |
| Ja'far Balyan Al Karim | 5025241040 | Learning content |
