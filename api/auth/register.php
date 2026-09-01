<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/app.php';

learning_hub_require_method('POST');
$body = learning_hub_request_body();
$username = trim((string) ($body['username'] ?? ''));
$email = strtolower(trim((string) ($body['email'] ?? '')));
$password = (string) ($body['password'] ?? '');

if (!preg_match('/^[A-Za-z0-9 _-]{3,30}$/', $username)) {
    learning_hub_json(['message' => 'Username must be 3-30 characters and use letters, numbers, spaces, underscores, or hyphens.'], 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    learning_hub_json(['message' => 'Enter a valid email address.'], 422);
}
if (strlen($password) < 8) {
    learning_hub_json(['message' => 'Password must be at least 8 characters.'], 422);
}

$createdUser = learning_hub_update_data(static function (array &$data) use ($username, $email, $password): ?array {
    foreach ($data['users'] as $user) {
        if (strtolower((string) $user['email']) === $email || strtolower((string) $user['username']) === strtolower($username)) {
            return null;
        }
    }

    $user = [
        'id' => learning_hub_next_id($data['users']),
        'username' => $username,
        'email' => $email,
        'password_hash' => password_hash($password, PASSWORD_DEFAULT),
        'created_at' => gmdate('c'),
    ];
    $data['users'][] = $user;
    unset($user['password_hash']);
    return $user;
});

if ($createdUser === null) {
    learning_hub_json(['message' => 'That username or email is already registered.'], 409);
}

learning_hub_json(['message' => 'Account created. You can now log in.', 'user' => $createdUser], 201);
