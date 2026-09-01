<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/app.php';

learning_hub_require_method('POST');
$user = learning_hub_require_user();
$body = learning_hub_request_body();
$course = learning_hub_find_course($body['course_id'] ?? $body['course_slug'] ?? '');
$chapterId = trim((string) ($body['chapter_id'] ?? ''));
$completed = ($body['completed'] ?? (($body['status'] ?? '') === 'completed')) === true;

if ($course === null || !preg_match('/^[a-z0-9-]{1,60}$/', $chapterId)) {
    learning_hub_json(['message' => 'Course or chapter is invalid.'], 422);
}

learning_hub_update_data(static function (array &$data) use ($user, $course, $chapterId, $completed): void {
    $matches = static fn(array $item): bool =>
        (int) $item['user_id'] === $user['id'] &&
        (int) $item['course_id'] === $course['id'] &&
        (string) $item['chapter_id'] === $chapterId;

    if (!$completed) {
        $data['progress'] = array_values(array_filter($data['progress'], static fn(array $item): bool => !$matches($item)));
        return;
    }

    foreach ($data['progress'] as $item) {
        if ($matches($item)) {
            return;
        }
    }
    $data['progress'][] = [
        'id' => learning_hub_next_id($data['progress']),
        'user_id' => $user['id'],
        'course_id' => $course['id'],
        'chapter_id' => $chapterId,
        'completed_at' => gmdate('c'),
    ];
});

learning_hub_json(['message' => $completed ? 'Chapter marked complete.' : 'Chapter marked incomplete.', 'chapter_id' => $chapterId, 'completed' => $completed]);
