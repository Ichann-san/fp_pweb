<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/app.php';

learning_hub_require_method('POST');
$user = learning_hub_require_user();
$body = learning_hub_request_body();
$course = learning_hub_find_course($body['course_id'] ?? $body['course_slug'] ?? '');
if ($course === null) {
    learning_hub_json(['message' => 'Choose a valid course.'], 422);
}

$created = learning_hub_update_data(static function (array &$data) use ($user, $course): bool {
    foreach ($data['enrollments'] as $enrollment) {
        if ((int) $enrollment['user_id'] === $user['id'] && (int) $enrollment['course_id'] === $course['id']) {
            return false;
        }
    }
    $data['enrollments'][] = [
        'id' => learning_hub_next_id($data['enrollments']),
        'user_id' => $user['id'],
        'course_id' => $course['id'],
        'enrolled_at' => gmdate('c'),
    ];
    return true;
});

learning_hub_json(['message' => $created ? 'Enrollment saved.' : 'You are already enrolled.', 'course' => $course], $created ? 201 : 200);
