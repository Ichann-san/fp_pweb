/**
 * Course Module
 * Handles course content loading, progress tracking, and chapter navigation
 */

const CourseModule = (function() {
    // ============================================
    // State
    // ============================================
    let courseId = '';
    let chapters = [];
    let progress = {};
    let currentChapter = null;

    // ============================================
    // Initialization
    // ============================================
    function init(id, chapterList) {
        courseId = id;
        chapters = chapterList;
        
        loadProgress();
        renderChaptersList();
        updateProgressBar();

        // Load first incomplete chapter or first chapter
        const firstIncomplete = chapters.find(ch => !progress[ch.id]);
        loadChapter(firstIncomplete?.id || chapters[0]?.id);
    }

    // ============================================
    // Progress Management
    // ============================================
    function loadProgress() {
        const stored = localStorage.getItem(`ichanhub_progress_${courseId}`);
        progress = stored ? JSON.parse(stored) : {};
    }

    function saveProgress() {
        localStorage.setItem(`ichanhub_progress_${courseId}`, JSON.stringify(progress));
    }

    function markComplete(chapterId) {
        progress[chapterId] = true;
        saveProgress();
        renderChaptersList();
        updateProgressBar();
    }

    function markIncomplete(chapterId) {
        delete progress[chapterId];
        saveProgress();
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
            const response = await fetch(`../../content/${courseId}/${chapter.contentFile}`);
            
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
                    Create a file at: <code class="bg-light rounded px-2 py-1">src/content/${courseId}/${chapter.contentFile}</code>
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
        getProgressForBackend: () => ({
            courseId,
            progress,
            completedCount: Object.keys(progress).filter(key => progress[key]).length,
            totalChapters: chapters.length,
            lastUpdated: new Date().toISOString()
        })
    };
})();
