<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/app.php';

learning_hub_require_method('GET');
$user = learning_hub_require_user();
$course = learning_hub_find_course($_GET['course_id'] ?? $_GET['course_slug'] ?? '');
if ($course === null) {
    learning_hub_json(['message' => 'Course not found.'], 404);
}

$data = learning_hub_read_data();
$completed = [];
foreach ($data['progress'] as $item) {
    if ((int) $item['user_id'] === $user['id'] && (int) $item['course_id'] === $course['id']) {
        $completed[] = (string) $item['chapter_id'];
    }
}

learning_hub_json(['course_id' => $course['id'], 'course_slug' => $course['slug'], 'completed' => $completed]);
