import assert from 'node:assert/strict';

const baseUrl = process.argv[2] || process.env.LEARNING_HUB_TEST_URL || 'http://127.0.0.1:8765';
let cookie = '';

async function call(method, path, body) {
    const response = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            ...(body ? { 'Content-Type': 'application/json' } : {}),
            ...(cookie ? { Cookie: cookie } : {})
        },
        body: body ? JSON.stringify(body) : undefined
    });
    const setCookie = response.headers.get('set-cookie');
    if (setCookie) cookie = setCookie.split(';', 1)[0];
    const data = await response.json();
    return { status: response.status, data };
}

const account = {
    username: 'API Test Student',
    email: `api-test-${Date.now()}@example.com`,
    password: 'learnsafe123'
};

assert.equal((await call('GET', '/api/index.php')).status, 200);
assert.equal((await call('POST', '/api/auth/register.php', account)).status, 201);
assert.equal((await call('POST', '/api/auth/register.php', account)).status, 409);
assert.equal((await call('POST', '/api/auth/login.php', { email: account.email, password: 'wrong-password' })).status, 401);
assert.equal((await call('POST', '/api/auth/login.php', { email: account.email, password: account.password })).status, 200);

const activeSession = await call('GET', '/api/auth/check_session.php');
assert.equal(activeSession.status, 200);
assert.equal(activeSession.data.is_logged_in, true);
assert.equal(activeSession.data.user.email, account.email);

assert.equal((await call('POST', '/api/enroll/create.php', { course_id: 1 })).status, 201);
const courses = await call('GET', '/api/enroll/my_courses.php');
assert.equal(courses.status, 200);
assert.equal(courses.data.records.length, 1);

assert.equal((await call('POST', '/api/progress/update.php', { course_slug: 'html', chapter_id: 'intro', completed: true })).status, 200);
let progress = await call('GET', '/api/progress/read.php?course_slug=html');
assert.deepEqual(progress.data.completed, ['intro']);

assert.equal((await call('POST', '/api/progress/update.php', { course_slug: 'html', chapter_id: 'intro', completed: false })).status, 200);
progress = await call('GET', '/api/progress/read.php?course_slug=html');
assert.deepEqual(progress.data.completed, []);

assert.equal((await call('POST', '/api/auth/logout.php', {})).status, 200);
const closedSession = await call('GET', '/api/auth/check_session.php');
assert.equal(closedSession.data.is_logged_in, false);

console.log('API smoke test passed: auth, login recording, session, enrollment, and progress.');
