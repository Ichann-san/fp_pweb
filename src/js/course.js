/**
 * Course Module
 * Handles course content loading, progress tracking, and chapter navigation
 */

const CourseModule = (function() {
    let courseId = '';
    let chapters = [];
    let progress = {};
    let currentChapter = null;

    // Initialize the course
    function init(id, chapterList) {
        courseId = id;
        chapters = chapterList;
        
        // Load progress from localStorage
        loadProgress();
        
        // Render the chapters list
        renderChaptersList();
        
        // Update progress bar
        updateProgressBar();

        // Load first incomplete chapter or first chapter
        const firstIncomplete = chapters.find(ch => !progress[ch.id]);
        if (firstIncomplete) {
            loadChapter(firstIncomplete.id);
        } else if (chapters.length > 0) {
            loadChapter(chapters[0].id);
        }
    }

    // Load progress from localStorage
    function loadProgress() {
        const stored = localStorage.getItem(`ichanhub_progress_${courseId}`);
        if (stored) {
            progress = JSON.parse(stored);
        } else {
            progress = {};
        }
    }

    // Save progress to localStorage
    function saveProgress() {
        localStorage.setItem(`ichanhub_progress_${courseId}`, JSON.stringify(progress));
    }

    // Mark chapter as complete
    function markComplete(chapterId) {
        progress[chapterId] = true;
        saveProgress();
        renderChaptersList();
        updateProgressBar();
    }

    // Mark chapter as incomplete
    function markIncomplete(chapterId) {
        delete progress[chapterId];
        saveProgress();
        renderChaptersList();
        updateProgressBar();
    }

    // Toggle chapter completion
    function toggleComplete(chapterId) {
        if (progress[chapterId]) {
            markIncomplete(chapterId);
        } else {
            markComplete(chapterId);
        }
    }

    // Check if chapter is complete
    function isComplete(chapterId) {
        return !!progress[chapterId];
    }

    // Update progress bar
    function updateProgressBar() {
        const completed = Object.keys(progress).filter(key => progress[key]).length;
        const total = chapters.length;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

        const progressPercentage = document.getElementById('progress-percentage');
        const progressBarFill = document.getElementById('progress-bar-fill');

        if (progressPercentage) {
            progressPercentage.textContent = `${percentage}%`;
        }
        if (progressBarFill) {
            progressBarFill.style.width = `${percentage}%`;
        }
    }

    // Render chapters list with checkboxes
    function renderChaptersList() {
        const container = document.getElementById('chapters-list');
        if (!container) return;

        container.innerHTML = chapters.map((chapter, index) => {
            const isCompleted = isComplete(chapter.id);
            const isActive = currentChapter === chapter.id;
            const isPreviousCompleted = index > 0 ? isComplete(chapters[index - 1].id) : true;

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

    // Load chapter content
    async function loadChapter(chapterId) {
        const chapter = chapters.find(ch => ch.id === chapterId);
        if (!chapter) return;

        currentChapter = chapterId;
        renderChaptersList();

        const contentArea = document.getElementById('content-area');
        if (!contentArea) return;

        // Show loading state
        contentArea.innerHTML = `
            <div class="flex justify-center items-center py-12">
                <div class="loading-spinner"></div>
            </div>
        `;

        try {
            // Try to fetch markdown content
            const response = await fetch(`../../content/${courseId}/${chapter.contentFile}`);
            
            if (response.ok) {
                const markdown = await response.text();
                // Parse markdown using marked.js
                if (typeof marked !== 'undefined') {
                    contentArea.innerHTML = marked.parse(markdown);
                } else {
                    contentArea.innerHTML = `<pre>${markdown}</pre>`;
                }
            } else {
                // Show placeholder content if file doesn't exist yet
                contentArea.innerHTML = `
                    <div class="text-center py-12">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${chapter.title}</h2>
                        <p class="text-gray-500 dark:text-gray-400 mb-6">
                            Content for this chapter is coming soon!
                        </p>
                        <p class="text-sm text-gray-400 dark:text-gray-500">
                            Create a file at: <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">src/content/${courseId}/${chapter.contentFile}</code>
                        </p>
                    </div>
                `;
            }
        } catch (error) {
            // Show placeholder for chapters without content
            contentArea.innerHTML = `
                <div class="text-center py-12">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${chapter.title}</h2>
                    <p class="text-gray-500 dark:text-gray-400 mb-6">
                        Content for this chapter is coming soon!
                    </p>
                    <p class="text-sm text-gray-400 dark:text-gray-500">
                        Create a file at: <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">src/content/${courseId}/${chapter.contentFile}</code>
                    </p>
                </div>
            `;
        }

        // Add "Mark as Complete" button at the bottom
        contentArea.innerHTML += `
            <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <button 
                    onclick="CourseModule.navigatePrevious()"
                    class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${chapters.findIndex(ch => ch.id === chapterId) === 0 ? 'invisible' : ''}"
                >
                    ← Previous
                </button>
                <button 
                    onclick="CourseModule.toggleComplete('${chapterId}')"
                    class="px-6 py-2 rounded-lg font-medium transition-all ${isComplete(chapterId) 
                        ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'}"
                >
                    ${isComplete(chapterId) ? '✓ Completed' : 'Mark as Complete'}
                </button>
                <button 
                    onclick="CourseModule.navigateNext()"
                    class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${chapters.findIndex(ch => ch.id === chapterId) === chapters.length - 1 ? 'invisible' : ''}"
                >
                    Next →
                </button>
            </div>
        `;
    }

    // Navigate to previous chapter
    function navigatePrevious() {
        const currentIndex = chapters.findIndex(ch => ch.id === currentChapter);
        if (currentIndex > 0) {
            loadChapter(chapters[currentIndex - 1].id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Navigate to next chapter
    function navigateNext() {
        const currentIndex = chapters.findIndex(ch => ch.id === currentChapter);
        if (currentIndex < chapters.length - 1) {
            loadChapter(chapters[currentIndex + 1].id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Get progress data for backend
    function getProgressForBackend() {
        return {
            courseId: courseId,
            progress: progress,
            completedCount: Object.keys(progress).filter(key => progress[key]).length,
            totalChapters: chapters.length,
            lastUpdated: new Date().toISOString()
        };
    }

    // Public API
    return {
        init,
        loadChapter,
        toggleComplete,
        markComplete,
        markIncomplete,
        isComplete,
        navigatePrevious,
        navigateNext,
        getProgressForBackend
    };
})();
