<?php
declare(strict_types=1);

const LEARNING_HUB_DATA_VERSION = 1;

function learning_hub_courses(): array
{
    return [
        ['id' => 1, 'slug' => 'html', 'title' => 'HTML Front End', 'description' => 'Build accessible page structure with semantic HTML.', 'image_url' => '/assets/icon.svg', 'badge_class' => 'badge-violet', 'link' => '/src/html/course/html.html'],
        ['id' => 2, 'slug' => 'javascript', 'title' => 'JavaScript', 'description' => 'Add logic and interaction to modern web pages.', 'image_url' => '/assets/icon.svg', 'badge_class' => 'badge-yellow', 'link' => '/src/html/course/javascript.html'],
        ['id' => 3, 'slug' => 'css', 'title' => 'CSS Layout', 'description' => 'Create responsive layouts and polished visual systems.', 'image_url' => '/assets/icon.svg', 'badge_class' => 'badge-green', 'link' => '/src/html/course/css.html'],
        ['id' => 4, 'slug' => 'cp', 'title' => 'Competitive Programming', 'description' => 'Practice algorithms and structured problem solving.', 'image_url' => '/assets/icon.svg', 'badge_class' => 'badge-indigo', 'link' => '/src/html/course/cp.html'],
        ['id' => 5, 'slug' => 'quantum', 'title' => 'Quantum Computing', 'description' => 'Explore qubits, superposition, and quantum algorithms.', 'image_url' => '/assets/icon.svg', 'badge_class' => 'badge-pink', 'link' => '/src/html/course/quantum.html'],
        ['id' => 6, 'slug' => 'uiux', 'title' => 'UI/UX Design', 'description' => 'Design clear, useful, and accessible interfaces.', 'image_url' => '/assets/icon.svg', 'badge_class' => 'badge-orange', 'link' => '/src/html/course/uiux.html'],
        ['id' => 7, 'slug' => 'datascience', 'title' => 'Data Science with Python', 'description' => 'Learn a practical workflow for analyzing data.', 'image_url' => '/assets/icon.svg', 'badge_class' => 'badge-sky', 'link' => '/src/html/course/datascience.html'],
    ];
}

function learning_hub_empty_data(): array
{
    return [
        'version' => LEARNING_HUB_DATA_VERSION,
        'users' => [],
        'login_events' => [],
        'enrollments' => [],
        'progress' => [],
    ];
}

function learning_hub_is_vercel(): bool
{
    return getenv('VERCEL') === '1' || getenv('NOW_REGION') !== false;
}

function learning_hub_data_path(): string
{
    $configured = getenv('LEARNING_HUB_DATA_FILE');
    if ($configured) {
        return $configured;
    }

    if (learning_hub_is_vercel()) {
        return rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'learning-hub-data.json';
    }

    return dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'learning-hub.json';
}

function learning_hub_normalize_data($decoded): array
{
    $data = is_array($decoded) ? $decoded : [];
    $defaults = learning_hub_empty_data();

    foreach ($defaults as $key => $value) {
        if (!array_key_exists($key, $data) || (is_array($value) && !is_array($data[$key]))) {
            $data[$key] = $value;
        }
    }

    return $data;
}

function learning_hub_prepare_storage(): string
{
    $path = learning_hub_data_path();
    $directory = dirname($path);

    if (!is_dir($directory) && !mkdir($directory, 0775, true) && !is_dir($directory)) {
        throw new RuntimeException('Unable to create the data directory.');
    }

    if (!file_exists($path)) {
        $json = json_encode(learning_hub_empty_data(), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        if (file_put_contents($path, $json . PHP_EOL, LOCK_EX) === false) {
            throw new RuntimeException('Unable to initialize data storage.');
        }
    }

    return $path;
}

function learning_hub_read_data(): array
{
    $path = learning_hub_prepare_storage();
    $handle = fopen($path, 'rb');
    if ($handle === false) {
        throw new RuntimeException('Unable to open data storage.');
    }

    try {
        if (!flock($handle, LOCK_SH)) {
            throw new RuntimeException('Unable to lock data storage.');
        }
        $contents = stream_get_contents($handle);
        flock($handle, LOCK_UN);
    } finally {
        fclose($handle);
    }

    return learning_hub_normalize_data(json_decode($contents ?: '', true));
}

function learning_hub_update_data(callable $callback)
{
    $path = learning_hub_prepare_storage();
    $handle = fopen($path, 'c+');
    if ($handle === false) {
        throw new RuntimeException('Unable to open data storage.');
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            throw new RuntimeException('Unable to lock data storage.');
        }

        rewind($handle);
        $data = learning_hub_normalize_data(json_decode(stream_get_contents($handle) ?: '', true));
        $result = $callback($data);
        $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        if ($json === false) {
            throw new RuntimeException('Unable to encode data storage.');
        }

        rewind($handle);
        if (!ftruncate($handle, 0) || fwrite($handle, $json . PHP_EOL) === false) {
            throw new RuntimeException('Unable to write data storage.');
        }
        fflush($handle);
        flock($handle, LOCK_UN);

        return $result;
    } finally {
        fclose($handle);
    }
}

function learning_hub_json(array $payload, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    header('Cache-Control: no-store');
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

function learning_hub_request_body(): array
{
    $body = json_decode(file_get_contents('php://input') ?: '', true);
    if (!is_array($body)) {
        learning_hub_json(['message' => 'Request body must be valid JSON.'], 400);
    }
    return $body;
}

function learning_hub_require_method(string $method): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== $method) {
        header('Allow: ' . $method);
        learning_hub_json(['message' => 'Method not allowed.'], 405);
    }
}

function learning_hub_start_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    if (learning_hub_is_vercel()) {
        session_save_path(sys_get_temp_dir());
    }

    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

function learning_hub_current_user(): ?array
{
    learning_hub_start_session();
    if (empty($_SESSION['user_id'])) {
        return null;
    }

    return [
        'id' => (int) $_SESSION['user_id'],
        'username' => (string) ($_SESSION['username'] ?? ''),
        'email' => (string) ($_SESSION['email'] ?? ''),
    ];
}

function learning_hub_require_user(): array
{
    $user = learning_hub_current_user();
    if ($user === null) {
        learning_hub_json(['message' => 'Please log in to continue.'], 401);
    }
    return $user;
}

function learning_hub_find_course($identifier): ?array
{
    foreach (learning_hub_courses() as $course) {
        if ((is_numeric($identifier) && (int) $identifier === $course['id']) || (string) $identifier === $course['slug']) {
            return $course;
        }
    }
    return null;
}

function learning_hub_next_id(array $records): int
{
    $ids = array_map(static fn(array $record): int => (int) ($record['id'] ?? 0), $records);
    return ($ids ? max($ids) : 0) + 1;
}

set_exception_handler(static function (Throwable $error): void {
    error_log($error->__toString());
    learning_hub_json(['message' => 'The server could not complete the request.'], 500);
});
