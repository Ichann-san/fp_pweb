import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');

function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  });
}

const htmlFiles = [
  join(root, 'index.html'),
  ...filesUnder(join(root, 'src', 'html')).filter((path) => extname(path) === '.html'),
];
const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');

  for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/gi)) {
    const reference = match[1];
    if (!reference || reference.startsWith('#') || /^(?:https?:|data:|mailto:|javascript:)/i.test(reference)) {
      continue;
    }

    const path = resolve(dirname(file), reference.split(/[?#]/, 1)[0]);
    if (!existsSync(path)) {
      failures.push(`${file}: missing local reference ${reference}`);
    }
  }
}

const courseCss = readFileSync(join(root, 'src', 'css', 'course.css'), 'utf8');
const themeScript = readFileSync(join(root, 'src', 'js', 'script.js'), 'utf8');
if (!themeScript.includes("setAttribute('data-bs-theme'")) {
  failures.push('script.js: expected data-bs-theme theme owner is missing');
}
if (/\.dark\s+\.(?:prose|chapter-)/.test(courseCss)) {
  failures.push('course.css: legacy .dark selector does not match the data-bs-theme owner');
}
for (const selector of [
  '[data-bs-theme="dark"] .prose',
  '[data-bs-theme="dark"] .prose h1',
  '[data-bs-theme="dark"] .prose h2',
  '[data-bs-theme="dark"] .prose h3',
]) {
  if (!courseCss.includes(selector)) failures.push(`course.css: missing ${selector}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Static check passed: ${htmlFiles.length} HTML pages and all local references exist.`);
