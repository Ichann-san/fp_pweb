# CSS Best Practices

Following CSS best practices ensures maintainable, performant, and scalable stylesheets. This comprehensive guide covers organization, performance, accessibility, and modern CSS techniques.

## CSS Architecture

### CSS Organization

```css
/* 1. CSS Reset/Normalize */
/* Reset browser defaults */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* 2. CSS Custom Properties (Variables) */
:root {
    /* Colors */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
    
    /* Typography */
    --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-family-monospace: 'Monaco', 'Menlo', monospace;
    --font-size-base: 1rem;
    --line-height-base: 1.6;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    
    /* Breakpoints */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --breakpoint-xxl: 1400px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}

/* 3. Base Styles */
body {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    color: #333;
    background-color: white;
}

/* 4. Typography */
h1, h2, h3, h4, h5, h6 {
    margin-bottom: var(--spacing-md);
    font-weight: 600;
    line-height: 1.3;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

p {
    margin-bottom: var(--spacing-md);
}

/* 5. Layout Components */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

.grid {
    display: grid;
    gap: var(--spacing-lg);
}

.flex {
    display: flex;
}

/* 6. Components */
.btn {
    display: inline-block;
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-base);
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background-color: #0056b3;
}

/* 7. Utilities */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: var(--spacing-xs); }
.mb-2 { margin-bottom: var(--spacing-sm); }
.mb-3 { margin-bottom: var(--spacing-md); }
.mb-4 { margin-bottom: var(--spacing-lg); }

.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

/* 8. Responsive */
@media (max-width: 767px) {
    .d-md-none { display: none; }
    .d-md-block { display: block; }
}
```

### BEM Methodology

```css
/* Block */
.card {
    background: white;
    border-radius: 8px;
    box-shadow: var(--shadow-md);
    overflow: hidden;
}

/* Element */
.card__header {
    padding: var(--spacing-lg);
    border-bottom: 1px solid #eee;
}

.card__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
}

.card__body {
    padding: var(--spacing-lg);
}

.card__footer {
    padding: var(--spacing-lg);
    background-color: #f8f9fa;
    border-top: 1px solid #eee;
}

/* Modifier */
.card--featured {
    border: 2px solid var(--primary-color);
}

.card--featured .card__header {
    background-color: var(--primary-color);
    color: white;
}

.card__title--large {
    font-size: 1.5rem;
}

.card__body--compact {
    padding: var(--spacing-md);
}
```

### Component-Based CSS

```css
/* Navigation Component */
.nav {
    display: flex;
    align-items: center;
    padding: var(--spacing-md) var(--spacing-lg);
    background-color: var(--dark-color);
}

.nav__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav__item {
    margin-left: var(--spacing-lg);
}

.nav__link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color var(--transition-fast);
}

.nav__link:hover {
    color: var(--primary-color);
}

.nav__link--active {
    color: var(--primary-color);
}

/* Mobile Navigation */
@media (max-width: 767px) {
    .nav {
        flex-direction: column;
        align-items: stretch;
    }
    
    .nav__list {
        flex-direction: column;
        margin-top: var(--spacing-md);
    }
    
    .nav__item {
        margin: 0;
        border-bottom: 1px solid #555;
    }
    
    .nav__link {
        display: block;
        padding: var(--spacing-md);
    }
}
```

## Performance Optimization

### Critical CSS

```css
/* Critical CSS - Above the fold styles */
/* Load in <head> */
.critical {
    /* Essential layout styles */
    body {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.6;
        color: #333;
    }
    
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }
    
    .header {
        background: #333;
        color: white;
        padding: 1rem 0;
    }
}

/* Non-critical CSS - Load asynchronously */
/* Link in <head> with preload or load via JavaScript */
.non-critical {
    /* Complex animations */
    .fade-in {
        animation: fadeIn 0.6s ease-out;
    }
    
    /* Complex grid layouts */
    .complex-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
}
```

### CSS Minification and Compression

```css
/* Before minification */
.container {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin-bottom: 2rem;
}

/* After minification */
.container{background-color:#fff;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,.1);padding:2rem;margin-bottom:2rem;}
```

### Efficient Selectors

```css
/* Good: Simple, efficient selectors */
.btn {
    background: var(--primary-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
}

/* Bad: Overly specific selectors */
.container .main-content .card .card-header .title {
    color: #333;
    font-size: 1.25rem;
    font-weight: 600;
}

/* Better: Use component classes */
.card-header__title {
    color: #333;
    font-size: 1.25rem;
    font-weight: 600;
}

/* Good: Avoid deep nesting */
.nav ul li a {
    color: blue;
}

/* Better: Use direct selectors */
.nav__link {
    color: blue;
}
```

### CSS Containment

```css
/* Use containment to optimize rendering */
.card {
    contain: layout style paint;
    /* layout: prevents layout changes from affecting outside */
    /* style: prevents CSS counters from affecting outside */
    /* paint: prevents painting from affecting outside */
}

.sidebar {
    contain: layout;
}

.animated-element {
    contain: layout style;
    will-change: transform; /* Optimize for animations */
}

/* Content visibility */
.lazy-content {
    content-visibility: auto;
    /* Browser skips rendering until needed */
}
```

### Font Loading Optimization

```css
/* Font loading strategy */
@font-face {
    font-family: 'Inter';
    src: url('inter.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Show fallback font, swap when loaded */
}

@font-face {
    font-family: 'Inter';
    src: url('inter-bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

/* Preload critical fonts */
@font-face {
    font-family: 'Inter';
    src: url('inter-regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

/* Font loading states */
.loading {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    /* Fallback to system fonts */
}

.loaded {
    font-family: 'Inter', sans-serif;
    /* Switch to web font when loaded */
}
```

## Modern CSS Techniques

### CSS Grid and Flexbox

```css
/* Use modern layout methods */
.layout {
    display: grid;
    grid-template-columns: 250px 1fr 250px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive grid */
@media (max-width: 768px) {
    .layout {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
    }
}

/* Flexbox for components */
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-column {
    display: flex;
    flex-direction: column;
}
```

### CSS Custom Properties

```css
/* Dynamic theming with CSS variables */
:root {
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    
    --border-radius: 0.375rem;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: 0.3s ease;
}

/* Component using variables */
.card {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform var(--transition);
}

.card:hover {
    transform: translateY(-4px);
}

/* Dark theme */
[data-theme="dark"] {
    --primary: #0056b3;
    --secondary: #495057;
    --light: #343a40;
    --dark: #f8f9fa;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Responsive custom properties */
:root {
    --font-size-base: 1rem;
    --spacing-base: 1rem;
}

@media (min-width: 768px) {
    :root {
        --font-size-base: 1.125rem;
        --spacing-base: 1.5rem;
    }
}
```

### CSS Container Queries

```css
/* Container-based responsive design */
.card-container {
    container-type: inline-size;
}

@container (min-width: 400px) {
    .card {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: var(--spacing-base);
    }
}

@container (min-width: 600px) {
    .card {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
```

### CSS Logical Properties

```css
/* Logical properties for internationalization */
.element {
    /* Instead of margin-left/right */
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
    
    /* Instead of padding-top/bottom */
    padding-block-start: 0.5rem;
    padding-block-end: 0.5rem;
    
    /* Instead of border-left/right */
    border-inline-start: 1px solid #ccc;
    border-inline-end: 1px solid #ccc;
    
    /* Instead of float:left/right */
    float: inline-start;
    
    /* Instead of text-align:left/right */
    text-align: start;
}
```

## Accessibility Best Practices

### Focus Management

```css
/* Visible focus indicators */
*:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* Custom focus styles */
button:focus-visible {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

/* Skip links */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    transition: top var(--transition-fast);
}

.skip-link:focus {
    top: 6px;
}

/* Remove focus outline for mouse users only */
.js-focus-visible :focus:not(.focus-visible) {
    outline: none;
}
```

### Color and Contrast

```css
/* Ensure adequate contrast ratios */
.text-primary {
    color: #007bff; /* High contrast on white background */
}

.text-muted {
    color: #6c757d; /* Meets WCAG AA for normal text */
}

/* Don't rely solely on color */
.alert {
    padding: var(--spacing-md);
    border-left: 4px solid;
    margin-bottom: var(--spacing-md);
}

.alert--success {
    background-color: #d4edda;
    border-left-color: #28a745;
}

.alert--success::before {
    content: "✓";
    color: #28a745;
    margin-right: var(--spacing-sm);
}

.alert--error {
    background-color: #f8d7da;
    border-left-color: #dc3545;
}

.alert--error::before {
    content: "✗";
    color: #dc3545;
    margin-right: var(--spacing-sm);
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .btn {
        border: 2px solid;
        background: white;
        color: black;
    }
    
    .btn:hover {
        background: black;
        color: white;
    }
}
```

### Reduced Motion

```css
/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* Disable specific animations */
@media (prefers-reduced-motion: reduce) {
    .parallax {
        transform: none !important;
    }
    
    .hover-effect:hover {
        transform: none !important;
    }
    
    .loading-spinner {
        animation: none !important;
        border-top-color: var(--primary-color);
    }
}
```

### Semantic HTML Structure

```css
/* Style based on semantic meaning, not appearance */
header {
    background-color: var(--dark-color);
    color: white;
    padding: var(--spacing-lg);
}

main {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-xl) var(--spacing-md);
}

nav {
    display: flex;
    gap: var(--spacing-lg);
}

nav a {
    color: inherit;
    text-decoration: none;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius);
    transition: background-color var(--transition-fast);
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

section {
    margin-bottom: var(--spacing-2xl);
}

article {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
}

aside {
    background-color: var(--light-color);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius);
}
```

## Responsive Design

### Mobile-First Approach

```css
/* Base styles for mobile */
.container {
    width: 100%;
    padding: var(--spacing-md);
}

.grid {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: 1fr;
}

.btn {
    width: 100%;
    padding: var(--spacing-md);
    font-size: 1.1rem;
}

/* Progressive enhancement for larger screens */
@media (min-width: 576px) {
    .container {
        max-width: 540px;
        padding: var(--spacing-lg);
    }
    
    .grid--2 {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .btn {
        width: auto;
        padding: var(--spacing-sm) var(--spacing-lg);
        font-size: 1rem;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
    
    .grid--3 {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
    
    .grid--4 {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

### Fluid Typography

```css
/* Fluid typography using clamp() */
.fluid-heading {
    font-size: clamp(1.5rem, 4vw, 3rem);
    line-height: 1.2;
    margin-bottom: var(--spacing-lg);
}

.fluid-body {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.6;
}

.fluid-small {
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    line-height: 1.5;
}

/* Responsive spacing */
.responsive-spacing {
    padding: clamp(1rem, 4vw, 3rem);
    margin: clamp(0.5rem, 2vw, 2rem);
}
```

## CSS Maintenance

### Naming Conventions

```css
/* BEM naming convention */
.block {
    /* Styles for the block */
}

.block__element {
    /* Styles for element within block */
}

.block--modifier {
    /* Styles for modified block */
}

/* Component-based naming */
.component-name {
    /* Component styles */
}

.component-name__subcomponent {
    /* Subcomponent styles */
}

.component-name--variant {
    /* Component variant styles */
}

/* Utility-first naming */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.m-0 { margin: 0; }
.m-1 { margin: var(--spacing-xs); }
.m-2 { margin: var(--spacing-sm); }
.m-3 { margin: var(--spacing-md); }

.p-0 { padding: 0; }
.p-1 { padding: var(--spacing-xs); }
.p-2 { padding: var(--spacing-sm); }
.p-3 { padding: var(--spacing-md); }
```

### Code Organization

```css
/* 1. CSS Custom Properties (Variables) */
/* Define all design tokens */
:root {
    --colors-primary: #007bff;
    --colors-secondary: #6c757d;
    /* ... more colors */
    
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    /* ... more spacing */
    
    --breakpoints-sm: 576px;
    --breakpoints-md: 768px;
    /* ... more breakpoints */
}

/* 2. Reset/Normalize */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* 3. Base Styles */
html {
    font-size: 16px;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* 4. Typography */
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }

/* 5. Layout */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.grid {
    display: grid;
    gap: 1rem;
}

/* 6. Components */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
    border-radius: 0.375rem;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: all 0.15s ease;
}

/* 7. Utilities */
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* 8. Responsive */
@media (min-width: 768px) {
    .md\:d-none { display: none; }
    .md\:d-block { display: block; }
    .md\:d-flex { display: flex; }
}
```

### CSS Documentation

```css
/**
 * Button Component
 * 
 * Used for primary actions throughout the application.
 * Supports multiple variants and sizes.
 * 
 * @example
 * <button class="btn btn-primary btn-lg">Click Me</button>
 * 
 * @see {@link https://example.com/buttons} for design guidelines
 */

/* Base button styles */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 0.375rem;
    transition: all 0.15s ease;
    user-select: none;
}

/* Primary button variant */
.btn--primary {
    color: white;
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn--primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

/* Button sizes */
.btn--sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
}

.btn--lg {
    padding: 1rem 2rem;
    font-size: 1.25rem;
}
```

## Testing and Debugging

### CSS Validation

```css
/* Use CSS validators and linters */
/* Tools: stylelint, csscomb, autoprefixer */

/* Example stylelint configuration */
/* .stylelintrc.json */
{
  "extends": ["stylelint-config-standard"],
  "rules": {
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "selector-no-qualifying-type": true,
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-brackets-space-inside": "never",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-query-list-comma-space-before": "always",
    "media-query-list-comma-space-after": "always"
  }
}
```

### Browser Compatibility

```css
/* Use feature queries for progressive enhancement */
@supports (display: grid) {
    .grid-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

@supports not (display: grid) {
    .grid-layout {
        display: flex;
        flex-wrap: wrap;
        margin: -1rem;
    }
    
    .grid-layout > * {
        flex: 1 1 300px;
        margin: 1rem;
    }
}

/* Vendor prefixes for older browsers */
.flex-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.flex-item {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

/* Autoprefixer will handle most vendor prefixes automatically */
```

### Performance Monitoring

```css
/* Monitor and optimize CSS performance */

/* Use CSS containment for complex components */
.heavy-component {
    contain: layout style paint;
    /* Prevents layout/paint work from affecting outside */
}

/* Optimize animations */
.optimized-animation {
    will-change: transform, opacity;
    /* Hints browser for animation optimization */
}

/* Remove will-change when no longer needed */
.optimized-animation.no-animation {
    will-change: auto;
}

/* Use content-visibility for below-the-fold content */
.lazy-section {
    content-visibility: auto;
    /* Browser skips rendering until section is scrolled to */
}
```

## Security Considerations

### Content Security Policy

```html
<!-- Set CSP headers to control CSS loading -->
<meta http-equiv="Content-Security-Policy" 
      content="style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com;">
```

### CSS Injection Prevention

```css
/* Avoid using user input in CSS without sanitization */

/* Bad: Don't do this */
/* .user-class-<%= user_input %> { } */

/* Good: Use predefined classes only */
.user-section {
    /* Predefined safe styles */
}

/* Validate CSS custom properties */
:root {
    /* Only use safe, predefined values */
    --safe-color: #007bff;
    --safe-spacing: 1rem;
}

/* Avoid eval() or dynamic CSS generation */
/* Bad: document.createElement('style').textContent = userCSS; */
```

## Tooling and Build Process

### CSS Preprocessing

```scss
/* Using SCSS for better organization */
/* _variables.scss */
$primary-color: #007bff;
$secondary-color: #6c757d;

$spacing-unit: 1rem;
$border-radius: 0.375rem;

$breakpoints: (
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
);

/* _mixins.scss */
@mixin respond-to($breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
        @content;
    }
}

@mixin button-variant($color, $hover-color) {
    background-color: $color;
    border-color: $color;
    color: white;
    
    &:hover {
        background-color: $hover-color;
        border-color: $hover-color;
    }
}

/* _components.scss */
.btn {
    display: inline-block;
    padding: ($spacing-unit * 0.75) ($spacing-unit * 1.5);
    font-weight: 500;
    text-align: center;
    border: 1px solid transparent;
    border-radius: $border-radius;
    transition: all 0.15s ease;
}

.btn--primary {
    @include button-variant($primary-color, darken($primary-color, 10%));
}

.btn--secondary {
    @include button-variant($secondary-color, darken($secondary-color, 10%));
}
```

### CSS-in-JS Considerations

```javascript
/* Consider CSS-in-JS for component-scoped styles */
/* Using styled-components */
import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background-color: #007bff;
    border: 1px solid #007bff;
    border-radius: 0.375rem;
    transition: all 0.15s ease;
    
    &:hover {
        background-color: #0056b3;
        border-color: #0056b3;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 0.5rem;
    }
`;

export const Card = styled.div`
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    
    ${props => props.featured && `
        border: 2px solid #007bff;
    `}
`;
```

### Build Process

```json
{
  "name": "css-project",
  "scripts": {
    "build": "npm run build:css && npm run build:minify",
    "build:css": "node-sass src/scss/main.scss dist/css/main.css",
    "build:minify": "postcss dist/css/main.css -o dist/css/main.min.css",
    "watch": "node-sass --watch src/scss/main.scss dist/css/main.css",
    "lint": "stylelint src/scss/**/*.scss",
    "validate": "stylelint src/scss/**/*.scss && css-validator dist/css/main.css"
  },
  "devDependencies": {
    "node-sass": "^7.0.0",
    "postcss": "^8.0.0",
    "postcss-cli": "^10.0.0",
    "autoprefixer": "^10.0.0",
    "cssnano": "^5.0.0",
    "stylelint": "^14.0.0",
    "stylelint-config-standard": "^24.0.0"
  }
}
```

```js
// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default'
        })
    ]
};
```

## Summary

### Key Takeaways

1. **Organize CSS logically**: Use a consistent file structure and naming convention
2. **Use CSS Custom Properties**: For maintainable theming and dynamic values
3. **Follow mobile-first design**: Progressive enhancement from small to large screens
4. **Optimize performance**: Minimize reflows, use containment, and optimize animations
5. **Ensure accessibility**: Respect user preferences and provide adequate contrast
6. **Write maintainable code**: Use BEM methodology and component-based architecture
7. **Test across browsers**: Use feature queries and provide fallbacks
8. **Use modern CSS**: Embrace Grid, Flexbox, and logical properties
9. **Document your code**: Comment complex patterns and provide usage examples
10. **Automate your workflow**: Use build tools for preprocessing, minification, and validation

### Best Practices Checklist

- [ ] Use CSS custom properties for design tokens
- [ ] Follow BEM or component-based naming conventions
- [ ] Write mobile-first responsive CSS
- [ ] Ensure focus indicators are visible
- [ ] Test with reduced motion preferences
- [ ] Validate CSS for syntax errors
- [ ] Optimize for performance (minify, compress, cache)
- [ ] Use feature queries for progressive enhancement
- [ ] Provide fallbacks for older browsers
- [ ] Document complex CSS patterns
- [ ] Use automated tools (linters, formatters)
- [ ] Test accessibility with screen readers
- [ ] Monitor CSS bundle size
- [ ] Use logical properties for internationalization
- [ ] Implement proper loading strategies for fonts

Following these best practices will help you create CSS that is maintainable, performant, accessible, and scalable for projects of any size.