/**
 * Course Module
 * Handles course content loading, progress tracking, and chapter navigation
 */

const CourseModule = (function() {
    // ============================================
    // State
    // ============================================
    // Determine API base path based on current location
    const API_BASE = window.location.pathname.includes('/course/') ? '../../../api' : '../../api';

    let courseId = ''; // This will store the numeric ID
    let courseSlug = ''; // This will store the slug string
    let chapters = [];
    let progress = {};
    let currentChapter = null;
    let enrolledCourses = [];

    // ============================================
    // Initialization
    // ============================================
    async function init(slug, chapterList) {
        console.log('[Debug] CourseModule.init called', { slug, chaptersCount: chapterList?.length });
        courseSlug = slug;
        chapters = chapterList;
        
        // Render chapters immediately so sidebar isn't empty while waiting for API
        renderChaptersList();
        
        // Load first chapter immediately (will update with progress later)
        if (chapters.length > 0) {
            loadChapter(chapters[0]?.id);
        }

        // Fetch course numeric ID from slug
        try {
            const response = await fetch(`${API_BASE}/courses/read.php`);
            
            if (response.ok) {
                const data = await response.json();
                const course = data.records?.find(c => c.slug === slug);
                if (course) {
                    courseId = course.id;
                    console.log('[Debug] courseId resolved:', courseId);
                } else {
                    console.error('Course not found for slug:', slug);
                }
            }
        } catch (error) {
            console.error('Failed to resolve course ID:', error);
        }
        
        await loadProgress(); // Load from backend
        
        // Re-render to show progress ticks
        renderChaptersList();
        updateProgressBar();

        // If we have progress, potentially jump to first incomplete?
        // Or maybe just let the user stay on the first one loaded.
        // The original code tried to load first incomplete.
        const firstIncomplete = chapters.find(ch => !progress[ch.id]);
        if (firstIncomplete && firstIncomplete.id !== chapters[0].id) {
             // Only switch if different from what we already loaded, or maybe just leave it to user
             // But original requirement was to load first incomplete.
             loadChapter(firstIncomplete.id);
        }
    }

    // ============================================
    // Progress & Enrollment Management
    // ============================================
    async function loadProgress() {
        console.log('[Debug] loadProgress called');
        
        if (typeof AuthModule === 'undefined') {
            console.error('[Debug] AuthModule is undefined! Is auth.js included?');
            return;
        }

        // Only load progress if user is logged in
        const loggedIn = AuthModule.isLoggedIn();
        console.log('[Debug] isLoggedIn:', loggedIn);
        
        if (!loggedIn) {
             progress = {};
             return;
        }

        try {
            // Fetch enrolled courses to check status and progress
            const response = await fetch(`${API_BASE}/enroll/my_courses.php`);
            if (response.ok) {
                const data = await response.json();
                enrolledCourses = data.records || [];
                
                // For now, we don't have a specific endpoint for chapter-level progress in the provided API
                // So we might need to rely on local storage or implement a fetch if update.php returns state
                // However, the task requires calling update.php.
                // Let's assume for this task we just sync local 'progress' state with successful calls to update.php
                // But ideally, we should fetch progress from DB.
                // Given the API visible: `api/progress/update.php`
                
                // Let's check if we can get chapter progress.
                // Since there isn't a clear 'get_progress' API, we'll maintain local state for UI but send updates to backend.
                
                // Fallback to local storage for immediate UI, but ideally backend should provide this.
                 const stored = localStorage.getItem(`learninghub_progress_${courseId}`);
                 console.log('[Debug] Loaded progress from local storage:', stored);
                 progress = stored ? JSON.parse(stored) : {};
            }
        } catch (error) {
            console.error('Failed to load progress', error);
        }
    }

    async function enroll(courseIdToEnroll) {
        if (!AuthModule.isLoggedIn()) {
            window.location.href = 'login.html';
            return;
        }

        try {
            const response = await fetch(`${API_BASE}/enroll/create.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ course_id: courseIdToEnroll })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Enrolled successfully!');
                window.location.reload();
            } else {
                alert(data.message || 'Enrollment failed');
            }
        } catch (error) {
            console.error('Enrollment error:', error);
            alert('An error occurred during enrollment');
        }
    }

    async function markComplete(chapterId) {
        if (!AuthModule.isLoggedIn()) return;
        console.log('[Debug] markComplete called for', chapterId);

        try {
            const response = await fetch(`${API_BASE}/progress/update.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    course_id: courseId,
                    chapter_id: chapterId,
                    status: 'completed'
                })
            });

            console.log('[Debug] markComplete response status:', response.status);
            if (response.ok || response.status === 200) {
                progress[chapterId] = true;
                localStorage.setItem(`learninghub_progress_${courseId}`, JSON.stringify(progress));
                renderChaptersList();
                updateProgressBar();
            }
        } catch (error) {
            console.error('Failed to update progress', error);
        }
    }

    async function markIncomplete(chapterId) {
        // Since the backend doesn't support un-completing, we will just update local state
        // In a real app, we would need a DELETE endpoint
        delete progress[chapterId];
        localStorage.setItem(`learninghub_progress_${courseId}`, JSON.stringify(progress));
        renderChaptersList();
        updateProgressBar();
    }

    function toggleComplete(chapterId) {
        progress[chapterId] ? markIncomplete(chapterId) : markComplete(chapterId);
    }

    function isComplete(chapterId) {
        return !!progress[chapterId];
    }

    // ============================================
    // UI Updates
    // ============================================
    function updateProgressBar() {
        const completed = Object.keys(progress).filter(key => progress[key]).length;
        const percentage = chapters.length > 0 ? Math.round((completed / chapters.length) * 100) : 0;
        console.log('[Debug] updateProgressBar', { completed, total: chapters.length, percentage, progressObj: progress });

        const progressPercentage = document.getElementById('progress-percentage');
        const progressBarFill = document.getElementById('progress-bar-fill');

        if (progressPercentage) progressPercentage.textContent = `${percentage}%`;
        if (progressBarFill) progressBarFill.style.width = `${percentage}%`;
    }

    function renderChaptersList() {
        const container = document.getElementById('chapters-list');
        if (!container) return;

        container.innerHTML = chapters.map((chapter) => {
            const isCompleted = isComplete(chapter.id);
            const isActive = currentChapter === chapter.id;

            return `
                <div class="chapter-item ${isCompleted ? 'completed' : ''}" data-chapter-id="${chapter.id}">
                    <div class="chapter-checkbox-container">
                        <input 
                            type="checkbox" 
                            class="chapter-checkbox" 
                            id="checkbox-${chapter.id}"
                            ${isCompleted ? 'checked' : ''}
                            onchange="CourseModule.toggleComplete('${chapter.id}')"
                        >
                    </div>
                    <div 
                        class="chapter-title ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
                        onclick="CourseModule.loadChapter('${chapter.id}')"
                    >
                        ${chapter.title}
                    </div>
                </div>
            `;
        }).join('');
    }

    // ============================================
    // Content Loading
    // ============================================
    async function loadChapter(chapterId) {
        if (!chapterId) return;
        
        const chapter = chapters.find(ch => ch.id === chapterId);
        if (!chapter) return;

        currentChapter = chapterId;
        renderChaptersList();

        const contentArea = document.getElementById('content-area');
        if (!contentArea) return;

        // Show loading state
        contentArea.innerHTML = `
            <div class="d-flex justify-content-center align-items-center py-5">
                <div class="loading-spinner"></div>
            </div>
        `;

        try {
            // Use courseSlug for file path since content is organized by slug folders
            const response = await fetch(`../../content/${courseSlug}/${chapter.contentFile}`);
            
            if (response.ok) {
                const markdown = await response.text();
                contentArea.innerHTML = typeof marked !== 'undefined' 
                    ? marked.parse(markdown) 
                    : `<pre>${markdown}</pre>`;
            } else {
                contentArea.innerHTML = renderPlaceholder(chapter);
            }
        } catch (error) {
            contentArea.innerHTML = renderPlaceholder(chapter);
        }

        // Add navigation buttons
        contentArea.innerHTML += renderNavigationButtons(chapterId);
    }

    function renderPlaceholder(chapter) {
        return `
            <div class="text-center py-5">
                <h2 class="h3 fw-bold mb-3">${chapter.title}</h2>
                <p class="text-gray-500 mb-4">Content for this chapter is coming soon!</p>
                <p class="small text-gray-400">
                    Create a file at: <code class="bg-light rounded px-2 py-1">src/content/${courseSlug}/${chapter.contentFile}</code>
                </p>
            </div>
        `;
    }

    function renderNavigationButtons(chapterId) {
        const currentIndex = chapters.findIndex(ch => ch.id === chapterId);
        const isFirst = currentIndex === 0;
        const isLast = currentIndex === chapters.length - 1;
        const completed = isComplete(chapterId);

        return `
            <div class="mt-5 pt-4 border-top d-flex justify-content-between align-items-center">
                <button 
                    onclick="CourseModule.navigatePrevious()"
                    class="btn btn-link text-gray-600 ${isFirst ? 'invisible' : ''}"
                >
                    ← Previous
                </button>
                <button 
                    onclick="CourseModule.toggleComplete('${chapterId}')"
                    class="btn ${completed ? 'btn-complete' : 'btn-primary-custom'} px-4"
                >
                    ${completed ? '✓ Completed' : 'Mark as Complete'}
                </button>
                <button 
                    onclick="CourseModule.navigateNext()"
                    class="btn btn-link text-gray-600 ${isLast ? 'invisible' : ''}"
                >
                    Next →
                </button>
            </div>
        `;
    }

    // ============================================
    // Navigation
    // ============================================
    function navigatePrevious() {
        const currentIndex = chapters.findIndex(ch => ch.id === currentChapter);
        if (currentIndex > 0) {
            loadChapter(chapters[currentIndex - 1].id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function navigateNext() {
        const currentIndex = chapters.findIndex(ch => ch.id === currentChapter);
        if (currentIndex < chapters.length - 1) {
            loadChapter(chapters[currentIndex + 1].id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // ============================================
    // Dashboard & Course Listing
    // ============================================
    async function loadDashboard() {
        const carousel = document.getElementById('course-carousel');
        if (!carousel) return;

        try {
            // Fetch all courses
            const coursesResponse = await fetch(`${API_BASE}/courses/read.php`);
            const coursesData = await coursesResponse.json();
            const allCourses = coursesData.records || [];

            // Fetch user enrollments if logged in
            let userEnrollments = [];
            if (AuthModule.isLoggedIn()) {
                const enrollResponse = await fetch(`${API_BASE}/enroll/my_courses.php`);
                const enrollData = await enrollResponse.json();
                userEnrollments = enrollData.records || [];
            }

            // Render
            carousel.innerHTML = allCourses.map(course => {
                const isEnrolled = userEnrollments.some(e => e.id === course.id);
                return renderCourseCard(course, isEnrolled);
            }).join('');

        } catch (error) {
            console.error('Failed to load dashboard', error);
            carousel.innerHTML = '<p class="text-center w-100">Failed to load courses.</p>';
        }
    }

    function renderCourseCard(course, isEnrolled) {
        return `
            <div class="course-card">
                <div class="course-badge ${course.badge_class || 'badge-beginner'}">
                    ${course.badge_class ? course.badge_class.replace('badge-', '').toUpperCase() : 'BEGINNER'}
                </div>
                <img src="${course.image_url || '../../assets/icon.svg'}" alt="${course.title}" class="course-icon mb-4">
                <h3 class="course-title h5 mb-2">${course.title}</h3>
                <p class="course-description small text-muted mb-4">
                    ${course.description || 'Learn the basics and master the skills.'}
                </p>
                
                ${isEnrolled
                    ? `<a href="course/${course.slug}.html" class="btn btn-primary-custom w-100">Continue Learning</a>`
                    : `<button onclick="CourseModule.enroll(${course.id})" class="btn btn-outline-primary w-100">Enroll Now</button>`
                }
            </div>
        `;
    }

    // ============================================
    // Public API
    // ============================================
    return {
        init,
        loadChapter,
        toggleComplete,
        markComplete,
        markIncomplete,
        isComplete,
        navigatePrevious,
        navigateNext,
        loadDashboard,
        enroll
    };
})();

// Auto-load dashboard if on home page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('home-section')) {
        // Wait for auth to initialize first
        setTimeout(() => CourseModule.loadDashboard(), 500);
    }
});
