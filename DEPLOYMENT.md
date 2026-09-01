# Deployment Guide

## Local PHP server

Requirements: PHP 8 or newer. No database server or dependency installation is needed.

```bash
php -S localhost:8000
```

Then open `http://localhost:8000/src/html/index.html`. The application creates `data/learning-hub.json` on its first write.

For a custom durable local path:

```powershell
$env:LEARNING_HUB_DATA_FILE = 'C:\path\to\learning-hub.json'
php -S localhost:8000
```

The containing directory must be writable by PHP.

## Vercel demonstration deployment

The repository contains `vercel.json` for the community `vercel-php` runtime. Import the repository into Vercel and deploy it without database environment variables.

On Vercel, the application automatically uses the function temporary directory for:

- the JSON data file;
- file-lock state while a request accesses the JSON file; and
- PHP session files.

Important: this storage is ephemeral. Accounts, login records, enrollments, progress, and sessions may vanish or differ across function instances. Do not use this mode for important or sensitive data.

## Shared PHP hosting

Upload the repository to a PHP 8-compatible host. Ensure PHP can write to the project `data/` directory, or configure `LEARNING_HUB_DATA_FILE` to a writable private path outside the public web root. Do not expose the JSON data file directly through the web server.

## Post-deployment checks

1. Open `/src/html/index.html` and confirm the catalog loads.
2. Register a temporary account.
3. Log out and sign in again.
4. Enroll in a course and mark one chapter complete.
5. Refresh and confirm the progress remains for that session/storage instance.

For durable production deployment, replace the JSON repository in `config/app.php` with a managed database while keeping the existing API response shapes.
