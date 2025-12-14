# Box Model

The CSS box model describes how elements are structured and how space is calculated around HTML elements. Understanding the box model is fundamental to CSS layout and design.

## Box Model Overview

Every HTML element is essentially a rectangular box. The CSS box model consists of four parts:

1. **Content**: The actual content (text, images, etc.)
2. **Padding**: Space between content and border
3. **Border**: Surrounds the padding and content
4. **Margin**: Space outside the border

```css
/* Visual representation of the box model */
.box {
    /* Content area */
    width: 200px;
    height: 100px;
    
    /* Padding (inside border) */
    padding: 20px;
    
    /* Border (around padding) */
    border: 5px solid #333;
    
    /* Margin (outside border) */
    margin: 15px;
}
```

## Width and Height

### Content Box (Default)

```css
/* By default, width and height apply to content only */
.content-box {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 5px solid #333;
    margin: 10px;
    
    /* Total width = 300 + (20 × 2) + (5 × 2) + (10 × 2) = 370px */
    /* Total height = 200 + (20 × 2) + (5 × 2) + (10 × 2) = 270px */
}
```

### Border Box

```css
/* Width and height include padding and border */
.border-box {
    box-sizing: border-box;
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 5px solid #333;
    margin: 10px;
    
    /* Content area = 300 - (20 × 2) - (5 × 2) = 250px × 150px */
}
```

## Padding

### Padding Shorthand

```css
/* All sides */
.padding-all {
    padding: 20px;
}

/* Top and bottom | Left and right */
.padding-vertical-horizontal {
    padding: 10px 30px;
}

/* Top | Left and right | Bottom */
.padding-top-sides-bottom {
    padding: 15px 25px 20px;
}

/* Top | Right | Bottom | Left */
.padding-top-right-bottom-left {
    padding: 10px 20px 15px 25px;
}
```

### Individual Padding Properties

```css
.padding-individual {
    padding-top: 20px;
    padding-right: 30px;
    padding-bottom: 25px;
    padding-left: 40px;
}
```

### Padding Examples

```css
/* Button padding */
.btn {
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
}

/* Card content padding */
.card {
    background-color: white;
    border: 1px solid #dee2e6;
    border-radius: 0.375rem;
}

.card-body {
    padding: 1.5rem;
}

/* Form field padding */
.form-control {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}
```

## Margin

### Margin Shorthand

```css
/* All sides */
.margin-all {
    margin: 20px;
}

/* Top and bottom | Left and right */
.margin-vertical-horizontal {
    margin: 10px 30px;
}

/* Top | Left and right | Bottom */
.margin-top-sides-bottom {
    margin: 15px 25px 20px;
}

/* Top | Right | Bottom | Left */
.margin-top-right-bottom-left {
    margin: 10px 20px 15px 25px;
}
```

### Individual Margin Properties

```css
.margin-individual {
    margin-top: 20px;
    margin-right: 30px;
    margin-bottom: 25px;
    margin-left: 40px;
}
```

### Margin Collapse

```css
/* Adjacent vertical margins collapse */
.margin-example {
    margin-bottom: 30px;
}

.margin-example + .margin-example {
    margin-top: 20px; /* This collapses with the previous margin-bottom */
    /* Effective margin = max(30px, 20px) = 30px */
}

/* Prevent margin collapse */
.no-collapse {
    overflow: auto; /* or: overflow: hidden; or: display: flow-root; */
    margin-bottom: 30px;
}
```

### Margin Auto

```css
/* Center block elements horizontally */
.center-horizontal {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    /* Or shorthand: margin: 0 auto; */
}

/* Push element to right */
.push-right {
    margin-left: auto;
}

/* Push element to left */
.push-left {
    margin-right: auto;
}
```

### Margin Examples

```css
/* Paragraph spacing */
p {
    margin-bottom: 1rem;
}

p:last-child {
    margin-bottom: 0;
}

/* Section spacing */
.section {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

/* Heading spacing */
h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
}
```

## Border

### Border Shorthand

```css
/* All border properties */
.border-all {
    border: 2px solid #333;
}

/* Individual sides */
.border-sides {
    border-top: 1px solid #ccc;
    border-right: 2px solid #333;
    border-bottom: 1px solid #ccc;
    border-left: 2px solid #333;
}
```

### Border Styles

```css
.border-styles {
    border-style: solid;      /* solid, dashed, dotted, double, groove, ridge, inset, outset */
}

/* Individual border styles */
.border-individual {
    border-top-style: solid;
    border-right-style: dashed;
    border-bottom-style: dotted;
    border-left-style: double;
}
```

### Border Width

```css
.border-widths {
    border-width: 2px;        /* thin, medium, thick, or length values */
}

/* Individual border widths */
.border-individual-width {
    border-top-width: 1px;
    border-right-width: 2px;
    border-bottom-width: 3px;
    border-left-width: 4px;
}
```

### Border Color

```css
.border-colors {
    border-color: #333;       /* any color value */
}

/* Individual border colors */
.border-individual-colors {
    border-top-color: red;
    border-right-color: green;
    border-bottom-color: blue;
    border-left-color: orange;
}
```

### Border Examples

```css
/* Button border */
.btn {
    border: 1px solid #007bff;
    border-radius: 0.25rem;
}

.btn:hover {
    border-color: #0056b3;
}

/* Card border */
.card {
    border: 1px solid #dee2e6;
    border-radius: 0.375rem;
}

/* Input border */
.form-control {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}

.form-control:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* Rounded corners */
.rounded {
    border-radius: 4px;
}

.rounded-lg {
    border-radius: 8px;
}

.rounded-circle {
    border-radius: 50%;
}

.rounded-0 {
    border-radius: 0;
}
```

## Box Sizing

### Content Box (Default)

```css
.content-box-example {
    width: 200px;
    padding: 20px;
    border: 5px solid #333;
    margin: 10px;
    
    /* Total width = 200 + 40 + 10 + 20 = 270px */
    /* Content width = 200px */
    box-sizing: content-box; /* This is the default */
}
```

### Border Box

```css
.border-box-example {
    width: 200px;
    padding: 20px;
    border: 5px solid #333;
    margin: 10px;
    
    /* Total width = 200 + 20 = 220px (margin doesn't count) */
    /* Content width = 200 - 40 - 10 = 150px */
    box-sizing: border-box;
}
```

### Global Border Box

```css
/* Apply border-box to all elements */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Reset for specific elements if needed */
.reset-box-sizing {
    box-sizing: content-box;
}
```

## Display Properties

### Block Level Elements

```css
.block-element {
    display: block;
    /* Takes full width available */
    /* Starts on new line */
    /* Respects width, height, margin, padding */
}

/* Default block elements */
div, p, h1, h2, h3, h4, h5, h6, ul, ol, li, section, article, header, footer, nav {
    display: block;
}
```

### Inline Elements

```css
.inline-element {
    display: inline;
    /* Only takes content width */
    /* Flows with text */
    /* Ignores width and height */
    /* Only horizontal margins work */
}

/* Default inline elements */
span, a, strong, em, code, small, sub, sup {
    display: inline;
}
```

### Inline-Block Elements

```css
.inline-block-element {
    display: inline-block;
    /* Flows with text */
    /* Respects width, height, margin, padding */
    /* Can have vertical-align */
}

/* Creating a grid with inline-block */
.grid {
    font-size: 0; /* Remove whitespace between inline-block elements */
}

.grid-item {
    display: inline-block;
    width: 33.33%;
    font-size: 16px; /* Restore font size */
    vertical-align: top;
}
```

### Flex Container

```css
.flex-container {
    display: flex;
    /* Creates flex container */
    /* Children become flex items */
}

/* Flex container properties */
.flex-direction {
    display: flex;
    flex-direction: row;           /* row, row-reverse, column, column-reverse */
}

.flex-wrap {
    display: flex;
    flex-wrap: nowrap;             /* nowrap, wrap, wrap-reverse */
}

.justify-content {
    display: flex;
    justify-content: flex-start;   /* flex-start, flex-end, center, space-between, space-around, space-evenly */
}

.align-items {
    display: flex;
    align-items: stretch;          /* stretch, flex-start, flex-end, center, baseline */
}
```

### Grid Container

```css
.grid-container {
    display: grid;
    /* Creates grid container */
    /* Children become grid items */
}

/* Grid container properties */
.grid-template-columns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* or: repeat(3, 1fr) */
}

.grid-template-rows {
    display: grid;
    grid-template-rows: auto 1fr auto;
}

.gap {
    display: grid;
    gap: 20px;                     /* or: row-gap: 20px; column-gap: 20px; */
}
```

### None

```css
.hidden {
    display: none;
    /* Completely removes element from layout */
}

.invisible {
    visibility: hidden;
    /* Hides element but preserves space */
}
```

## Overflow

### Overflow Properties

```css
.overflow-visible {
    overflow: visible; /* Default - content extends outside box */
}

.overflow-hidden {
    overflow: hidden;  /* Clips content that overflows */
}

.overflow-scroll {
    overflow: scroll;  /* Always shows scrollbars */
}

.overflow-auto {
    overflow: auto;    /* Shows scrollbars only when needed */
}
```

### Individual Overflow Properties

```css
.overflow-individual {
    overflow-x: auto;  /* Horizontal overflow */
    overflow-y: hidden; /* Vertical overflow */
}
```

### Overflow Examples

```css
/* Fixed height container with scroll */
.scrollable-container {
    height: 300px;
    overflow-y: auto;
    border: 1px solid #ccc;
}

/* Text truncation */
.truncate-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* Use with display: block or inline-block */
}

/* Multi-line text truncation */
.multi-line-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Clear floats */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}
```

## Advanced Box Model Techniques

### CSS Custom Properties

```css
:root {
    --spacing-unit: 1rem;
    --border-radius: 0.25rem;
    --border-color: #dee2e6;
}

.component {
    padding: var(--spacing-unit);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
}
```

### Responsive Box Model

```css
.responsive-box {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
}

@media (min-width: 768px) {
    .responsive-box {
        padding: 2rem;
    }
}
```

### Aspect Ratio

```css
.aspect-ratio {
    aspect-ratio: 16 / 9; /* Modern browsers */
    /* Fallback for older browsers */
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 9/16 = 0.5625 = 56.25% */
}

.aspect-ratio > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

### Intrinsic Web Design

```css
/* Let content determine size */
.intrinsic-container {
    max-width: min(100% - 2rem, 65ch);
    margin: 0 auto;
    padding: 1rem;
}

/* Fluid spacing */
.fluid-spacing {
    padding: clamp(1rem, 4vw, 3rem);
    margin: clamp(0.5rem, 2vw, 2rem);
}
```

## Box Model Debugging

### Visual Debugging

```css
/* Show box boundaries for debugging */
.debug-boxes * {
    outline: 1px solid red;
}

/* Show padding */
.debug-padding {
    background: linear-gradient(to right, 
        transparent 0, transparent calc(100% - var(--padding, 0)), 
        rgba(255, 0, 0, 0.1) calc(100% - var(--padding, 0)), 
        rgba(255, 0, 0, 0.1) 100%);
}

/* Show margins */
.debug-margins {
    background: linear-gradient(to right, 
        rgba(0, 255, 0, 0.1) 0, rgba(0, 255, 0, 0.1) var(--margin, 0), 
        transparent var(--margin, 0), transparent 100%);
}
```

### Browser DevTools

```html
<!-- Use browser developer tools to inspect box model -->
<!-- Chrome: Right-click → Inspect → Computed tab -->
<!-- Firefox: Right-click → Inspect → Layout tab -->
```

## Common Box Model Patterns

### Center Content

```css
/* Center horizontally and vertically */
.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Alternative using grid */
.center-content-grid {
    display: grid;
    place-items: center;
    min-height: 100vh;
}
```

### Sticky Footer

```css
.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1;
}

footer {
    margin-top: auto;
}
```

### Equal Height Columns

```css
.equal-height {
    display: flex;
}

.equal-height > * {
    flex: 1;
}
```

### Aspect Ratio Boxes

```css
.aspect-ratio-box {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 ratio */
}

.aspect-ratio-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

The box model is the foundation of CSS layout. Mastering these concepts will help you create predictable, maintainable layouts and avoid common CSS pitfalls.