/**
 * Authentication Module
 * Handles user registration, login, and session management
 */
const AuthModule = (function() {
    // ============================================
    // State
    // ============================================
    let authData = {
        users: [],
        currentUser: null
    };

    // ============================================
    // Storage Management
    // ============================================
    function init() {
        const storedUsers = localStorage.getItem('learning_hub_users');
        if (storedUsers) authData.users = JSON.parse(storedUsers);
        
        const currentUser = localStorage.getItem('learning_hub_current_user');
        if (currentUser) authData.currentUser = JSON.parse(currentUser);
    }

    function saveUsers() {
        localStorage.setItem('learning_hub_users', JSON.stringify(authData.users));
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
    function register(email, password) {
        return new Promise((resolve, reject) => {
            if (!validateEmail(email)) {
                return reject({ success: false, message: 'Invalid email format' });
            }

            if (!validatePassword(password)) {
                return reject({ success: false, message: 'Password must be at least 6 characters' });
            }

            if (authData.users.find(user => user.email === email)) {
                return reject({ success: false, message: 'Email already registered' });
            }

            const newUser = {
                id: Date.now(),
                email,
                password, // In production, hash this!
                createdAt: new Date().toISOString()
            };

            authData.users.push(newUser);
            saveUsers();

            resolve({ 
                success: true, 
                message: 'Registration successful!',
                user: { id: newUser.id, email: newUser.email }
            });
        });
    }

    function login(email, password) {
        return new Promise((resolve, reject) => {
            const user = authData.users.find(u => u.email === email && u.password === password);
            
            if (!user) {
                return reject({ success: false, message: 'Invalid email or password' });
            }

            authData.currentUser = { id: user.id, email: user.email };
            localStorage.setItem('learning_hub_current_user', JSON.stringify(authData.currentUser));

            resolve({ 
                success: true, 
                message: 'Login successful!',
                user: authData.currentUser
            });
        });
    }

    function logout() {
        authData.currentUser = null;
        localStorage.removeItem('learning_hub_current_user');
        return { success: true, message: 'Logged out successfully' };
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
    init();

    // Public API
    return {
        register,
        login,
        logout,
        getCurrentUser,
        isLoggedIn,
        getAuthDataForBackend
    };
})();

// ============================================
// Login Page DOM Handlers
// ============================================
document.addEventListener('DOMContentLoaded', () => {
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

        console.log('Login data ready for backend:', AuthModule.getAuthDataForBackend('login', email, password));

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

        console.log('Register data ready for backend:', AuthModule.getAuthDataForBackend('register', email, password));

        try {
            const result = await AuthModule.register(email, password);
            showMessage(result.message + ' Please login.', true);
            setTimeout(showLoginForm, 1500);
        } catch (error) {
            showMessage(error.message, false);
        }
    });
});
