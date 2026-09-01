<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/app.php';

learning_hub_require_method('GET');
$user = learning_hub_current_user();
learning_hub_json(['is_logged_in' => $user !== null, 'user' => $user]);
