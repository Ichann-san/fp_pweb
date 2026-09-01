/** Course content, chapter navigation, and persisted progress. */
const CourseModule = (() => {
    let courseSlug = '';
    let chapters = [];
    let progress = {};
    let currentChapter = null;

    const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);

    function inlineMarkdown(value) {
        return escapeHTML(value)
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\*([^*]+)\*/g, '<em>$1</em>')
            .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>');
    }

    function parseMarkdown(markdown) {
        const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
        const output = [];
        let paragraph = [];
        let listType = null;
        let code = [];
        let inCode = false;

        const flushParagraph = () => {
            if (paragraph.length) output.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
            paragraph = [];
        };
        const closeList = () => {
            if (listType) output.push(`</${listType}>`);
            listType = null;
        };

        for (const line of lines) {
            if (line.startsWith('```')) {
                flushParagraph(); closeList();
                if (inCode) {
                    output.push(`<pre><code>${escapeHTML(code.join('\n'))}</code></pre>`);
                    code = [];
                }
                inCode = !inCode;
                continue;
            }
            if (inCode) { code.push(line); continue; }
            if (!line.trim()) { flushParagraph(); closeList(); continue; }

            const heading = line.match(/^(#{1,3})\s+(.+)$/);
            if (heading) {
                flushParagraph(); closeList();
                const level = heading[1].length;
                output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
                continue;
            }

            const unordered = line.match(/^\s*[-*]\s+(.+)$/);
            const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
            if (unordered || ordered) {
                flushParagraph();
                const nextType = unordered ? 'ul' : 'ol';
                if (listType !== nextType) { closeList(); output.push(`<${nextType}>`); listType = nextType; }
                output.push(`<li>${inlineMarkdown((unordered || ordered)[1])}</li>`);
                continue;
            }

            if (line.startsWith('> ')) {
                flushParagraph(); closeList();
                output.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`);
                continue;
            }
            paragraph.push(line.trim());
        }

        flushParagraph(); closeList();
        if (code.length) output.push(`<pre><code>${escapeHTML(code.join('\n'))}</code></pre>`);
        return output.join('');
    }

    async function fetchJSON(path, options) {
        const response = await fetch(path, { credentials: 'same-origin', ...options });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || 'Request failed.');
        return data;
    }

    function showStatus(message, type = 'info') {
        let status = document.getElementById('course-status');
        if (!status) {
            status = document.createElement('p');
            status.id = 'course-status';
            document.getElementById('chapters-list')?.before(status);
        }
        status.className = `alert py-2 small ${type === 'error' ? 'alert-danger' : type === 'success' ? 'alert-success' : 'alert-info'}`;
        status.textContent = message;
        status.setAttribute('role', type === 'error' ? 'alert' : 'status');
    }

    async function init(slug, chapterList) {
        courseSlug = slug;
        chapters = Array.isArray(chapterList) ? chapterList : [];
        renderChaptersList();
        updateProgressBar();

        await AuthModule.init();
        if (AuthModule.isLoggedIn()) await loadProgress();
        else showStatus('Log in to save chapter progress.');

        const firstChapter = chapters.find(chapter => !progress[chapter.id]) || chapters[0];
        if (firstChapter) await loadChapter(firstChapter.id);
    }

    async function loadProgress() {
        try {
            const data = await fetchJSON(`/api/progress/read.php?course_slug=${encodeURIComponent(courseSlug)}`);
            progress = Object.fromEntries((data.completed || []).map(chapterId => [chapterId, true]));
            renderChaptersList();
            updateProgressBar();
            showStatus('Progress is synced to your account.', 'success');
        } catch (error) {
            showStatus(error.message, 'error');
        }
    }

    async function setComplete(chapterId, completed) {
        if (!AuthModule.isLoggedIn()) {
            const returnPath = encodeURIComponent(window.location.pathname);
            window.location.assign(`/src/html/login.html?return=${returnPath}`);
            return;
        }

        const previous = !!progress[chapterId];
        if (completed) progress[chapterId] = true;
        else delete progress[chapterId];
        renderChaptersList();
        updateProgressBar();

        try {
            await fetchJSON('/api/progress/update.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ course_slug: courseSlug, chapter_id: chapterId, completed })
            });
            showStatus(completed ? 'Chapter marked complete.' : 'Chapter marked incomplete.', 'success');
            if (currentChapter === chapterId) await loadChapter(chapterId, false);
        } catch (error) {
            if (previous) progress[chapterId] = true;
            else delete progress[chapterId];
            renderChaptersList();
            updateProgressBar();
            showStatus(error.message, 'error');
        }
    }

    function toggleComplete(chapterId) {
        return setComplete(chapterId, !progress[chapterId]);
    }

    function updateProgressBar() {
        const completed = chapters.filter(chapter => progress[chapter.id]).length;
        const percentage = chapters.length ? Math.round((completed / chapters.length) * 100) : 0;
        const label = document.getElementById('progress-percentage');
        const bar = document.getElementById('progress-bar-fill');
        if (label) label.textContent = `${percentage}%`;
        if (bar) {
            bar.style.width = `${percentage}%`;
            bar.setAttribute('aria-valuenow', String(percentage));
            bar.setAttribute('aria-label', `${percentage}% complete`);
        }
    }

    function renderChaptersList() {
        const container = document.getElementById('chapters-list');
        if (!container) return;
        container.innerHTML = chapters.map(chapter => {
            const completed = !!progress[chapter.id];
            const active = currentChapter === chapter.id;
            return `<div class="chapter-item ${completed ? 'completed' : ''}">
                <div class="chapter-checkbox-container"><input type="checkbox" class="chapter-checkbox" id="checkbox-${chapter.id}" ${completed ? 'checked' : ''} aria-label="Mark ${chapter.title} complete"></div>
                <div role="button" tabindex="0" class="chapter-title ${active ? 'active' : ''} ${completed ? 'completed' : ''}" data-chapter="${chapter.id}" ${active ? 'aria-current="true"' : ''}>${chapter.title}</div>
            </div>`;
        }).join('');
        container.querySelectorAll('.chapter-checkbox').forEach((checkbox, index) => checkbox.addEventListener('change', () => setComplete(chapters[index].id, checkbox.checked)));
        container.querySelectorAll('[data-chapter]').forEach(button => button.addEventListener('click', () => loadChapter(button.dataset.chapter)));
        container.querySelectorAll('[data-chapter]').forEach(item => item.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                loadChapter(item.dataset.chapter);
            }
        }));
    }

    async function loadChapter(chapterId, scroll = true) {
        const chapter = chapters.find(item => item.id === chapterId);
        const content = document.getElementById('content-area');
        if (!chapter || !content) return;

        currentChapter = chapterId;
        renderChaptersList();
        content.setAttribute('aria-busy', 'true');
        content.innerHTML = '<div class="d-flex justify-content-center align-items-center py-5" role="status" aria-label="Loading chapter"><div class="loading-spinner"></div></div>';

        try {
            const response = await fetch(`../../content/${encodeURIComponent(courseSlug)}/${encodeURIComponent(chapter.contentFile)}`);
            if (!response.ok) throw new Error('Chapter content is not available yet.');
            const markdown = await response.text();
            const body = parseMarkdown(markdown);
            content.innerHTML = `${body}${renderNavigationButtons(chapterId)}`;
            bindContentButtons(content);
        } catch (error) {
            content.innerHTML = `<div class="alert alert-danger" role="alert"><h2 class="h4">${chapter.title}</h2><p class="mb-0">${error.message}</p></div>${renderNavigationButtons(chapterId)}`;
            bindContentButtons(content);
        } finally {
            content.removeAttribute('aria-busy');
        }
        if (scroll) document.getElementById('course-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function renderNavigationButtons(chapterId) {
        const index = chapters.findIndex(chapter => chapter.id === chapterId);
        return `<nav class="mt-5 pt-4 border-top d-flex justify-content-between align-items-center" aria-label="Chapter navigation">
            <button type="button" class="btn btn-link text-gray-600 ${index === 0 ? 'invisible' : ''}" data-previous ${index === 0 ? 'disabled' : ''}>← Previous</button>
            <button type="button" class="btn ${progress[chapterId] ? 'btn-complete' : 'btn-primary-custom'} px-4" data-toggle-current>${progress[chapterId] ? '✓ Completed' : 'Mark as Complete'}</button>
            <button type="button" class="btn btn-link text-gray-600 ${index === chapters.length - 1 ? 'invisible' : ''}" data-next ${index === chapters.length - 1 ? 'disabled' : ''}>Next →</button>
        </nav>`;
    }

    function bindContentButtons(content) {
        content.querySelector('[data-previous]')?.addEventListener('click', navigatePrevious);
        content.querySelector('[data-next]')?.addEventListener('click', navigateNext);
        content.querySelector('[data-toggle-current]')?.addEventListener('click', () => toggleComplete(currentChapter));
    }

    function navigatePrevious() {
        const index = chapters.findIndex(chapter => chapter.id === currentChapter);
        if (index > 0) loadChapter(chapters[index - 1].id);
    }

    function navigateNext() {
        const index = chapters.findIndex(chapter => chapter.id === currentChapter);
        if (index < chapters.length - 1) loadChapter(chapters[index + 1].id);
    }

    return { init, loadChapter, toggleComplete, navigatePrevious, navigateNext };
})();
