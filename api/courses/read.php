<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/app.php';

learning_hub_require_method('GET');
learning_hub_json(['records' => learning_hub_courses()]);
