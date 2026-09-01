<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/app.php';

learning_hub_require_method('GET');
$identifier = $_GET['slug'] ?? $_GET['id'] ?? '';
$course = learning_hub_find_course($identifier);
if ($course === null) {
    learning_hub_json(['message' => 'Course not found.'], 404);
}
learning_hub_json($course);
