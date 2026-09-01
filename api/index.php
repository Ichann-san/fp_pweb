<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/app.php';

learning_hub_require_method('GET');
learning_hub_json([
    'status' => 'ok',
    'message' => 'Learning Hub API is running.',
    'storage' => learning_hub_is_vercel() ? 'temporary-vercel-json' : 'local-json',
    'endpoints' => [
        'POST /api/auth/register.php',
        'POST /api/auth/login.php',
        'POST /api/auth/logout.php',
        'GET /api/auth/check_session.php',
        'GET /api/courses/read.php',
        'GET /api/courses/detail.php?slug=html',
        'POST /api/enroll/create.php',
        'GET /api/enroll/my_courses.php',
        'GET /api/progress/read.php?course_slug=html',
        'POST /api/progress/update.php',
    ],
]);
