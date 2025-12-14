# Flexbox Layout

Flexbox (Flexible Box Layout) is a CSS layout method designed for one-dimensional layouts, either as rows or columns. It's perfect for distributing space and aligning items in a container.

## Flex Container (Parent)

### Basic Flex Container

```css
.flex-container {
    display: flex;
    /* Creates flex formatting context */
    /* Children become flex items */
}
```

### Flex Direction

```css
/* Row (default) - left to right */
.flex-row {
    display: flex;
    flex-direction: row;
}

/* Row-reverse - right to left */
.flex-row-reverse {
    display: flex;
    flex-direction: row-reverse;
}

/* Column - top to bottom */
.flex-column {
    display: flex;
    flex-direction: column;
}

/* Column-reverse - bottom to top */
.flex-column-reverse {
    display: flex;
    flex-direction: column-reverse;
}
```

### Flex Wrap

```css
/* No wrapping (default) */
.flex-nowrap {
    display: flex;
    flex-wrap: nowrap;
}

/* Wrap to next line */
.flex-wrap {
    display: flex;
    flex-wrap: wrap;
}

/* Wrap in reverse order */
.flex-wrap-reverse {
    display: flex;
    flex-wrap: wrap-reverse;
}
```

### Flex Flow (Shorthand)

```css
/* Shorthand for flex-direction and flex-wrap */
.flex-flow-row-wrap {
    display: flex;
    flex-flow: row wrap;
}

.flex-flow-column-nowrap {
    display: flex;
    flex-flow: column nowrap;
}

.flex-flow-row-reverse-wrap-reverse {
    display: flex;
    flex-flow: row-reverse wrap-reverse;
}
```

### Justify Content

```css
/* Align items along main axis */

/* Start (default) */
.justify-start {
    display: flex;
    justify-content: flex-start;
}

/* End */
.justify-end {
    display: flex;
    justify-content: flex-end;
}

/* Center */
.justify-center {
    display: flex;
    justify-content: center;
}

/* Space between items */
.justify-between {
    display: flex;
    justify-content: space-between;
}

/* Space around items */
.justify-around {
    display: flex;
    justify-content: space-around;
}

/* Space evenly */
.justify-evenly {
    display: flex;
    justify-content: space-evenly;
}
```

### Align Items

```css
/* Align items along cross axis */

/* Stretch (default) */
.align-stretch {
    display: flex;
    align-items: stretch;
}

/* Start */
.align-start {
    display: flex;
    align-items: flex-start;
}

/* End */
.align-end {
    display: flex;
    align-items: flex-end;
}

/* Center */
.align-center {
    display: flex;
    align-items: center;
}

/* Baseline (align text baselines) */
.align-baseline {
    display: flex;
    align-items: baseline;
}
```

### Align Content

```css
/* Align lines of items along cross axis (multi-line flex containers) */

/* Start */
.content-start {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}

/* End */
.content-end {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
}

/* Center */
.content-center {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}

/* Space between lines */
.content-between {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}

/* Space around lines */
.content-around {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
}

/* Stretch lines (default) */
.content-stretch {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
}
```

### Gap

```css
/* Space between flex items */

/* Single value */
.gap {
    display: flex;
    gap: 20px;
}

/* Row and column gap */
.gap-row-col {
    display: flex;
    row-gap: 20px;
    column-gap: 30px;
}

/* Shorthand */
.gap-shorthand {
    display: flex;
    gap: 20px 30px; /* row-gap column-gap */
}

/* Different spacing units */
.gap-rem {
    display: flex;
    gap: 2rem;
}

.gap-percentage {
    display: flex;
    gap: 5%;
}
```

## Flex Items (Children)

### Flex Grow

```css
/* Allow items to grow to fill available space */

/* No growth (default) */
.flex-grow-0 {
    flex-grow: 0;
}

/* Grow to fill space */
.flex-grow-1 {
    flex-grow: 1;
}

/* Different growth factors */
.flex-grow-2 {
    flex-grow: 2;
}

.flex-grow-3 {
    flex-grow: 3;
}

/* Example: Equal width columns */
.equal-columns {
    display: flex;
}

.equal-columns > * {
    flex-grow: 1;
}

/* Example: Two-thirds / one-third split */
.split-layout {
    display: flex;
}

.split-main {
    flex-grow: 2;
}

.split-sidebar {
    flex-grow: 1;
}
```

### Flex Shrink

```css
/* Allow items to shrink when space is limited */

/* No shrinking (default) */
.flex-shrink-0 {
    flex-shrink: 0;
}

/* Shrink to fit space */
.flex-shrink-1 {
    flex-shrink: 1;
}

/* Different shrink factors */
.flex-shrink-2 {
    flex-shrink: 2;
}

/* Example: Prevent images from shrinking */
.flex-image {
    flex-shrink: 0;
}
```

### Flex Basis

```css
/* Initial size before growing/shrinking */

/* Auto (default) - use item's width/height */
.basis-auto {
    flex-basis: auto;
}

/* Fixed size */
.basis-200px {
    flex-basis: 200px;
}

/* Percentage */
.basis-50 {
    flex-basis: 50%;
}

/* Content-based */
.basis-content {
    flex-basis: content;
}
```

### Flex (Shorthand)

```css
/* Shorthand: flex-grow flex-shrink flex-basis */

/* Grow: 1, Shrink: 1, Basis: 0 */
.flex-1 {
    flex: 1;
}

/* Grow: 0, Shrink: 1, Basis: 200px */
.flex-0-1-200px {
    flex: 0 1 200px;
}

/* Grow: 1, Shrink: 0, Basis: auto */
.flex-auto {
    flex: auto;
}

/* Grow: 0, Shrink: 0, Basis: 300px */
.flex-none {
    flex: none;
}

/* Grow: 1, Shrink: 0, Basis: 0 */
.flex-initial {
    flex: 1 0 0;
}
```

### Align Self

```css
/* Override container's align-items for individual items */

/* Auto (default) - use container's align-items */
.self-auto {
    align-self: auto;
}

/* Start */
.self-start {
    align-self: flex-start;
}

/* End */
.self-end {
    align-self: flex-end;
}

/* Center */
.self-center {
    align-self: center;
}

/* Stretch */
.self-stretch {
    align-self: stretch;
}

/* Baseline */
.self-baseline {
    align-self: baseline;
}

/* Example: Different alignment for items */
.flex-container {
    display: flex;
    height: 200px;
}

.item-top {
    align-self: flex-start;
}

.item-center {
    align-self: center;
}

.item-bottom {
    align-self: flex-end;
}
```

## Common Flexbox Patterns

### Centering Content

```css
/* Center horizontally and vertically */
.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Center only horizontally */
.center-horizontal {
    display: flex;
    justify-content: center;
}

/* Center only vertically */
.center-vertical {
    display: flex;
    align-items: center;
    min-height: 100vh;
}

/* Center within a container */
.center-in-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}
```

### Equal Height Columns

```css
/* Columns with equal height */
.equal-height-columns {
    display: flex;
}

.equal-height-columns > * {
    flex: 1;
    /* All items have same height */
}
```

### Navigation Bar

```css
/* Horizontal navigation */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 0 1rem;
    color: white;
}

.navbar-brand {
    font-weight: bold;
}

.navbar-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar-nav li {
    margin-left: 1rem;
}

/* Responsive navigation */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: stretch;
    }
    
    .navbar-nav {
        flex-direction: column;
        margin-top: 1rem;
    }
}
```

### Card Layout

```css
/* Responsive card grid */
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px; /* Grow, shrink, basis */
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    background-color: white;
}

/* Alternative with fixed columns */
.card-grid {
    display: flex;
    flex-wrap: wrap;
}

.card-fixed {
    flex: 0 0 300px; /* No growth, no shrink, fixed width */
    margin: 0.5rem;
}
```

### Form Layout

```css
/* Horizontal form layout */
.form-row {
    display: flex;
    margin-bottom: 1rem;
}

.form-label {
    flex: 0 0 120px; /* Fixed width for labels */
    padding: 0.5rem 0;
}

.form-input {
    flex: 1; /* Grow to fill space */
    padding: 0.5rem;
    border: 1px solid #ccc;
}

/* Stacked form on mobile */
@media (max-width: 600px) {
    .form-row {
        flex-direction: column;
    }
    
    .form-label {
        flex: none;
        margin-bottom: 0.25rem;
    }
}
```

### Sidebar Layout

```css
/* Main content with sidebar */
.layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    flex: 0 0 250px; /* Fixed width sidebar */
    background-color: #f8f9fa;
    padding: 1rem;
}

.main-content {
    flex: 1; /* Grow to fill remaining space */
    padding: 1rem;
}

/* Responsive sidebar */
@media (max-width: 768px) {
    .layout {
        flex-direction: column;
    }
    
    .sidebar {
        flex: none;
        order: 2; /* Move sidebar below content */
    }
    
    .main-content {
        order: 1; /* Content first on mobile */
    }
}
```

### Sticky Footer

```css
/* Push footer to bottom */
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1; /* Grow to push footer down */
    padding: 1rem;
}

footer {
    margin-top: auto;
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}
```

## Advanced Flexbox Techniques

### Order Control

```css
/* Change visual order of items */

/* Original order */
.item-1 { order: 1; }
.item-2 { order: 2; }
.item-3 { order: 3; }

/* Reverse order */
.item-1 { order: 3; }
.item-2 { order: 2; }
.item-3 { order: 1; }

/* Mobile-first: different order on mobile */
@media (max-width: 768px) {
    .mobile-first {
        flex-direction: column;
    }
    
    .sidebar-mobile {
        order: -1; /* Show first on mobile */
    }
}
```

### Percentage-Based Layouts

```css
/* Two-column layout with percentages */
.two-column {
    display: flex;
}

.column-60 {
    flex: 0 0 60%;
}

.column-40 {
    flex: 0 0 40%;
}

/* Three equal columns */
.three-column {
    display: flex;
}

.three-column > * {
    flex: 1;
}

/* Responsive three-column */
@media (max-width: 768px) {
    .three-column {
        flex-direction: column;
    }
}
```

### Flexbox with Wrapping

```css
/* Image gallery with wrapping */
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.gallery-item {
    flex: 1 1 200px; /* Minimum 200px, grow to fit */
    aspect-ratio: 1; /* Square images */
    overflow: hidden;
    border-radius: 8px;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Tag cloud */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    padding: 0.25rem 0.5rem;
    background-color: #e9ecef;
    border-radius: 1rem;
    font-size: 0.875rem;
}
```

### Flexbox with Absolute Positioning

```css
/* Overlay content using flexbox for alignment */
.overlay-container {
    position: relative;
    background-image: url('background.jpg');
    background-size: cover;
    background-position: center;
    height: 400px;
}

.overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
}
```

## Flexbox vs Grid

### When to Use Flexbox

```css
/* Use flexbox for: */

/* 1. One-dimensional layouts */
.navigation {
    display: flex;
    justify-content: space-between;
}

/* 2. Centering content */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 3. Equal height columns */
.columns {
    display: flex;
}

.columns > * {
    flex: 1;
}

/* 4. Distributing space */
.distribute-space {
    display: flex;
    justify-content: space-between;
}
```

### When to Use Grid

```css
/* Use grid for: */

/* 1. Two-dimensional layouts */
.grid-layout {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
}

/* 2. Complex layouts */
.complex-layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
}
```

## Flexbox Debugging

### Visual Debugging

```css
/* Add borders to see flex items */
.debug-flex * {
    border: 1px solid red;
}

/* Show flex container */
.debug-container {
    border: 2px solid blue;
    background-color: rgba(0, 0, 255, 0.1);
}

/* Highlight gaps */
.debug-gap {
    background: linear-gradient(
        to right,
        transparent 0,
        transparent calc(50% - 0.5px),
        rgba(255, 0, 0, 0.5) calc(50% - 0.5px),
        rgba(255, 0, 0, 0.5) calc(50% + 0.5px),
        transparent calc(50% + 0.5px)
    );
}
```

### Common Issues

```css
/* Issue: Items not wrapping */
/* Solution: Add flex-wrap */
.container {
    display: flex;
    flex-wrap: wrap; /* or wrap-reverse */
}

/* Issue: Container not growing */
/* Solution: Set min-height */
.container {
    display: flex;
    min-height: 100vh; /* or other height */
}

/* Issue: Items not equal height */
/* Solution: Use flex properties */
.items {
    display: flex;
}

.items > * {
    flex: 1; /* Equal growth */
}

/* Issue: Overflow on small screens */
/* Solution: Use responsive units */
.container {
    display: flex;
    gap: clamp(1rem, 5vw, 3rem);
}
```

## Performance Considerations

### Efficient Flexbox

```css
/* Avoid unnecessary re-flows */
.optimized-flex {
    display: flex;
    /* Use will-change sparingly */
    will-change: transform; /* Only if animating */
}

/* Use contain for isolation */
.flex-container {
    contain: layout style;
}
```

### Browser Support

```css
/* Autoprefixer will add vendor prefixes */
/* But here's the basic support: */

.flex-container {
    display: -webkit-box; /* Old Safari */
    display: -ms-flexbox; /* IE 10 */
    display: flex; /* Modern browsers */
}

/* Fallback for very old browsers */
.no-flexbox {
    display: block;
}

.flex-container {
    display: flex;
}

@supports not (display: flex) {
    .flex-container {
        display: block;
    }
    
    .flex-container > * {
        display: inline-block;
        vertical-align: top;
        width: 48%;
    }
}
```

Flexbox is ideal for one-dimensional layouts, component-level alignment, and responsive designs. Master these patterns to create flexible, maintainable layouts that adapt to different screen sizes and content requirements.