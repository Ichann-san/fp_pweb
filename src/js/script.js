document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // Configuration Data
    // ============================================
    const navLinks = [
        { name: 'Home', href: '#home-section' },
        { name: 'Courses', href: '#course-section' },
        { name: 'Dashboard', href: '#' },
        { name: 'Forum', href: '#' },
    ];

    const courses = [
        {
            title: "HTML Front end",
            desc: "Create the frame for web programming using HTML as the base",
            img: "https://placehold.co/600x400/8b5cf6/ffffff?text=HTML",
            badgeClass: "badge-violet",
            link: "../html/course/html.html"
        },
        {
            title: "Javascript",
            desc: "Utilize the javascript functionality to load logical function into the design of the web",
            img: "https://placehold.co/600x400/facc15/000000?text=JavaScript",
            badgeClass: "badge-yellow",
            link: "../html/course/javascript.html"
        },
        {
            title: "CSS layout",
            desc: "Interactively customize the web design using CSS on your own",
            img: "https://placehold.co/600x400/22c55e/ffffff?text=CSS",
            badgeClass: "badge-green",
            link: "../html/course/css.html"
        },
        {
            title: "Competitive Programming",
            desc: "Master algorithms and data structures to excel in programming contests.",
            img: "https://placehold.co/600x400/636f1/ffffff?text=Algorithms",
            badgeClass: "badge-indigo",
            link: "../html/course/cp.html"
        },
        {
            title: "Intro to Quantum Computing",
            desc: "Explore the fascinating world of quantum mechanics and its computational power.",
            img: "https://placehold.co/600x400/ec4899/ffffff?text=Quantum",
            badgeClass: "badge-pink",
            link: "../html/course/quantum.html"
        },
        {
            title: "UI/UX Design Fundamentals",
            desc: "Create beautiful and intuitive user interfaces that users will love.",
            img: "https://placehold.co/600x400/f97316/ffffff?text=UI/UX",
            badgeClass: "badge-orange",
            link: "../html/course/uiux.html"
        },
        {
            title: "Data Science with Python",
            desc: "Analyze data, create visualizations, and build predictive models.",
            img: "https://placehold.co/600x400/0ea5e9/ffffff?text=Data",
            badgeClass: "badge-sky",
            link: "../html/course/datascience.html"
        }
    ];

    // ============================================
    // DOM Elements
    // ============================================
    const desktopNavContainer = document.getElementById('desktop-nav-links');
    const mobileNavContainer = document.getElementById('mobile-nav-links');
    const courseCarousel = document.getElementById('course-carousel');
    const themeToggleButton = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    // ============================================
    // Navigation Helpers
    // ============================================
    const isOnIndexPage = window.location.pathname.endsWith('index.html') || 
                          window.location.pathname.endsWith('/') ||
                          window.location.pathname.endsWith('/html/');

    function getNavHref(href) {
        if (href.startsWith('#') && !isOnIndexPage) {
            return 'index.html' + href;
        }
        return href;
    }

    // ============================================
    // Render Functions
    // ============================================
    function renderNavLinks() {
        if (!desktopNavContainer || !mobileNavContainer) return;

        desktopNavContainer.innerHTML = navLinks.map(link => 
            `<a href="${getNavHref(link.href)}" class="nav-link-custom">${link.name}</a>`
        ).join('');

        mobileNavContainer.innerHTML = navLinks.map(link => 
            `<a href="${getNavHref(link.href)}" class="mobile-nav-link">${link.name}</a>`
        ).join('') + `<a href="login.html" class="btn-primary-custom text-center mt-4">Login</a>`;
    }

    function renderCourseCards() {
        if (!courseCarousel) return;
        
        courseCarousel.innerHTML = courses.map(course => `
            <div class="card-custom">
                <img src="${course.img}" alt="${course.title} Course" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${course.title}</h3>
                    <p class="card-text mb-3">${course.desc}</p>
                    <a href="${course.link || '#'}" class="badge-link ${course.badgeClass}">View Course</a>
                </div>
            </div>
        `).join('');
    }

    // ============================================
    // Theme Management
    // ============================================
    function applyTheme() {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);

        document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
        
        if (darkIcon && lightIcon) {
            darkIcon.classList.toggle('d-none', !isDarkMode);
            lightIcon.classList.toggle('d-none', isDarkMode);
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme();
    }

    // ============================================
    // Mobile Menu
    // ============================================
    function openMobileMenu() {
        mobileMenu?.classList.add('show');
        mobileMenuOverlay?.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu?.classList.remove('show');
        mobileMenuOverlay?.classList.remove('show');
        document.body.style.overflow = '';
    }

    // ============================================
    // Event Listeners
    // ============================================
    themeToggleButton?.addEventListener('click', toggleTheme);
    hamburgerBtn?.addEventListener('click', openMobileMenu);
    closeMenuBtn?.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay?.addEventListener('click', closeMobileMenu);

    // ============================================
    // Initialize
    // ============================================
    applyTheme();
    renderNavLinks();
    renderCourseCards();
});

