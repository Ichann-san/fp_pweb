<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/app.php';

learning_hub_require_method('GET');
$user = learning_hub_require_user();
$data = learning_hub_read_data();
$records = [];

foreach ($data['enrollments'] as $enrollment) {
    if ((int) $enrollment['user_id'] !== $user['id']) {
        continue;
    }
    $course = learning_hub_find_course($enrollment['course_id']);
    if ($course === null) {
        continue;
    }
    $course['enrolled_at'] = $enrollment['enrolled_at'];
    $course['completed_chapters'] = count(array_filter($data['progress'], static fn(array $item): bool =>
        (int) $item['user_id'] === $user['id'] && (int) $item['course_id'] === $course['id']
    ));
    $records[] = $course;
}

usort($records, static fn(array $a, array $b): int => strcmp($b['enrolled_at'], $a['enrolled_at']));
learning_hub_json(['records' => $records]);
