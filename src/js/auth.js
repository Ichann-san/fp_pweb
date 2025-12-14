const AuthModule = (function() {
    // Store for authentication data (can be sent to backend later)
    let authData = {
        users: [], // Registered users stored locally (for demo purposes)
        currentUser: null
    };

    // Load any existing data from localStorage
    function init() {
        const storedUsers = localStorage.getItem('ichanhub_users');
        if (storedUsers) {
            authData.users = JSON.parse(storedUsers);
        }
        
        const currentUser = localStorage.getItem('ichanhub_current_user');
        if (currentUser) {
            authData.currentUser = JSON.parse(currentUser);
        }
    }

    // Save users to localStorage (simulating database)
    function saveUsers() {
        localStorage.setItem('ichanhub_users', JSON.stringify(authData.users));
    }

    // Register a new user
    function register(email, password) {
        return new Promise((resolve, reject) => {
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                reject({ success: false, message: 'Invalid email format' });
                return;
            }

            // Check password length
            if (password.length < 6) {
                reject({ success: false, message: 'Password must be at least 6 characters' });
                return;
            }

            // Check if user already exists
            const existingUser = authData.users.find(user => user.email === email);
            if (existingUser) {
                reject({ success: false, message: 'Email already registered' });
                return;
            }

            // Create new user object (ready to be sent to backend)
            const newUser = {
                id: Date.now(),
                email: email,
                password: password, // In production, this should be hashed
                createdAt: new Date().toISOString()
            };

            // Store user
            authData.users.push(newUser);
            saveUsers();

            resolve({ 
                success: true, 
                message: 'Registration successful!',
                user: { id: newUser.id, email: newUser.email }
            });
        });
    }

    // Login user
    function login(email, password) {
        return new Promise((resolve, reject) => {
            // Find user
            const user = authData.users.find(u => u.email === email && u.password === password);
            
            if (!user) {
                reject({ success: false, message: 'Invalid email or password' });
                return;
            }

            // Set current user
            authData.currentUser = { id: user.id, email: user.email };
            localStorage.setItem('ichanhub_current_user', JSON.stringify(authData.currentUser));

            resolve({ 
                success: true, 
                message: 'Login successful!',
                user: authData.currentUser
            });
        });
    }

    // Logout user
    function logout() {
        authData.currentUser = null;
        localStorage.removeItem('ichanhub_current_user');
        return { success: true, message: 'Logged out successfully' };
    }

    // Get current user
    function getCurrentUser() {
        return authData.currentUser;
    }

    // Check if user is logged in
    function isLoggedIn() {
        return authData.currentUser !== null;
    }

    // Get auth data for backend submission
    function getAuthDataForBackend(action, email, password) {
        return {
            action: action, // 'login' or 'register'
            email: email,
            password: password,
            timestamp: new Date().toISOString()
        };
    }

    // Initialize on load
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

// DOM Event Handlers for Login Page
document.addEventListener('DOMContentLoaded', () => {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authMessage = document.getElementById('auth-message');

    // Only run if we're on the login page
    if (!loginTab || !registerTab) return;

    // Tab switching functionality
    function showLoginForm() {
        loginTab.classList.add('text-indigo-600', 'dark:text-indigo-400', 'border-b-2', 'border-indigo-600', 'dark:border-indigo-400');
        loginTab.classList.remove('text-gray-500', 'dark:text-gray-400');
        
        registerTab.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'border-b-2', 'border-indigo-600', 'dark:border-indigo-400');
        registerTab.classList.add('text-gray-500', 'dark:text-gray-400');
        
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        hideMessage();
    }

    function showRegisterForm() {
        registerTab.classList.add('text-indigo-600', 'dark:text-indigo-400', 'border-b-2', 'border-indigo-600', 'dark:border-indigo-400');
        registerTab.classList.remove('text-gray-500', 'dark:text-gray-400');
        
        loginTab.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'border-b-2', 'border-indigo-600', 'dark:border-indigo-400');
        loginTab.classList.add('text-gray-500', 'dark:text-gray-400');
        
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        hideMessage();
    }

    function showMessage(message, isSuccess) {
        authMessage.textContent = message;
        authMessage.classList.remove('hidden', 'text-green-600', 'text-red-600', 'dark:text-green-400', 'dark:text-red-400');
        if (isSuccess) {
            authMessage.classList.add('text-green-600', 'dark:text-green-400');
        } else {
            authMessage.classList.add('text-red-600', 'dark:text-red-400');
        }
    }

    function hideMessage() {
        authMessage.classList.add('hidden');
    }

    // Tab click handlers
    loginTab.addEventListener('click', showLoginForm);
    registerTab.addEventListener('click', showRegisterForm);

    // Login form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Get data ready for backend (can be used with fetch API)
        const backendData = AuthModule.getAuthDataForBackend('login', email, password);
        console.log('Login data ready for backend:', backendData);

        try {
            const result = await AuthModule.login(email, password);
            showMessage(result.message, true);
            
            // Redirect to home page after successful login
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } catch (error) {
            showMessage(error.message, false);
        }
    });

    // Register form submission
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        // Check if passwords match
        if (password !== confirmPassword) {
            showMessage('Passwords do not match', false);
            return;
        }

        // Get data ready for backend (can be used with fetch API)
        const backendData = AuthModule.getAuthDataForBackend('register', email, password);
        console.log('Register data ready for backend:', backendData);

        try {
            const result = await AuthModule.register(email, password);
            showMessage(result.message + ' Please login.', true);
            
            // Switch to login form after successful registration
            setTimeout(showLoginForm, 1500);
        } catch (error) {
            showMessage(error.message, false);
        }
    });
});
