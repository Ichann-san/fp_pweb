# Learning Hub Demo Script

Estimated duration: 3–4 minutes.

## 1. Introduction

Show the home page and explain that Learning Hub uses raw HTML, CSS, and JavaScript with a native PHP backend. Point out the responsive navigation, theme toggle, and course catalog.

## 2. Account flow

1. Open **Login**, switch to **Register**, and enter a username, unique email, and an eight-character password.
2. Register, then sign in with the same credentials.
3. Explain that PHP hashes the password, creates the session, and records both successful and failed login attempts in server-side JSON storage.

## 3. Learning flow

1. Return home and enroll in a course.
2. Open its course page and select different chapters.
3. Mark a chapter complete; show the progress bar changing.
4. Refresh the page and show that the server returns the saved progress.
5. Unmark the chapter to demonstrate the two-way update.

## 4. Code walkthrough

- `config/app.php`: JSON repository, catalog, sessions, and API helpers
- `api/auth/login.php`: credential verification and login event recording
- `src/js/auth.js`: browser-to-PHP authentication requests
- `src/js/course.js`: Markdown rendering and progress synchronization
- `graphify-out/graph.html`: interactive project architecture graph

## 5. Deployment note and closing

If demonstrating Vercel, state clearly that its `/tmp` JSON storage and PHP sessions are temporary. For stable accounts and progress, run the same code on writable PHP hosting or later replace the JSON repository with a managed database.
