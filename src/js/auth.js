/** Authentication and session state for Learning Hub. */
const AuthModule = (() => {
    const API_BASE = '/api/auth';
    let currentUser = null;
    let initialization = null;

    async function request(path, options = {}) {
        const response = await fetch(`${API_BASE}/${path}`, {
            credentials: 'same-origin',
            ...options,
            headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }
        });
        const data = await response.json().catch(() => ({ message: 'The server returned an invalid response.' }));
        if (!response.ok) throw new Error(data.message || 'The request failed.');
        return data;
    }

    async function checkSession() {
        try {
            const data = await request('check_session.php', { method: 'GET', headers: {} });
            currentUser = data.is_logged_in ? data.user : null;
        } catch (error) {
            currentUser = null;
        }
        updateUI();
        return currentUser;
    }

    function init() {
        if (!initialization) initialization = checkSession();
        return initialization;
    }

    async function register(username, email, password) {
        return request('register.php', {
            method: 'POST',
            body: JSON.stringify({ username, email, password })
        });
    }

    async function login(email, password) {
        const data = await request('login.php', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        currentUser = data.user;
        updateUI();
        return data;
    }

    async function logout() {
        const data = await request('logout.php', { method: 'POST', body: '{}' });
        currentUser = null;
        updateUI();
        return data;
    }

    function updateUI() {
        if (window.LearningHubUI) window.LearningHubUI.renderNavigation(currentUser);
        document.dispatchEvent(new CustomEvent('learninghub:auth-change', { detail: { user: currentUser } }));
    }

    return {
        init,
        register,
        login,
        logout,
        checkSession,
        getCurrentUser: () => currentUser,
        isLoggedIn: () => currentUser !== null
    };
})();

window.AuthModule = AuthModule;

document.addEventListener('DOMContentLoaded', () => {
    AuthModule.init();

    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const message = document.getElementById('auth-message');
    if (!loginTab || !registerTab || !loginForm || !registerForm || !message) return;

    function showMessage(text, type) {
        message.textContent = text;
        message.className = `auth-message mt-4 ${type}`;
        message.setAttribute('role', type === 'error' ? 'alert' : 'status');
    }

    function clearMessage() {
        message.textContent = '';
        message.className = 'auth-message d-none mt-4';
    }

    function selectTab(tab) {
        const showLogin = tab === 'login';
        loginTab.classList.toggle('active', showLogin);
        registerTab.classList.toggle('active', !showLogin);
        loginTab.setAttribute('aria-selected', String(showLogin));
        registerTab.setAttribute('aria-selected', String(!showLogin));
        loginForm.classList.toggle('d-none', !showLogin);
        registerForm.classList.toggle('d-none', showLogin);
        clearMessage();
    }

    function setSubmitting(form, submitting) {
        const button = form.querySelector('button[type="submit"]');
        button.disabled = submitting;
        button.textContent = submitting ? 'Please wait...' : button.dataset.label;
    }

    loginTab.addEventListener('click', () => selectTab('login'));
    registerTab.addEventListener('click', () => selectTab('register'));

    loginForm.addEventListener('submit', async event => {
        event.preventDefault();
        setSubmitting(loginForm, true);
        try {
            const result = await AuthModule.login(
                document.getElementById('login-email').value.trim(),
                document.getElementById('login-password').value
            );
            showMessage(result.message, 'success');
            const returnPath = new URLSearchParams(window.location.search).get('return');
            const safeReturn = returnPath && returnPath.startsWith('/') && !returnPath.startsWith('//')
                ? returnPath
                : '/src/html/index.html';
            window.setTimeout(() => window.location.assign(safeReturn), 500);
        } catch (error) {
            showMessage(error.message, 'error');
        } finally {
            setSubmitting(loginForm, false);
        }
    });

    registerForm.addEventListener('submit', async event => {
        event.preventDefault();
        const password = document.getElementById('register-password').value;
        if (password !== document.getElementById('register-confirm-password').value) {
            showMessage('Passwords do not match.', 'error');
            return;
        }

        setSubmitting(registerForm, true);
        try {
            const result = await AuthModule.register(
                document.getElementById('register-username').value.trim(),
                document.getElementById('register-email').value.trim(),
                password
            );
            registerForm.reset();
            selectTab('login');
            showMessage(result.message, 'success');
        } catch (error) {
            showMessage(error.message, 'error');
        } finally {
            setSubmitting(registerForm, false);
        }
    });
});
