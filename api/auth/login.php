<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/app.php';

learning_hub_require_method('POST');
$body = learning_hub_request_body();
$email = strtolower(trim((string) ($body['email'] ?? '')));
$password = (string) ($body['password'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') {
    learning_hub_json(['message' => 'Enter your email and password.'], 422);
}

$authenticatedUser = learning_hub_update_data(static function (array &$data) use ($email, $password): ?array {
    $matchedUser = null;
    foreach ($data['users'] as $user) {
        if (strtolower((string) $user['email']) === $email) {
            $matchedUser = $user;
            break;
        }
    }

    $success = $matchedUser !== null && password_verify($password, (string) $matchedUser['password_hash']);
    $event = [
        'id' => learning_hub_next_id($data['login_events']),
        'user_id' => $success ? (int) $matchedUser['id'] : null,
        'email' => $email,
        'outcome' => $success ? 'success' : 'failure',
        'ip' => substr((string) ($_SERVER['REMOTE_ADDR'] ?? ''), 0, 45),
        'user_agent' => substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 180),
        'created_at' => gmdate('c'),
    ];
    $data['login_events'][] = $event;
    $data['login_events'] = array_slice($data['login_events'], -500);

    if (!$success) {
        return null;
    }

    unset($matchedUser['password_hash']);
    return $matchedUser;
});

if ($authenticatedUser === null) {
    learning_hub_json(['message' => 'Invalid email or password.'], 401);
}

learning_hub_start_session();
session_regenerate_id(true);
$_SESSION['user_id'] = $authenticatedUser['id'];
$_SESSION['username'] = $authenticatedUser['username'];
$_SESSION['email'] = $authenticatedUser['email'];

learning_hub_json(['message' => 'Login successful.', 'user' => $authenticatedUser]);
