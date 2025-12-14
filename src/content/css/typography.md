# Typography

Typography is the art and technique of arranging type to make written language legible, readable, and visually appealing. CSS provides extensive controls for managing text appearance and layout.

## Font Families

### Font Stack Basics

```css
/* System font stack - uses fonts available on user's device */
.system-font {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                 'Helvetica Neue', Arial, sans-serif;
}

/* Serif font stack */
.serif-font {
    font-family: 'Georgia', 'Times New Roman', serif;
}

/* Monospace font stack */
.mono-font {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* Web fonts */
.web-font {
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
}
```

### Font Loading Strategy

```css
/* Link fonts in HTML head */
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

/* Use font-display to prevent FOIT (Flash of Invisible Text) */
.web-font-optimized {
    font-family: 'Inter', sans-serif;
    font-display: swap; /* Shows fallback font until web font loads */
}

/* Font loading with multiple weights */
.font-weights {
    font-family: 'Roboto', sans-serif;
    font-weight: 400; /* Regular */
}

.font-weights-bold {
    font-weight: 700; /* Bold */
}

.font-weights-light {
    font-weight: 300; /* Light */
}
```

### Custom Font Face

```css
/* Define custom font face */
@font-face {
    font-family: 'MyCustomFont';
    src: url('mycustomfont.woff2') format('woff2'),
         url('mycustomfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'MyCustomFont';
    src: url('mycustomfont-bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

/* Use custom font */
.custom-font {
    font-family: 'MyCustomFont', sans-serif;
}
```

## Font Properties

### Font Size

```css
/* Absolute sizes */
.xx-small { font-size: xx-small; }
.x-small { font-size: x-small; }
.small { font-size: small; }
.medium { font-size: medium; }
.large { font-size: large; }
.x-large { font-size: x-large; }
.xx-large { font-size: xx-large; }

/* Relative sizes */
.relative-smaller { font-size: smaller; }
.relative-larger { font-size: larger; }

/* Length values */
.pixel-size { font-size: 16px; }
.rem-size { font-size: 1rem; }
.em-size { font-size: 1.2em; }
.percentage-size { font-size: 120%; }

/* Viewport units for responsive typography */
.viewport-size {
    font-size: 4vw; /* 4% of viewport width */
}

.clamp-size {
    font-size: clamp(1rem, 4vw, 3rem);
    /* Minimum 1rem, preferred 4vw, maximum 3rem */
}
```

### Font Weight

```css
/* Numeric values */
.weight-100 { font-weight: 100; } /* Thin */
.weight-200 { font-weight: 200; } /* Extra Light */
.weight-300 { font-weight: 300; } /* Light */
.weight-400 { font-weight: 400; } /* Normal/Regular */
.weight-500 { font-weight: 500; } /* Medium */
.weight-600 { font-weight: 600; } /* Semi Bold */
.weight-700 { font-weight: 700; } /* Bold */
.weight-800 { font-weight: 800; } /* Extra Bold */
.weight-900 { font-weight: 900; } /* Black */

/* Named values */
.weight-normal { font-weight: normal; }
.weight-bold { font-weight: bold; }
.weight-lighter { font-weight: lighter; }
.weight-bolder { font-weight: bolder; }
```

### Font Style

```css
.normal-style { font-style: normal; }
.italic-style { font-style: italic; }
.oblique-style { font-style: oblique; }
.oblique-angle { font-style: oblique 15deg; } /* Custom angle */
```

### Font Variant

```css
/* Small caps */
.small-caps { font-variant: small-caps; }

/* Multiple font variants */
.font-features {
    font-variant: 
        small-caps,
        lining-nums,
        oldstyle-nums;
}

/* Modern font-feature-settings */
.fancy-ligatures {
    font-feature-settings: 'liga' 1, 'calt' 1;
    /* Enables discretionary ligatures and contextual alternates */
}

.tabular-nums {
    font-feature-settings: 'tnum' 1;
    /* Tabular numbers for aligned columns */
}
```

## Text Properties

### Text Color

```css
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

/* Using currentColor */
.link {
    color: blue;
}

.link:hover {
    border-bottom: 1px solid currentColor;
}
```

### Text Alignment

```css
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Start and end adapt to text direction */
.text-start { text-align: start; }
.text-end { text-align: end; }

/* Match parent direction */
.text-match-parent { text-align: match-parent; }
```

### Text Decoration

```css
/* Decoration line */
.no-decoration { text-decoration: none; }
.underline { text-decoration: underline; }
.overline { text-decoration: overline; }
.line-through { text-decoration: line-through; }

/* Decoration style */
.dashed-underline { 
    text-decoration: underline dashed; 
}

.wavy-underline { 
    text-decoration: underline wavy red; 
}

.double-underline { 
    text-decoration: underline double; 
}

/* Decoration color and thickness */
.colored-underline { 
    text-decoration: underline 2px solid #007bff; 
}

.thick-underline { 
    text-decoration: underline 4px; 
}
```

### Text Transform

```css
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
.full-width { text-transform: full-width; }
.none { text-transform: none; }

/* Custom text transformation using CSS */
.truncate-text {
    text-transform: uppercase;
    letter-spacing: 0.1em; /* Increase spacing after transformation */
}
```

### Text Indentation

```css
.indent {
    text-indent: 2em; /* Indent first line */
}

.negative-indent {
    text-indent: -1em; /* Hanging indent */
    margin-left: 1em; /* Compensate for negative indent */
}

/* Percentage based on parent width */
.indent-percentage {
    text-indent: 10%; /* 10% of parent width */
}
```

### Text Shadow

```css
/* Basic text shadow */
.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Multiple shadows */
.text-shadow-multiple {
    text-shadow: 
        1px 1px 2px rgba(0, 0, 0, 0.5),
        -1px -1px 2px rgba(255, 255, 255, 0.3);
}

/* Text shadow for readability */
.text-shadow-light {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.text-shadow-glow {
    text-shadow: 0 0 10px #007bff;
}

/* Inset text shadow */
.text-shadow-inset {
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.5);
}
```

### Letter Spacing

```css
.tight-spacing { letter-spacing: -0.05em; }
.normal-spacing { letter-spacing: normal; }
.loose-spacing { letter-spacing: 0.1em; }
.custom-spacing { letter-spacing: 0.05em; }

/* Tracking for all caps */
.uppercase-tracked {
    text-transform: uppercase;
    letter-spacing: 0.1em;
}
```

### Word Spacing

```css
.tight-word-spacing { word-spacing: -0.1em; }
.normal-word-spacing { word-spacing: normal; }
.loose-word-spacing { word-spacing: 0.2em; }
.custom-word-spacing { word-spacing: 0.15em; }
```

## Line Height and Spacing

### Line Height

```css
.line-height-normal { line-height: normal; }
.line-height-number { line-height: 1.5; }
.line-height-length { line-height: 24px; }
.line-height-percentage { line-height: 150%; }

/* Unitless line-height is preferred for scalability */
.unitless-line-height {
    line-height: 1.6; /* Adapts to font-size changes */
}

/* Tight line heights */
.tight-line-height {
    line-height: 1.2;
}

/* Loose line heights */
.loose-line-height {
    line-height: 2;
}
```

### Vertical Rhythm

```css
/* Establish vertical rhythm */
body {
    font-size: 16px;
    line-height: 1.6;
}

h1 { font-size: 2.5rem; line-height: 1.2; }
h2 { font-size: 2rem; line-height: 1.3; }
h3 { font-size: 1.75rem; line-height: 1.4; }
h4 { font-size: 1.5rem; line-height: 1.4; }
h5 { font-size: 1.25rem; line-height: 1.5; }
h6 { font-size: 1rem; line-height: 1.6; }

p {
    margin-bottom: 1.6em; /* Consistent spacing */
}
```

## Text Layout

### White Space Handling

```css
/* Normal white space */
.normal-whitespace { white-space: normal; }

/* Preserve white space and line breaks */
.pre-whitespace { 
    white-space: pre; 
}

/* Preserve white space, wrap at line breaks */
.pre-wrap-whitespace { 
    white-space: pre-wrap; 
}

/* Collapse white space, preserve line breaks */
.pre-line-whitespace { 
    white-space: pre-line; 
}

/* Collapse white space, no wrapping */
.nowrap-whitespace { 
    white-space: nowrap; 
}

/* Collapse sequences of white space */
.normal-collapse { 
    white-space: normal; 
}
```

### Word Wrapping

```css
/* Default word wrapping */
.normal-wrap { word-wrap: normal; }

/* Break long words */
.break-word { 
    word-wrap: break-word; 
    overflow-wrap: break-word;
}

/* Break anywhere */
.break-all { 
    overflow-wrap: break-word;
    word-break: break-all;
}

/* Keep words together */
.keep-words { 
    word-break: keep-all; 
}

/* Phrase-based breaking */
.phrase-break { 
    word-break: break-word; 
}
```

### Text Overflow

```css
/* Single line truncation */
.single-line-truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

/* Multi-line truncation */
.multi-line-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Number of lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Custom truncation character */
.custom-truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: '...';
}

/* Clip text */
.clip-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
}
```

## Responsive Typography

### Fluid Typography

```css
/* Using viewport units */
.fluid-typography {
    font-size: calc(1rem + 2vw);
    line-height: 1.4;
}

/* Using clamp() for better control */
.responsive-typography {
    font-size: clamp(1rem, 2.5vw, 2.5rem);
    line-height: 1.5;
}

/* Complex fluid scaling */
.scale-typography {
    font-size: clamp(
        0.875rem, 
        1vw + 0.5rem, 
        2rem
    );
}

/* Multiple scales */
h1 { font-size: clamp(2rem, 5vw, 4rem); }
h2 { font-size: clamp(1.75rem, 4vw, 3rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2.5rem); }
p { font-size: clamp(1rem, 2vw, 1.25rem); }
```

### Typography Scales

```css
/* Modular scale for consistent sizing */
:root {
    --scale-ratio: 1.25; /* Major third */
    --font-base: 1rem;
    --font-sm: calc(var(--font-base) / var(--scale-ratio));
    --font-lg: calc(var(--font-base) * var(--scale-ratio));
    --font-xl: calc(var(--font-lg) * var(--scale-ratio));
    --font-2xl: calc(var(--font-xl) * var(--scale-ratio));
    --font-3xl: calc(var(--font-2xl) * var(--scale-ratio));
}

.scale-small { font-size: var(--font-sm); }
.scale-base { font-size: var(--font-base); }
.scale-large { font-size: var(--font-lg); }
.scale-xl { font-size: var(--font-xl); }
.scale-2xl { font-size: var(--font-2xl); }
.scale-3xl { font-size: var(--font-3xl); }
```

## Font Loading and Performance

### Preload Critical Fonts

```html
<!-- Preload critical fonts -->
<link rel="preload" href="critical-font.woff2" as="font" type="font/woff2" crossorigin>

<!-- Preconnect to font CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Font Loading API

```css
/* Font loading with JavaScript integration */
@font-face {
    font-family: 'DynamicFont';
    src: url('dynamic-font.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

/* Show loading state */
.loading-font {
    font-family: 'DynamicFont', fallback, sans-serif;
}

/* Loaded font */
.loaded-font {
    font-family: 'DynamicFont', sans-serif;
}
```

### Variable Fonts

```css
/* Single font file with multiple variations */
.variable-font {
    font-family: 'Inter Variable', sans-serif;
    font-variation-settings: 
        'wght' 400,
        'slnt' 0,
        'ital' 0;
}

/* Multiple font variations */
.variable-light { font-variation-settings: 'wght' 300; }
.variable-regular { font-variation-settings: 'wght' 400; }
.variable-medium { font-variation-settings: 'wght' 500; }
.variable-bold { font-variation-settings: 'wght' 700; }

.variable-italic { 
    font-variation-settings: 
        'wght' 400,
        'ital' 1; 
}

.variable-slanted { 
    font-variation-settings: 
        'wght' 400,
        'slnt' -10; /* Slanted (not italic) */
}
```

## Accessibility and Typography

### Readable Font Sizes

```css
/* Minimum readable font size */
.minimum-size {
    font-size: 16px; /* Minimum for body text */
    line-height: 1.5; /* Adequate line spacing */
}

/* Scalable text */
.scalable-text {
    font-size: 1rem; /* Relative to root font size */
    line-height: 1.6;
}

/* Responsive minimum sizes */
@media (max-width: 480px) {
    .mobile-text {
        font-size: 14px; /* Slightly larger than default mobile browser text */
        line-height: 1.6;
    }
}
```

### High Contrast Typography

```css
/* Respect user preferences */
@media (prefers-contrast: high) {
    .text {
        color: black;
        background-color: white;
        text-decoration: underline;
    }
    
    .button {
        border: 2px solid black;
        background-color: white;
        color: black;
    }
}
```

### Reduced Motion Typography

```css
/* Disable text animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
    .animated-text {
        animation: none;
        transition: none;
    }
}
```

## Typography Utilities

### Text Alignment Utilities

```css
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }
.text-start { text-align: start; }
.text-end { text-align: end; }
```

### Text Transformation Utilities

```css
.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }
.text-normal-case { text-transform: none; }
```

### Font Size Utilities

```css
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.text-4xl { font-size: 2.25rem; }
.text-5xl { font-size: 3rem; }
```

### Font Weight Utilities

```css
.font-thin { font-weight: 100; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.font-black { font-weight: 900; }
```

### Line Height Utilities

```css
.leading-none { line-height: 1; }
.leading-tight { line-height: 1.25; }
.leading-snug { line-height: 1.375; }
.leading-normal { line-height: 1.5; }
.leading-relaxed { line-height: 1.625; }
.leading-loose { line-height: 2; }
```

### Text Color Utilities

```css
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
```

### Spacing Utilities

```css
.tracking-tighter { letter-spacing: -0.05em; }
.tracking-tight { letter-spacing: -0.025em; }
.tracking-normal { letter-spacing: 0; }
.tracking-wide { letter-spacing: 0.025em; }
.tracking-wider { letter-spacing: 0.05em; }
.tracking-widest { letter-spacing: 0.1em; }
```

## Best Practices

### Performance
1. **Use system fonts when possible**: Faster loading and better system integration
2. **Preload critical fonts**: Improve first contentful paint
3. **Use font-display: swap**: Prevent invisible text during font loading
4. **Limit font weights**: Each weight is a separate file
5. **Consider variable fonts**: Single file with multiple variations

### Readability
1. **Use adequate line height**: 1.4-1.6 for body text
2. **Maintain readable font sizes**: 16px minimum for body text
3. **Ensure sufficient contrast**: WCAG AA compliance (4.5:1 ratio)
4. **Use scalable units**: rem or em for better accessibility
5. **Limit line length**: 50-75 characters for optimal reading

### Accessibility
1. **Respect user preferences**: Use `prefers-reduced-motion`
2. **Support high contrast mode**: Ensure readability in all modes
3. **Use semantic HTML**: Proper heading hierarchy (h1-h6)
4. **Provide text alternatives**: For images and complex text
5. **Test with screen readers**: Ensure proper reading order

### Maintainability
1. **Establish a typography scale**: Consistent sizing system
2. **Use CSS custom properties**: For consistent color and spacing values
3. **Document font choices**: Include fallbacks and usage guidelines
4. **Organize typography CSS**: Separate files for different aspects
5. **Version control fonts**: Track changes to font files and settings

Effective typography enhances readability, accessibility, and user experience while maintaining performance and maintainability.