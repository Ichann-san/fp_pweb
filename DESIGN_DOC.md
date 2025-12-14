# IchanHub - System Design Document

## 1. Application Concept
**Name:** IchanHub (Web Programming Course Platform)

**Description:**
A web-based platform offering curated courses on web development. It features user authentication, a dashboard, course progress tracking, and dynamic content delivery.

**Core Features:**
*   **Auth:** Login/Register (Session based).
*   **Courses:** Dynamic listing fetched from DB.
*   **Progress Tracking:** Users can mark chapters as complete; progress is saved to the database.
*   **Dashboard:** View enrolled courses and completion percentage.

## 2. Database Schema

### Tables

#### `users`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | INT | PK, AUTO_INCREMENT | Unique User ID |
| `username` | VARCHAR(50) | UNIQUE, NOT NULL | Display Name |
| `email` | VARCHAR(100) | UNIQUE, NOT NULL | Login Email |
| `password` | VARCHAR(255) | NOT NULL | Hashed Password |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Registration Time |

#### `courses`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | INT | PK, AUTO_INCREMENT | Course ID |
| `slug` | VARCHAR(50) | UNIQUE, NOT NULL | URL friendly ID (e.g., 'html', 'js') |
| `title` | VARCHAR(100) | NOT NULL | Course Title |
| `description` | TEXT | NULL | Short Description |
| `image_url` | VARCHAR(255) | NULL | Card Image URL |
| `badge_class` | VARCHAR(50) | NULL | CSS Class for Badge Color |
| `link` | VARCHAR(255) | NOT NULL | Link to Course Page |

#### `enrollments` (User-Course Relationship)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | INT | PK, AUTO_INCREMENT | Enrollment ID |
| `user_id` | INT | FK -> users(id) | User |
| `course_id` | INT | FK -> courses(id) | Course |
| `enrolled_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Date Enrolled |

#### `progress` (Chapter Completion)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | INT | PK, AUTO_INCREMENT | Progress ID |
| `user_id` | INT | FK -> users(id) | User |
| `course_id` | INT | FK -> courses(id) | Course |
| `chapter_id` | VARCHAR(50) | NOT NULL | Chapter ID (e.g., 'intro', 'forms') |
| `completed_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Completion Time |

## 3. Directory Structure

```text
/fp_pweb
├── /config
│   └── database.php       # DB Connection
├── /api                   # PHP Endpoints
│   ├── auth
│   │   ├── login.php
│   │   └── register.php
│   ├── courses
│   │   ├── index.php      # Get all courses
│   │   └── show.php       # Get specific course details
│   └── progress
│       ├── update.php     # Mark chapter complete
│       └── get.php        # Get user progress
├── /src                   # Frontend Source
│   ├── html/
│   ├── css/
│   ├── js/
│   │   ├── auth.js        # Calls /api/auth/*
│   │   ├── course.js      # Calls /api/progress/*
│   │   └── script.js      # Calls /api/courses/*
│   └── ...
├── /assets                # Shared assets
└── database.sql           # Setup Script
```

## 4. Job Division

### Member A: Backend (API & DB)
*   Setup MySQL Database with `users`, `courses`, `enrollments`, `progress`.
*   Create `config/database.php`.
*   Build Auth APIs (Login/Register).
*   Build Progress APIs (Save/Load progress).

### Member B: Frontend Logic (JS)
*   Refactor `course.js` to send/receive progress from API.
*   Refactor `script.js` to load courses dynamically.
*   Handle user session state (hide/show Login button).

### Member C: UI & Content
*   Design and Content for Course Pages.
*   Dashboard UI (showing user's enrolled courses).