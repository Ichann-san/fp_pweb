# Colors & Backgrounds

CSS provides powerful ways to work with colors and backgrounds. Understanding color systems, color values, and background properties is essential for creating visually appealing designs.

## Color Values

### Named Colors

```css
/* CSS named colors */
.primary { color: blue; }
.success { color: green; }
.warning { color: orange; }
.danger { color: red; }
.info { color: cyan; }
.light { color: white; }
.dark { color: black; }

/* Gray scale */
.gray-100 { color: #f8f9fa; }
.gray-200 { color: #e9ecef; }
.gray-300 { color: #dee2e6; }
.gray-400 { color: #ced4da; }
.gray-500 { color: #adb5bd; }
.gray-600 { color: #6c757d; }
.gray-700 { color: #495057; }
.gray-800 { color: #343a40; }
.gray-900 { color: #212529; }
```

### Hexadecimal Colors

```css
/* Hex color values */
.red { color: #ff0000; }
.green { color: #00ff00; }
.blue { color: #0000ff; }
.white { color: #ffffff; }
.black { color: #000000; }
.gray { color: #808080; }

/* Shorthand hex (when pairs are identical) */
.red-short { color: #f00; }
.green-short { color: #0f0; }
.blue-short { color: #00f; }

/* With transparency (modern browsers) */
.red-alpha { color: #ff000080; } /* 50% transparency */
.blue-alpha { color: #0000ffcc; } /* 80% transparency */
```

### RGB and RGBA

```css
/* RGB values */
.red-rgb { color: rgb(255, 0, 0); }
.green-rgb { color: rgb(0, 255, 0); }
.blue-rgb { color: rgb(0, 0, 255); }

/* RGBA with alpha channel */
.red-rgba { color: rgba(255, 0, 0, 0.5); } /* 50% transparency */
.blue-rgba { color: rgba(0, 0, 255, 0.8); } /* 80% transparency */
.white-rgba { color: rgba(255, 255, 255, 0.9); } /* 90% transparency */
```

### HSL and HSLA

```css
/* HSL values */
.red-hsl { color: hsl(0, 100%, 50%); }
.green-hsl { color: hsl(120, 100%, 50%); }
.blue-hsl { color: hsl(240, 100%, 50%); }

/* HSLA with alpha channel */
.red-hsla { color: hsla(0, 100%, 50%, 0.5); }
.green-hsla { color: hsla(120, 100%, 50%, 0.8); }

/* HSL advantages - easy to adjust lightness/saturation */
.primary-color { color: hsl(220, 100%, 50%); }
.primary-light { color: hsl(220, 100%, 70%); }
.primary-dark { color: hsl(220, 100%, 30%); }
```

### Current Color

```css
/* Using current color value */
.link {
    color: blue;
}

.link:hover {
    border-bottom: 2px solid currentColor;
}

.icon {
    color: inherit; /* Inherits color from parent */
}

/* Building on currentColor */
.button {
    color: white;
    border: 2px solid currentColor;
}

.button:hover {
    color: #f0f0f0;
    background-color: currentColor;
}
```

## Background Colors

### Basic Background Colors

```css
/* Element background colors */
body {
    background-color: #ffffff;
}

.header {
    background-color: #343a40;
    color: white;
}

.sidebar {
    background-color: #f8f9fa;
}

.card {
    background-color: white;
    border: 1px solid #dee2e6;
}

/* Transparent backgrounds */
.transparent {
    background-color: transparent;
}

/* Using currentColor for backgrounds */
.button {
    color: white;
    background-color: currentColor;
}
```

### Gradient Backgrounds

```css
/* Linear gradients */
.linear-gradient {
    background: linear-gradient(to right, #ff0000, #0000ff);
}

.linear-gradient-diagonal {
    background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
}

.linear-gradient-vertical {
    background: linear-gradient(to bottom, #ff0000, #0000ff);
}

.linear-gradient-with-stops {
    background: linear-gradient(to right, 
        #ff0000 0%, 
        #ff8000 25%, 
        #ffff00 50%, 
        #80ff00 75%, 
        #00ff00 100%);
}

/* Radial gradients */
.radial-gradient {
    background: radial-gradient(circle, #ff0000, #0000ff);
}

.radial-gradient-eccentric {
    background: radial-gradient(circle at top left, #ff0000, #0000ff);
}

.radial-gradient-farthest-corner {
    background: radial-gradient(circle farthest-corner at 50% 50%, #ff0000, #0000ff);
}
```

### Complex Gradient Patterns

```css
/* Multi-stop gradient */
.sunset {
    background: linear-gradient(135deg, 
        #ff6b6b 0%, 
        #feca57 25%, 
        #48dbfb 50%, 
        #ff9ff3 75%, 
        #54a0ff 100%);
}

/* Repeating gradient */
.repeating-linear {
    background: repeating-linear-gradient(
        45deg,
        #ff0000,
        #ff0000 10px,
        #ffffff 10px,
        #ffffff 20px
    );
}

.repeating-radial {
    background: repeating-radial-gradient(
        circle,
        #ff0000,
        #ff0000 10px,
        #ffffff 10px,
        #ffffff 20px
    );
}

/* Gradient with hard stops */
.hard-stops {
    background: linear-gradient(to right, 
        #ff0000 0, #ff0000 20px, 
        #ffffff 20px, #ffffff 40px);
}
```

## Background Images

### Basic Background Images

```css
/* Single background image */
.hero-section {
    background-image: url('hero-image.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 500px;
}

/* Background with fallback color */
.with-fallback {
    background-color: #f8f9fa; /* Fallback color */
    background-image: url('texture.png');
    background-size: 200px 200px;
    background-repeat: repeat;
}
```

### Multiple Background Images

```css
/* Multiple background layers */
.layered-background {
    background-image: 
        url('overlay.png'),
        url('pattern.png'),
        url('hero.jpg');
    background-size: 
        auto,
        200px 200px,
        cover;
    background-position: 
        center,
        top left,
        center;
    background-repeat: 
        no-repeat,
        repeat,
        no-repeat;
}

/* Gradient overlay on image */
.image-with-overlay {
    background: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('background.jpg');
    background-size: cover;
    background-position: center;
    color: white;
}
```

### Background Size

```css
/* Different background-size values */
.cover {
    background-size: cover; /* Scales to fill container, may crop */
}

.contain {
    background-size: contain; /* Scales to fit inside container, may show gaps */
}

.custom-size {
    background-size: 300px 200px; /* Fixed size */
}

.percentage-size {
    background-size: 50% 75%; /* Percentage of container */
}

.auto-size {
    background-size: auto; /* Default - keeps original proportions */
}

/* Multiple values for multiple backgrounds */
.multi-background-size {
    background-size: 
        100px 100px,
        cover,
        200px auto;
}
```

### Background Position

```css
/* Keywords */
.top-left { background-position: top left; }
.top-center { background-position: top center; }
.top-right { background-position: top right; }
.center-left { background-position: center left; }
.center-center { background-position: center center; }
.center-right { background-position: center right; }
.bottom-left { background-position: bottom left; }
.bottom-center { background-position: bottom center; }
.bottom-right { background-position: bottom right; }

/* Numeric values */
.pixel-position {
    background-position: 20px 30px;
}

.percentage-position {
    background-position: 50% 75%;
}

.mixed-position {
    background-position: 20px 50%;
}
```

### Background Attachment

```css
/* Scroll with page */
.scrolling {
    background-attachment: scroll; /* Default */
}

/* Fixed while page scrolls */
.fixed {
    background-attachment: fixed;
}

/* Scrolls with element content */
.local {
    background-attachment: local;
}

/* Multiple attachments for multiple backgrounds */
.multi-attachment {
    background-attachment: scroll, fixed, local;
}
```

## Advanced Background Techniques

### CSS Custom Properties with Colors

```css
:root {
    /* Color palette */
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --danger: #dc3545;
    --warning: #ffc107;
    --info: #17a2b8;
    --light: #f8f9fa;
    --dark: #343a40;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, var(--primary), #0056b3);
    --gradient-rainbow: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff);
    
    /* Shadows */
    --shadow-light: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 4px 8px rgba(0, 0, 0, 0.15);
    --shadow-heavy: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Using custom properties */
.btn-primary {
    background: var(--gradient-primary);
    box-shadow: var(--shadow-medium);
}

.card {
    background-color: white;
    box-shadow: var(--shadow-light);
}

.alert {
    padding: 1rem;
    border-radius: 0.375rem;
    margin-bottom: 1rem;
}

.alert-success {
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
}
```

### Responsive Backgrounds

```css
/* Mobile-first approach */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-size: cover;
    background-position: center;
    min-height: 60vh;
}

/* Adjust for larger screens */
@media (min-width: 768px) {
    .hero {
        min-height: 80vh;
        background-attachment: fixed;
    }
}

@media (min-width: 1024px) {
    .hero {
        min-height: 100vh;
    }
}
```

### Pattern Backgrounds

```css
/* Checkerboard pattern */
.checkerboard {
    background-image: 
        linear-gradient(45deg, #ccc 25%, transparent 25%), 
        linear-gradient(-45deg, #ccc 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, #ccc 75%), 
        linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

/* Dot pattern */
.dots {
    background-image: radial-gradient(circle, #ccc 1px, transparent 1px);
    background-size: 20px 20px;
}

/* Stripes */
.stripes {
    background-image: repeating-linear-gradient(
        45deg,
        #ccc,
        #ccc 10px,
        transparent 10px,
        transparent 20px
    );
}

/* Grid pattern */
.grid {
    background-image: 
        linear-gradient(#ccc 1px, transparent 1px),
        linear-gradient(90deg, #ccc 1px, transparent 1px);
    background-size: 20px 20px;
}
```

### Texture Effects

```css
/* Paper texture */
.paper-texture {
    background: 
        radial-gradient(circle at 20% 80%, rgba(120, 119, 118, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 119, 118, 0.2) 0%, transparent 50%);
    background-color: #f5f5f5;
}

/* Noise texture */
.noise-texture {
    background-color: #f0f0f0;
    position: relative;
}

.noise-texture::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIyLjUiIG51bU9jdGF2ZXM9IjIiIHJlcGVhdENvdW50PSIyMCIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz4KPC9zdmc+');
    opacity: 0.1;
}
```

### Background Clip and Origin

```css
/* Background origin */
.border-box-origin {
    background-origin: border-box;
    background-color: red;
    border: 10px solid transparent;
    padding: 20px;
    background-image: url('pattern.png');
}

.padding-box-origin {
    background-origin: padding-box;
    background-color: red;
    border: 10px solid transparent;
    padding: 20px;
    background-image: url('pattern.png');
}

.content-box-origin {
    background-origin: content-box;
    background-color: red;
    border: 10px solid transparent;
    padding: 20px;
    background-image: url('pattern.png');
}

/* Background clip */
.border-box-clip {
    background-clip: border-box;
    background-color: red;
    border: 10px dashed #333;
    padding: 20px;
}

.padding-box-clip {
    background-clip: padding-box;
    background-color: red;
    border: 10px dashed #333;
    padding: 20px;
}

.content-box-clip {
    background-clip: content-box;
    background-color: red;
    border: 10px dashed #333;
    padding: 20px;
}
```

## Color Schemes and Themes

### Dark Theme

```css
/* Dark theme colors */
:root {
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --bg-tertiary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --border-color: #404040;
    --accent-color: #bb86fc;
}

/* Apply dark theme */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-primary: #121212;
        --bg-secondary: #1e1e1e;
        --text-primary: #ffffff;
    }
    
    body {
        background-color: var(--bg-primary);
        color: var(--text-primary);
    }
}
```

### High Contrast Theme

```css
/* High contrast for accessibility */
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
}
```

### Reduced Motion and Colors

```css
/* Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
    .animated-gradient {
        animation: none;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
}
```

## Color Accessibility

### Color Contrast

```css
/* Ensure adequate contrast ratios */
.text-light-on-dark {
    color: #ffffff; /* White text */
    background-color: #000000; /* Black background */
    /* Contrast ratio: 21:1 (AAA compliant) */
}

.text-dark-on-light {
    color: #000000; /* Black text */
    background-color: #ffffff; /* White background */
    /* Contrast ratio: 21:1 (AAA compliant) */
}

/* Border for form validation instead of just color */
.form-control {
    border: 2px solid #ccc;
}

.form-control:focus {
    border-color: #007bff;
    outline: 0;
}

.form-control:invalid {
    border-color: #dc3545;
}

/* Add icons for color-blind users */
.success::before {
    content: "✓";
    color: #28a745;
    margin-right: 0.5rem;
}

.error::before {
    content: "✗";
    color: #dc3545;
    margin-right: 0.5rem;
}

.warning::before {
    content: "!";
    color: #ffc107;
    margin-right: 0.5rem;
}
```

### Color Blindness Considerations

```css
/* Don't rely solely on color to convey information */
.status-indicator {
    position: relative;
    padding-left: 1.5rem;
}

.status-indicator::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.status-success::before {
    background-color: #28a745;
    /* Add pattern for additional differentiation */
    background-image: radial-gradient(circle, white 30%, transparent 30%);
}

.status-error::before {
    background-color: #dc3545;
    /* Different pattern for error */
    background-image: repeating-linear-gradient(45deg, white 0, white 2px, transparent 2px, transparent 4px);
}

.status-warning::before {
    background-color: #ffc107;
    /* Triangle pattern for warning */
    background-image: conic-gradient(from 0deg, white 0 90deg, transparent 90deg 360deg);
}
```

## Color Tools and Utilities

### Color Manipulation Functions

```css
/* CSS Color Level 4 functions (modern browsers) */
:root {
    --base-color: #007bff;
    
    /* Lighten/darken using calc with hsl */
    --light-color: hsl(220, 100%, calc(50% + 20%));
    --dark-color: hsl(220, 100%, calc(50% - 20%));
    
    /* Mix colors */
    --mixed-color: color-mix(in srgb, #007bff 50%, #28a745 50%);
    
    /* Adjust opacity */
    --transparent-color: color-mix(in srgb, #007bff 80%, transparent);
}

/* Fallback for browsers without color-mix */
@supports not (color: color-mix(in srgb, red 50%, white 50%)) {
    .fallback {
        background-color: rgba(0, 123, 255, 0.8);
    }
}
```

### Color Utility Classes

```css
/* Text colors */
.text-primary { color: #007bff; }
.text-secondary { color: #6c757d; }
.text-success { color: #28a745; }
.text-danger { color: #dc3545; }
.text-warning { color: #ffc107; }
.text-info { color: #17a2b8; }
.text-light { color: #f8f9fa; }
.text-dark { color: #343a40; }
.text-muted { color: #6c757d; }
.text-white { color: #ffffff; }

/* Background colors */
.bg-primary { background-color: #007bff; }
.bg-secondary { background-color: #6c757d; }
.bg-success { background-color: #28a745; }
.bg-danger { background-color: #dc3545; }
.bg-warning { background-color: #ffc107; }
.bg-info { background-color: #17a2b8; }
.bg-light { background-color: #f8f9fa; }
.bg-dark { background-color: #343a40; }
.bg-white { background-color: #ffffff; }
.bg-transparent { background-color: transparent; }

/* Border colors */
.border-primary { border-color: #007bff; }
.border-secondary { border-color: #6c757d; }
.border-success { border-color: #28a745; }
.border-danger { border-color: #dc3545; }
.border-warning { border-color: #ffc107; }
.border-info { border-color: #17a2b8; }
.border-light { border-color: #f8f9fa; }
.border-dark { border-color: #343a40; }
.border-white { border-color: #ffffff; }
```

Mastering colors and backgrounds in CSS enables you to create visually stunning, accessible, and maintainable designs that work across all devices and user preferences.