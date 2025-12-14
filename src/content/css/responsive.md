# Responsive Design

Responsive design ensures that websites look and function well across all devices and screen sizes. CSS provides powerful tools to create flexible, adaptive layouts.

## Mobile-First Approach

### Basic Mobile-First Structure

```css
/* Base styles for mobile (small screens) */
.container {
    width: 100%;
    padding: 1rem;
    margin: 0 auto;
}

/* Typography scales down on mobile */
h1 {
    font-size: 1.5rem;
    line-height: 1.3;
}

h2 {
    font-size: 1.25rem;
    line-height: 1.4;
}

p {
    font-size: 1rem;
    line-height: 1.6;
}

/* Navigation stacks on mobile */
.nav {
    display: flex;
    flex-direction: column;
}

.nav-item {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
}
```

### Progressive Enhancement with Media Queries

```css
/* Small tablets and large phones */
@media (min-width: 576px) {
    .container {
        max-width: 540px;
        padding: 1.5rem;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
    
    .nav {
        flex-direction: row;
        justify-content: space-around;
    }
    
    .nav-item {
        border-bottom: none;
        padding: 0.5rem 1rem;
    }
}

/* Tablets */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        padding: 2rem;
    }
    
    h1 {
        font-size: 2.5rem;
    }
    
    h2 {
        font-size: 1.75rem;
    }
    
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}

/* Small desktops */
@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .sidebar {
        display: block;
    }
}

/* Large desktops */
@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
    
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Extra large screens */
@media (min-width: 1400px) {
    .container {
        max-width: 1320px;
    }
    
    .grid {
        grid-template-columns: repeat(5, 1fr);
    }
}
```

## Breakpoint System

### Standard Breakpoints

```css
/* CSS Custom Properties for breakpoints */
:root {
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --breakpoint-xxl: 1400px;
}

/* Container max-widths */
.container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (min-width: 576px) {
    .container { max-width: 540px; }
}

@media (min-width: 768px) {
    .container { max-width: 720px; }
}

@media (min-width: 992px) {
    .container { max-width: 960px; }
}

@media (min-width: 1200px) {
    .container { max-width: 1140px; }
}

@media (min-width: 1400px) {
    .container { max-width: 1320px; }
}
```

### Custom Breakpoints

```css
/* Content-driven breakpoints */
:root {
    --breakpoint-content-sm: 480px;
    --breakpoint-content-md: 768px;
    --breakpoint-content-lg: 1024px;
    --breakpoint-content-xl: 1440px;
}

/* Device-specific breakpoints */
:root {
    --breakpoint-mobile: 320px;
    --breakpoint-mobile-large: 414px;
    --breakpoint-tablet: 768px;
    --breakpoint-tablet-large: 1024px;
    --breakpoint-laptop: 1280px;
    --breakpoint-desktop: 1440px;
}

/* Orientation-based breakpoints */
@media (orientation: landscape) and (max-height: 500px) {
    .hero {
        min-height: 300px;
    }
}

@media (orientation: portrait) {
    .portrait-only {
        display: block;
    }
    
    .landscape-only {
        display: none;
    }
}
```

## Responsive Typography

### Fluid Typography

```css
/* Using clamp() for fluid typography */
.fluid-heading {
    font-size: clamp(1.5rem, 4vw, 3rem);
    line-height: 1.2;
}

.fluid-body {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.6;
}

.fluid-small {
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    line-height: 1.5;
}

/* Complex fluid scaling */
.scale-heading {
    font-size: clamp(
        1.25rem, 
        2vw + 1rem, 
        2.5rem
    );
}

/* Viewport unit based */
.viewport-typography {
    font-size: 2.5vw;
    line-height: 1.4;
}

/* Responsive line height */
.responsive-line-height {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: clamp(1.4, 2.5vw, 1.8);
}
```

### Typography Scales

```css
/* Modular scale */
:root {
    --font-size-xs: clamp(0.75rem, 1.5vw, 0.875rem);
    --font-size-sm: clamp(0.875rem, 2vw, 1rem);
    --font-size-base: clamp(1rem, 2.5vw, 1.125rem);
    --font-size-lg: clamp(1.125rem, 3vw, 1.25rem);
    --font-size-xl: clamp(1.25rem, 3.5vw, 1.5rem);
    --font-size-2xl: clamp(1.5rem, 4vw, 2rem);
    --font-size-3xl: clamp(1.875rem, 5vw, 2.5rem);
    --font-size-4xl: clamp(2.25rem, 6vw, 3rem);
}

/* Apply the scale */
.text-xs { font-size: var(--font-size-xs); }
.text-sm { font-size: var(--font-size-sm); }
.text-base { font-size: var(--font-size-base); }
.text-lg { font-size: var(--font-size-lg); }
.text-xl { font-size: var(--font-size-xl); }
.text-2xl { font-size: var(--font-size-2xl); }
.text-3xl { font-size: var(--font-size-3xl); }
.text-4xl { font-size: var(--font-size-4xl); }
```

## Responsive Layouts

### Responsive Grid System

```css
/* Base grid */
.grid {
    display: grid;
    gap: 1rem;
}

/* Mobile-first grid columns */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-5 { grid-template-columns: repeat(5, 1fr); }
.grid-cols-6 { grid-template-columns: repeat(6, 1fr); }

/* Responsive grid columns */
@media (min-width: 576px) {
    .sm\:grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
    .sm\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .sm\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .sm\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
    .sm\:grid-cols-5 { grid-template-columns: repeat(5, 1fr); }
    .sm\:grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
}

@media (min-width: 768px) {
    .md\:grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
    .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .md\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
    .md\:grid-cols-5 { grid-template-columns: repeat(5, 1fr); }
    .md\:grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
}

/* Auto-fit grid for responsive cards */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

/* Dense auto-fit for masonry-like layouts */
.auto-dense {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 100px;
    gap: 1rem;
}

.auto-dense > * {
    grid-row-end: span 2; /* Vary this for different items */
}
```

### Responsive Flexbox

```css
/* Responsive flex containers */
.flex-row {
    display: flex;
    flex-direction: row;
}

.flex-col {
    display: flex;
    flex-direction: column;
}

/* Responsive flex direction */
@media (min-width: 768px) {
    .md\:flex-row {
        flex-direction: row;
    }
    
    .md\:flex-row-reverse {
        flex-direction: row-reverse;
    }
    
    .md\:flex-col {
        flex-direction: column;
    }
    
    .md\:flex-col-reverse {
        flex-direction: column-reverse;
    }
}

/* Responsive flex wrapping */
.flex-wrap {
    flex-wrap: wrap;
}

.flex-nowrap {
    flex-wrap: nowrap;
}

@media (min-width: 768px) {
    .md\:flex-wrap {
        flex-wrap: wrap;
    }
    
    .md\:flex-nowrap {
        flex-wrap: nowrap;
    }
}

/* Responsive gap */
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-5 { gap: 1.25rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }

@media (min-width: 768px) {
    .md\:gap-2 { gap: 0.5rem; }
    .md\:gap-4 { gap: 1rem; }
    .md\:gap-6 { gap: 1.5rem; }
    .md\:gap-8 { gap: 2rem; }
}
```

### Responsive Spacing

```css
/* Margin utilities */
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 0.75rem; }
.m-4 { margin: 1rem; }
.m-5 { margin: 1.25rem; }
.m-6 { margin: 1.5rem; }
.m-8 { margin: 2rem; }

/* Responsive margins */
@media (min-width: 768px) {
    .md\:m-0 { margin: 0; }
    .md\:m-2 { margin: 0.5rem; }
    .md\:m-4 { margin: 1rem; }
    .md\:m-6 { margin: 1.5rem; }
    .md\:m-8 { margin: 2rem; }
}

@media (min-width: 992px) {
    .lg\:m-0 { margin: 0; }
    .lg\:m-4 { margin: 1rem; }
    .lg\:m-8 { margin: 2rem; }
    .lg\:m-12 { margin: 3rem; }
}

/* Padding utilities */
.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
.p-5 { padding: 1.25rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }

/* Responsive padding */
@media (min-width: 768px) {
    .md\:p-4 { padding: 1rem; }
    .md\:p-6 { padding: 1.5rem; }
    .md\:p-8 { padding: 2rem; }
}
```

## Responsive Images

### Fluid Images

```css
/* Basic responsive image */
.responsive-image {
    max-width: 100%;
    height: auto;
}

/* Image containers */
.image-container {
    position: relative;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Different aspect ratios */
.aspect-square {
    aspect-ratio: 1 / 1;
}

.aspect-video {
    aspect-ratio: 16 / 9;
}

.aspect-photo {
    aspect-ratio: 4 / 3;
}

.aspect-portrait {
    aspect-ratio: 3 / 4;
}
```

### Responsive Images with Picture Element

```html
<!-- HTML for responsive images -->
<picture>
    <!-- Small screens -->
    <source 
        media="(max-width: 576px)" 
        srcset="image-576w.jpg 576w, image-400w.jpg 400w"
        sizes="(max-width: 576px) 100vw, 576px">
    
    <!-- Medium screens -->
    <source 
        media="(max-width: 768px)" 
        srcset="image-768w.jpg 768w, image-600w.jpg 600w"
        sizes="(max-width: 768px) 100vw, 768px">
    
    <!-- Large screens -->
    <source 
        media="(min-width: 769px)" 
        srcset="image-1200w.jpg 1200w, image-800w.jpg 800w"
        sizes="(min-width: 1200px) 1200px, 100vw">
    
    <!-- Fallback -->
    <img 
        src="image-600w.jpg" 
        alt="Responsive image"
        width="600" 
        height="400">
</picture>
```

### Background Images

```css
/* Responsive background images */
.responsive-background {
    background-image: url('background-mobile.jpg');
    background-size: cover;
    background-position: center;
    min-height: 300px;
}

/* Different backgrounds for different screens */
@media (min-width: 768px) {
    .responsive-background {
        background-image: url('background-tablet.jpg');
        min-height: 400px;
    }
}

@media (min-width: 1024px) {
    .responsive-background {
        background-image: url('background-desktop.jpg');
        min-height: 500px;
    }
}

/* Responsive background with multiple layers */
.hero-background {
    background: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('hero-mobile.jpg');
    background-size: cover;
    background-position: center;
}

@media (min-width: 768px) {
    .hero-background {
        background: 
            linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url('hero-desktop.jpg');
    }
}
```

## Responsive Navigation

### Mobile-First Navigation

```css
/* Mobile navigation */
.navbar {
    display: flex;
    flex-direction: column;
    background-color: #333;
}

.nav-toggle {
    display: block;
    padding: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
}

.nav-menu {
    display: none;
    flex-direction: column;
}

.nav-menu.active {
    display: flex;
}

.nav-item {
    padding: 0.75rem 1rem;
    color: white;
    text-decoration: none;
    border-bottom: 1px solid #555;
}

.nav-item:hover {
    background-color: #555;
}

/* Desktop navigation */
@media (min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .nav-toggle {
        display: none;
    }
    
    .nav-menu {
        display: flex;
        flex-direction: row;
    }
    
    .nav-item {
        border-bottom: none;
        border-right: 1px solid #555;
    }
    
    .nav-item:last-child {
        border-right: none;
    }
}
```

### Hamburger Menu

```css
/* Hamburger icon animation */
.hamburger {
    width: 24px;
    height: 24px;
    position: relative;
    cursor: pointer;
}

.hamburger span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: white;
    position: absolute;
    transition: all 0.3s ease;
}

.hamburger span:nth-child(1) {
    top: 0;
}

.hamburger span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
}

.hamburger span:nth-child(3) {
    bottom: 0;
}

/* Animated hamburger (X) */
.hamburger.active span:nth-child(1) {
    transform: rotate(45deg);
    top: 50%;
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg);
    bottom: 50%;
}

/* Slide-out menu */
.slide-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background-color: #333;
    transition: right 0.3s ease;
    z-index: 1000;
}

.slide-menu.active {
    right: 0;
}

@media (min-width: 768px) {
    .slide-menu {
        position: static;
        width: auto;
        height: auto;
        background: none;
    }
}
```

## Responsive Forms

### Mobile-First Forms

```css
/* Mobile form layout */
.form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 1rem;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.form-input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* Inline form on larger screens */
@media (min-width: 768px) {
    .form-inline {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        align-items: end;
    }
    
    .form-group-span-2 {
        grid-column: span 2;
    }
}

/* Form with sidebar layout */
.form-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.form-main {
    order: 1;
}

.form-sidebar {
    order: 2;
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
}

@media (min-width: 992px) {
    .form-layout {
        grid-template-columns: 2fr 1fr;
    }
    
    .form-main {
        order: 1;
    }
    
    .form-sidebar {
        order: 2;
    }
}
```

## Responsive Components

### Responsive Cards

```css
/* Card component */
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-4px);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 1.5rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.card-actions {
    display: flex;
    gap: 0.5rem;
}

/* Responsive card grid */
.card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

@media (min-width: 576px) {
    .card-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 768px) {
    .card-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1024px) {
    .card-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Responsive card sizes */
.card-large {
    grid-column: span 2;
    grid-row: span 2;
}

@media (max-width: 767px) {
    .card-large {
        grid-column: span 1;
        grid-row: span 1;
    }
}
```

### Responsive Modals

```css
/* Modal base */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    transform: scale(0.9);
    transition: transform 0.3s ease;
}

.modal.active .modal-content {
    transform: scale(1);
}

/* Responsive modal sizes */
@media (min-width: 576px) {
    .modal-content {
        max-width: 500px;
    }
}

@media (min-width: 768px) {
    .modal-content {
        max-width: 700px;
    }
}

@media (min-width: 1024px) {
    .modal-content {
        max-width: 900px;
    }
}

/* Fullscreen modal for mobile */
@media (max-width: 767px) {
    .modal-fullscreen .modal-content {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 0;
        padding: 1rem;
    }
}
```

## User Preference Queries

### Dark Mode

```css
/* Light mode (default) */
:root {
    --bg-color: #ffffff;
    --text-color: #333333;
    --border-color: #e0e0e0;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #1a1a1a;
        --text-color: #ffffff;
        --border-color: #333333;
    }
}

/* Manual dark mode toggle */
[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
    --border-color: #333333;
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

/* Disable parallax */
.parallax {
    transform: none !important;
}

/* Disable hover effects */
@media (prefers-reduced-motion: reduce) {
    .hover-effect:hover {
        transform: none;
        box-shadow: none;
    }
}
```

### High Contrast

```css
/* High contrast mode */
@media (prefers-contrast: high) {
    .button {
        border: 2px solid;
        background: white;
        color: black;
    }
    
    .button:hover {
        background: black;
        color: white;
    }
    
    .card {
        border: 2px solid;
    }
    
    .link {
        text-decoration: underline;
    }
}
```

## Performance Optimization

### Critical CSS

```css
/* Critical above-the-fold styles */
.critical {
    /* Essential styles for initial render */
    font-family: system-ui, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Non-critical styles loaded asynchronously */
.non-critical {
    /* Loaded via JavaScript or separate file */
    animation: fadeIn 0.5s ease;
}
```

### Efficient Media Queries

```css
/* Use mobile-first approach */
.efficient-queries {
    /* Base styles first */
    display: block;
    width: 100%;
}

/* Then add enhancements */
@media (min-width: 768px) {
    .efficient-queries {
        display: flex;
        justify-content: space-between;
    }
}

/* Group related properties */
@media (min-width: 768px) {
    .responsive-grid {
        /* All grid properties together */
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    
    .responsive-flex {
        /* All flex properties together */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}

/* Avoid duplicate properties */
@media (min-width: 768px) {
    .avoid-duplicates {
        display: grid; /* Set once */
        grid-template-columns: repeat(3, 1fr); /* Set once */
        gap: 2rem; /* Set once */
    }
}
```

## Testing and Debugging

### Responsive Testing Tools

```css
/* Add debug information */
.debug-responsive::before {
    content: attr(data-breakpoint);
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    z-index: 9999;
}

/* Visual breakpoints */
.debug-breakpoints {
    position: fixed;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    z-index: 9999;
    opacity: 0.5;
}

@media (max-width: 575px) {
    .debug-breakpoints {
        background: red;
    }
}

@media (min-width: 576px) and (max-width: 767px) {
    .debug-breakpoints {
        background: orange;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .debug-breakpoints {
        background: yellow;
    }
}

@media (min-width: 992px) {
    .debug-breakpoints {
        background: green;
    }
}
```

Responsive design ensures your website provides an optimal viewing experience across all devices, from mobile phones to desktop computers. Use these techniques to create layouts that adapt gracefully to different screen sizes and user preferences.