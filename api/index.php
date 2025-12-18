<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

echo json_encode([
    "status" => "ok",
    "message" => "Learning Hub API is running",
    "version" => "1.0.0",
    "endpoints" => [
        "auth" => [
            "POST /api/auth/login.php" => "Login user",
            "POST /api/auth/register.php" => "Register new user",
            "POST /api/auth/logout.php" => "Logout user",
            "GET /api/auth/check_session.php" => "Check user session"
        ],
        "courses" => [
            "GET /api/courses/read.php" => "Get all courses",
            "GET /api/courses/detail.php?slug=xxx" => "Get course details"
        ],
        "enroll" => [
            "POST /api/enroll/create.php" => "Enroll in a course",
            "GET /api/enroll/my_courses.php" => "Get user's enrolled courses"
        ],
        "progress" => [
            "POST /api/progress/update.php" => "Update chapter progress"
        ]
    ],
    "php_version" => PHP_VERSION,
    "timestamp" => date("Y-m-d H:i:s")
]);
?>
