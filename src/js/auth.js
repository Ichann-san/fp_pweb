/**
 * Authentication Module
 * Handles user registration, login, and session management
 */
const AuthModule = (function() {
    // ============================================
    // State
    // ============================================
    // Determine API base path based on current location
    const API_BASE = window.location.pathname.includes('/course/') ? '../../../api' : '../../api';

    let authData = {
        users: [],
        currentUser: null
    };

    // ============================================
    // Initialization
    // ============================================
    async function init() {
        await checkSession();
        updateUI();
    }

    // ============================================
    // Validation
    // ============================================
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    // ============================================
    // Auth Operations
    // ============================================
    async function register(email, password) {
        if (!validateEmail(email)) {
            throw new Error('Invalid email format');
        }

        if (!validatePassword(password)) {
            throw new Error('Password must be at least 6 characters');
        }

        try {
            const response = await fetch(`${API_BASE}/auth/register.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            return data;
        } catch (error) {
            throw error;
        }
    }

    async function login(email, password) {
        try {
            const response = await fetch(`${API_BASE}/auth/login.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            authData.currentUser = data.user;
            return data;
        } catch (error) {
            throw error;
        }
    }

    async function logout() {
        try {
            const response = await fetch(`${API_BASE}/auth/logout.php`, { method: 'POST' });
            const data = await response.json();
            authData.currentUser = null;
            updateUI(); // Update UI after logout
            return data;
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    async function checkSession() {
        try {
            const response = await fetch(`${API_BASE}/auth/check_session.php`);
            const data = await response.json();
            
            if (data.is_logged_in) {
                authData.currentUser = data.user;
            } else {
                authData.currentUser = null;
            }
            return authData.currentUser;
        } catch (e) {
            console.error('Session check failed', e);
            authData.currentUser = null;
            return null;
        }
    }
    
    function updateUI() {
        // Update nav links based on auth state
        const desktopNav = document.getElementById('desktop-nav-links');
        const mobileNav = document.getElementById('mobile-nav-links');
        
        // Auth action container in header (replaces login button)
        const authActionContainer = document.getElementById('auth-action-container');
        const loginBtn = document.getElementById('login-btn-header');
        
        // Determine path to login.html relative to current page
        // If we are in /course/ (deep), we need ../login.html
        // If we are in root /html/, we need login.html
        const isInCourseDir = window.location.pathname.includes('/course/');
        const loginPath = isInCourseDir ? '../login.html' : 'login.html';
        const homePath = isInCourseDir ? '../index.html' : 'index.html';
        const coursePath = isInCourseDir ? '../index.html#course-section' : 'index.html#course-section';

        // Common links
        const links = [
            { text: 'Home', href: homePath },
            { text: 'Courses', href: coursePath }
        ];
        
        // "My Dashboard" link removed from main navigation as requested
        // Users can access their courses through the username dropdown

        const linksHtml = links.map(link =>
            `<a href="${link.href}" class="nav-link-custom">${link.text}</a>`
        ).join('');

        if (desktopNav) {
            desktopNav.innerHTML = linksHtml;
            // We no longer inject the user dropdown HERE. We inject it into authActionContainer instead.
        }
        
        // Update Header Login/User Section
        if (authActionContainer) {
            if (authData.currentUser) {
                // User is logged in: Show Username Dropdown
                authActionContainer.innerHTML = `
                    <div class="dropdown">
                        <button class="btn btn-link nav-link-custom dropdown-toggle text-decoration-none border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${authData.currentUser.username || authData.currentUser.email}
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                             <li><a class="dropdown-item" href="${coursePath}">My Courses</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><button class="dropdown-item text-danger" onclick="AuthModule.logout().then(() => window.location.href = '${loginPath}')">Logout</button></li>
                        </ul>
                    </div>
                `;
                authActionContainer.classList.remove('d-none');
            } else {
                // User is logged out: Show Login Button
                authActionContainer.innerHTML = `
                    <a href="${loginPath}" id="login-btn-header" class="btn-primary-custom">Login</a>
                `;
                 authActionContainer.classList.remove('d-none');
            }
        }

        if (mobileNav) {
            mobileNav.innerHTML = linksHtml;
            if (authData.currentUser) {
                mobileNav.innerHTML += `
                    <div class="border-top pt-3 mt-3">
                        <div class="px-3 mb-2 fw-bold">${authData.currentUser.username || authData.currentUser.email}</div>
                        <button class="btn btn-outline-danger w-100" onclick="AuthModule.logout().then(() => window.location.href = '${loginPath}')">Logout</button>
                    </div>
                `;
            } else {
                mobileNav.innerHTML += `
                    <a href="${loginPath}" class="btn-primary-custom text-center mt-3">Login</a>
                `;
            }
        }
    }

    // ============================================
    // Getters
    // ============================================
    const getCurrentUser = () => authData.currentUser;
    const isLoggedIn = () => authData.currentUser !== null;
    const getAuthDataForBackend = (action, email, password) => ({
        action,
        email,
        password,
        timestamp: new Date().toISOString()
    });

    // Initialize
    // init(); // Call manually or on DOMContentLoaded to ensure elements exist

    // Public API
    return {
        init,
        register,
        login,
        logout,
        checkSession,
        getCurrentUser,
        isLoggedIn
    };
})();

// ============================================
// Login Page DOM Handlers
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Auth
    AuthModule.init();

    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authMessage = document.getElementById('auth-message');

    // Only run if we're on the login page
    if (!loginTab || !registerTab) return;

    // ============================================
    // UI Functions
    // ============================================
    function showLoginForm() {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('d-none');
        registerForm.classList.add('d-none');
        hideMessage();
    }

    function showRegisterForm() {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.remove('d-none');
        loginForm.classList.add('d-none');
        hideMessage();
    }

    function showMessage(message, isSuccess) {
        authMessage.textContent = message;
        authMessage.classList.remove('d-none', 'success', 'error');
        authMessage.classList.add(isSuccess ? 'success' : 'error');
    }

    function hideMessage() {
        authMessage.classList.add('d-none');
    }

    // ============================================
    // Event Listeners
    // ============================================
    loginTab.addEventListener('click', showLoginForm);
    registerTab.addEventListener('click', showRegisterForm);

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            const result = await AuthModule.login(email, password);
            showMessage(result.message, true);
            setTimeout(() => window.location.href = 'index.html', 1500);
        } catch (error) {
            showMessage(error.message, false);
        }
    });

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            return showMessage('Passwords do not match', false);
        }

        try {
            const result = await AuthModule.register(email, password);
            showMessage(result.message + ' Please login.', true);
            setTimeout(showLoginForm, 1500);
        } catch (error) {
            showMessage(error.message, false);
        }
    });
});
