/** Shared navigation, theme, mobile menu, and homepage catalog. */
const LearningHubUI = (() => {
    const fallbackCourses = [
        { id: 1, slug: 'html', title: 'HTML Front End', description: 'Build accessible page structure with semantic HTML.', image_url: '/assets/icon.svg', badge_class: 'badge-violet' },
        { id: 2, slug: 'javascript', title: 'JavaScript', description: 'Add logic and interaction to modern web pages.', image_url: '/assets/icon.svg', badge_class: 'badge-yellow' },
        { id: 3, slug: 'css', title: 'CSS Layout', description: 'Create responsive layouts and polished visual systems.', image_url: '/assets/icon.svg', badge_class: 'badge-green' },
        { id: 4, slug: 'cp', title: 'Competitive Programming', description: 'Practice algorithms and structured problem solving.', image_url: '/assets/icon.svg', badge_class: 'badge-indigo' },
        { id: 5, slug: 'quantum', title: 'Quantum Computing', description: 'Explore qubits, superposition, and quantum algorithms.', image_url: '/assets/icon.svg', badge_class: 'badge-pink' },
        { id: 6, slug: 'uiux', title: 'UI/UX Design', description: 'Design clear, useful, and accessible interfaces.', image_url: '/assets/icon.svg', badge_class: 'badge-orange' },
        { id: 7, slug: 'datascience', title: 'Data Science with Python', description: 'Learn a practical workflow for analyzing data.', image_url: '/assets/icon.svg', badge_class: 'badge-sky' }
    ];
    const legacyCourseImages = {
        html: 'https://placehold.co/600x400/8b5cf6/ffffff?text=HTML',
        javascript: 'https://placehold.co/600x400/facc15/000000?text=JavaScript',
        css: 'https://placehold.co/600x400/22c55e/ffffff?text=CSS',
        cp: 'https://placehold.co/600x400/6366f1/ffffff?text=Algorithms',
        quantum: 'https://placehold.co/600x400/ec4899/ffffff?text=Quantum',
        uiux: 'https://placehold.co/600x400/f97316/ffffff?text=UI%2FUX',
        datascience: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Data'
    };
    let renderedUser = null;
    let catalogNoticeShown = false;

    const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);

    function renderNavigation(user = renderedUser) {
        renderedUser = user;
        const home = '/src/html/index.html';
        const courses = `${home}#course-section`;
        const login = `/src/html/login.html?return=${encodeURIComponent(window.location.pathname)}`;
        const links = [{ label: 'Home', href: home }, { label: 'Courses', href: courses }];
        const desktop = document.getElementById('desktop-nav-links');
        const mobile = document.getElementById('mobile-nav-links');
        const action = document.getElementById('auth-action-container');

        if (desktop) desktop.innerHTML = links.map(link => `<a href="${link.href}" class="nav-link-custom">${link.label}</a>`).join('');
        if (mobile) {
            mobile.innerHTML = links.map(link => `<a href="${link.href}" class="mobile-nav-link">${link.label}</a>`).join('');
            mobile.insertAdjacentHTML('beforeend', user
                ? `<div class="border-top pt-3 mt-3"><div class="px-3 mb-2 fw-bold">${escapeHTML(user.username || user.email)}</div><button type="button" class="btn btn-outline-danger w-100" data-logout>Logout</button></div>`
                : `<a href="${login}" class="btn-primary-custom text-center mt-3">Login</a>`);
        }
        if (action) {
            action.classList.remove('d-none');
            action.innerHTML = user
                ? `<div class="dropdown"><button class="btn btn-link nav-link-custom dropdown-toggle text-decoration-none border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">${escapeHTML(user.username || user.email)}</button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="${courses}">My Courses</a></li><li><hr class="dropdown-divider"></li><li><button class="dropdown-item text-danger" type="button" data-logout>Logout</button></li></ul></div>`
                : `<a href="${login}" class="btn-primary-custom">Login</a>`;
        }

        document.querySelectorAll('[data-logout]').forEach(button => button.addEventListener('click', async () => {
            button.disabled = true;
            await AuthModule.logout();
            window.location.assign('/src/html/login.html');
        }));
    }

    function applyTheme() {
        const stored = localStorage.getItem('theme');
        const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
        document.getElementById('theme-toggle-dark-icon')?.classList.toggle('d-none', !dark);
        document.getElementById('theme-toggle-light-icon')?.classList.toggle('d-none', dark);
    }

    function toggleTheme() {
        localStorage.setItem('theme', document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark');
        applyTheme();
    }

    function closeMobileMenu() {
        document.getElementById('mobile-menu')?.classList.remove('show');
        document.getElementById('mobile-menu-overlay')?.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openMobileMenu() {
        document.getElementById('mobile-menu')?.classList.add('show');
        document.getElementById('mobile-menu-overlay')?.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    async function fetchJSON(path, options) {
        const response = await fetch(path, { credentials: 'same-origin', ...options });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || 'Request failed.');
        return data;
    }

    async function loadCourses() {
        const container = document.getElementById('course-carousel');
        if (!container) return;
        container.setAttribute('aria-busy', 'true');
        container.innerHTML = '<p class="catalog-status">Loading courses...</p>';

        let courses = fallbackCourses;
        try {
            const data = await fetchJSON('/api/courses/read.php');
            courses = data.records || fallbackCourses;
        } catch (error) {
            if (!catalogNoticeShown) {
                container.insertAdjacentHTML('beforebegin', '<p class="catalog-notice" role="status">Using the built-in course catalog because the API is unavailable.</p>');
                catalogNoticeShown = true;
            }
        }

        let enrolledIds = new Set();
        if (window.AuthModule?.isLoggedIn()) {
            try {
                const data = await fetchJSON('/api/enroll/my_courses.php');
                enrolledIds = new Set((data.records || []).map(course => Number(course.id)));
            } catch (error) {
                enrolledIds = new Set();
            }
        }

        container.innerHTML = courses.map(course => {
            const enrolled = enrolledIds.has(Number(course.id));
            const courseHref = `/src/html/course/${encodeURIComponent(course.slug)}.html`;
            const image = legacyCourseImages[course.slug] || course.image_url;
            return `<article class="card-custom">
                <img src="${escapeHTML(image)}" alt="${escapeHTML(course.title)} Course" class="card-img-top" width="600" height="400" loading="lazy">
                <div class="card-body">
                    <h3 class="card-title">${escapeHTML(course.title)}</h3>
                    <p class="card-text mb-3">${escapeHTML(course.description)}</p>
                    ${enrolled
                        ? `<a href="${courseHref}" class="badge-link ${escapeHTML(course.badge_class)}">Continue Learning</a>`
                        : `<button type="button" class="badge-link ${escapeHTML(course.badge_class)} border-0" data-enroll="${Number(course.id)}" data-course-href="${courseHref}">Enroll Now</button>`}
                </div>
            </article>`;
        }).join('');
        container.removeAttribute('aria-busy');
        container.querySelectorAll('[data-enroll]').forEach(button => button.addEventListener('click', () => enroll(button)));
    }

    async function enroll(button) {
        if (!window.AuthModule?.isLoggedIn()) {
            window.location.assign(`/src/html/login.html?return=${encodeURIComponent(button.dataset.courseHref)}`);
            return;
        }
        button.disabled = true;
        button.textContent = 'Saving...';
        try {
            await fetchJSON('/api/enroll/create.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ course_id: Number(button.dataset.enroll) })
            });
            window.location.assign(button.dataset.courseHref);
        } catch (error) {
            button.disabled = false;
            button.textContent = 'Try again';
            button.insertAdjacentHTML('afterend', `<p class="card-error" role="alert">${escapeHTML(error.message)}</p>`);
        }
    }

    function init() {
        applyTheme();
        renderNavigation(window.AuthModule?.getCurrentUser() || null);
        document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
        document.getElementById('hamburger-btn')?.addEventListener('click', openMobileMenu);
        document.getElementById('close-menu-btn')?.addEventListener('click', closeMobileMenu);
        document.getElementById('mobile-menu-overlay')?.addEventListener('click', closeMobileMenu);
        document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMobileMenu(); });
        loadCourses();
    }

    return { init, renderNavigation, loadCourses };
})();

window.LearningHubUI = LearningHubUI;

document.addEventListener('DOMContentLoaded', LearningHubUI.init);
document.addEventListener('learninghub:auth-change', () => LearningHubUI.loadCourses());
