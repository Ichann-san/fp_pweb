# CSS Grid

CSS Grid Layout is a two-dimensional layout system that allows you to work with both rows and columns simultaneously. It's perfect for creating complex, responsive layouts.

## Grid Container (Parent)

### Basic Grid Container

```css
.grid-container {
    display: grid;
    /* Creates grid formatting context */
    /* Children become grid items */
}
```

### Grid Template Columns

```css
/* Fixed column widths */
.columns-fixed {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}

/* Flexible columns using fr units */
.columns-fr {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}

/* Mixed units */
.columns-mixed {
    display: grid;
    grid-template-columns: 200px 1fr 300px;
}

/* Repeat function */
.columns-repeat {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.columns-repeat-auto {
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
}

/* Auto-fill vs auto-fit */
.auto-fill {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.auto-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### Grid Template Rows

```css
/* Fixed row heights */
.rows-fixed {
    display: grid;
    grid-template-rows: 100px 100px 100px;
}

/* Flexible rows using fr units */
.rows-fr {
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
}

/* Auto rows */
.rows-auto {
    display: grid;
    grid-template-rows: auto 1fr auto;
}

/* Repeat function */
.rows-repeat {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
}
```

### Grid Template Areas

```css
/* Named grid areas */
.layout-areas {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}

.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}

.aside {
    grid-area: aside;
}

.footer {
    grid-area: footer;
}

/* Complex layout */
.complex-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "nav nav"
        "sidebar content"
        "footer footer";
}

.navigation {
    grid-area: nav;
}

.sidebar-content {
    grid-area: sidebar;
}

.main-content {
    grid-area: content;
}

.page-footer {
    grid-area: footer;
}
```

### Gap

```css
/* Grid gaps */
.gap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; /* Row and column gap */
}

.row-col-gap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 30px;
}

.gap-shorthand {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 30px; /* row-gap column-gap */
}

/* Different units */
.gap-rem {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.gap-percentage {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5%;
}
```

### Implicit vs Explicit Grid

```css
/* Explicit grid (defined sizes) */
.explicit-grid {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 100px 100px;
}

/* Implicit grid (auto-generated) */
.implicit-grid {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 100px;
    /* Additional rows will be auto-generated */
}

/* Control implicit grid */
.implicit-grid-rows {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px; /* Height for implicit rows */
    grid-auto-flow: row; /* or column, dense */
}

.implicit-grid-columns {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-auto-columns: 200px; /* Width for implicit columns */
    grid-auto-flow: column;
}
```

## Grid Items (Children)

### Grid Column Start/End

```css
/* Place items by column lines */
.item-start-1 {
    grid-column-start: 1;
    grid-column-end: 3; /* Span 2 columns */
}

.item-start-2 {
    grid-column-start: 3;
    grid-column-end: 5;
}

/* Shorthand */
.item-span {
    grid-column: 1 / 3; /* Start at line 1, end at line 3 */
}

.item-span-shorthand {
    grid-column: 2 / span 2; /* Start at line 2, span 2 columns */
}

.item-span-single {
    grid-column: 2; /* Start at line 2, end at line 3 */
}
```

### Grid Row Start/End

```css
/* Place items by row lines */
.item-row {
    grid-row-start: 1;
    grid-row-end: 3; /* Span 2 rows */
}

/* Shorthand */
.item-row-shorthand {
    grid-row: 1 / 3; /* Start at line 1, end at line 3 */
}

.item-row-span {
    grid-row: 2 / span 2; /* Start at line 2, span 2 rows */
}
```

### Grid Area

```css
/* Place item in named area */
.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}

.footer {
    grid-area: footer;
}

/* Place item using line numbers */
.specific-placement {
    grid-area: 1 / 1 / 3 / 3; /* row-start / column-start / row-end / column-end */
}
```

### Grid Line Names

```css
/* Named grid lines */
.named-lines {
    display: grid;
    grid-template-columns: 
        [sidebar-start] 200px 
        [sidebar-end main-start] 1fr 
        [main-end];
    grid-template-rows: 
        [header-start] auto 
        [header-end content-start] 1fr 
        [content-end footer-start] auto 
        [footer-end];
}

.header-named {
    grid-column: sidebar-start / main-end;
    grid-row: header-start / header-end;
}

.sidebar-named {
    grid-column: sidebar-start / sidebar-end;
    grid-row: header-end / footer-start;
}

.main-named {
    grid-column: main-start / main-end;
    grid-row: content-start / content-end;
}

.footer-named {
    grid-column: sidebar-start / main-end;
    grid-row: footer-start / footer-end;
}
```

## Grid Sizing Functions

### Minmax()

```css
/* Use minmax for flexible sizing */
.minmax-columns {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) 2fr minmax(200px, 1fr);
}

/* Responsive columns */
.responsive-columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Fixed minimum, flexible maximum */
.flexible-columns {
    display: grid;
    grid-template-columns: minmax(150px, 300px) 1fr;
}
```

### Fit-Content()

```css
/* Fit content with maximum size */
.fit-content {
    display: grid;
    grid-template-columns: fit-content(200px) 1fr 100px;
}

/* Auto-fit vs auto-fill with fit-content */
.fit-auto {
    display: grid;
    grid-template-columns: repeat(auto-fit, fit-content(200px));
}
```

## Grid Placement Patterns

### Holy Grail Layout

```css
.holy-grail {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header header header"
        "sidebar content aside"
        "footer footer footer";
    min-height: 100vh;
}

.holy-grail .header { grid-area: header; }
.holy-grail .sidebar { grid-area: sidebar; }
.holy-grail .content { grid-area: content; }
.holy-grail .aside { grid-area: aside; }
.holy-grail .footer { grid-area: footer; }

/* Mobile responsive */
@media (max-width: 768px) {
    .holy-grail {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "header"
            "content"
            "sidebar"
            "aside"
            "footer";
    }
}
```

### Magazine Layout

```css
.magazine-layout {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 2rem;
}

.magazine-header {
    grid-column: 1 / -1; /* Span all columns */
    text-align: center;
}

.featured-article {
    grid-column: 2;
    grid-row: 2;
}

.sidebar-articles {
    display: grid;
    gap: 1rem;
}

.article-1 { grid-row: 2; }
.article-2 { grid-row: 3; }
.article-3 { grid-row: 4; }

.magazine-footer {
    grid-column: 1 / -1;
    text-align: center;
}
```

### Card Grid

```css
/* Responsive card grid */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.card-header {
    height: 200px;
    background-size: cover;
    background-position: center;
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
}

/* Different card sizes */
.card-large {
    grid-column: span 2;
    grid-row: span 2;
}

.card-wide {
    grid-column: span 2;
}

/* Using grid areas for complex layouts */
.card-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
    gap: 1rem;
}

.card-featured {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}

.card-sidebar {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
}

.card-normal:nth-child(1) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
}

.card-normal:nth-child(2) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
}

/* Auto-placement with specific order */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.featured-card {
    grid-column: span 2;
}
```

## Advanced Grid Techniques

### Subgrid

```css
/* Subgrid (CSS Grid Level 2) */
.parent-grid {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 2rem;
}

.child-grid {
    display: grid;
    grid-template-columns: subgrid; /* Inherit from parent */
    grid-column: 2; /* Place in second column */
    grid-template-rows: repeat(3, auto);
}
```

### Masonry Layout

```css
/* CSS Grid Masonry (experimental) */
.masonry {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 20px; /* Base row height */
    gap: 1rem;
}

.masonry-item {
    /* Auto-placement with masonry */
    grid-row-end: span 5; /* Each item spans different number of rows */
}

/* Fallback using JavaScript or flexbox */
.masonry-fallback {
    display: flex;
    flex-wrap: wrap;
    column-count: 4;
    column-gap: 1rem;
}

.masonry-item {
    break-inside: avoid;
    margin-bottom: 1rem;
    width: calc(25% - 0.75rem);
}
```

### Overlapping Items

```css
/* Overlapping grid items */
.overlap-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 400px;
}

.overlap-background {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    z-index: 1;
}

.overlap-content {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    color: white;
    text-align: center;
}

.overlap-overlay {
    grid-column: 2;
    grid-row: 2;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    z-index: 3;
}
```

### Grid with Media Queries

```css
/* Responsive grid layouts */
.responsive-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .responsive-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .responsive-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Large desktop */
@media (min-width: 1440px) {
    .responsive-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

## Grid Utilities

### Gap Utilities

```css
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-5 { gap: 1.25rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }
.gap-10 { gap: 2.5rem; }
.gap-12 { gap: 3rem; }
.gap-16 { gap: 4rem; }

.gap-x-2 { column-gap: 0.5rem; }
.gap-y-2 { row-gap: 0.5rem; }
```

### Column Utilities

```css
.cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

.col-span-1 { grid-column: span 1 / span 1; }
.col-span-2 { grid-column: span 2 / span 2; }
.col-span-3 { grid-column: span 3 / span 3; }
.col-span-4 { grid-column: span 4 / span 4; }
.col-span-5 { grid-column: span 5 / span 5; }
.col-span-6 { grid-column: span 6 / span 6; }
.col-span-full { grid-column: 1 / -1; }
```

### Row Utilities

```css
.rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr)); }
.rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr)); }
.rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr)); }
.rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr)); }
.rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr)); }
.rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr)); }

.row-span-1 { grid-row: span 1 / span 1; }
.row-span-2 { grid-row: span 2 / span 2; }
.row-span-3 { grid-row: span 3 / span 3; }
.row-span-4 { grid-row: span 4 / span 4; }
.row-span-5 { grid-row: span 5 / span 5; }
.row-span-6 { grid-row: span 6 / span 6; }
.row-span-full { grid-row: 1 / -1; }
```

## Grid vs Flexbox

### When to Use Grid

```css
/* Use Grid for: */

/* 1. Two-dimensional layouts */
.layout-2d {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
}

/* 2. Complex page layouts */
.page-layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}

/* 3. Magazine-style layouts */
.magazine {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
}
```

### When to Use Flexbox

```css
/* Use Flexbox for: */

/* 1. One-dimensional layouts */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* 2. Centering content */
.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 3. Distributing space */
.distribute {
    display: flex;
    justify-content: space-around;
}

/* 4. Component layouts */
.card-content {
    display: flex;
    flex-direction: column;
}
```

## Grid Performance

### Efficient Grid Usage

```css
/* Avoid unnecessary grid recalculations */
.efficient-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Use contain for better performance */
    contain: layout style;
}

/* Use CSS containment */
.contained-grid {
    display: grid;
    contain: layout;
    /* Isolates layout calculations */
}

/* Avoid complex calculations in grid properties */
.simple-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* Simple fractions */
}

.complex-grid {
    display: grid;
    grid-template-columns: 
        minmax(100px, calc(50% - 1rem)) 
        minmax(200px, calc(50% - 1rem)); /* More complex */
}
```

### Browser Support

```css
/* Modern browsers support */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

/* Fallback using flexbox */
.no-grid {
    display: flex;
}

.no-grid > * {
    flex: 1;
}

/* Feature query */
@supports (display: grid) {
    .grid-container {
        display: grid;
    }
}

@supports not (display: grid) {
    .grid-container {
        display: flex;
        flex-wrap: wrap;
    }
    
    .grid-container > * {
        flex: 1 1 300px; /* Flexible items */
        margin: 0.5rem;
    }
}
```

## Grid Debugging

### Visual Debugging

```css
/* Show grid lines */
.debug-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-image: 
        linear-gradient(to right, rgba(0, 0, 255, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 255, 0.1) 1px, transparent 1px);
    background-size: 100px 100px;
}

/* Highlight grid items */
.debug-item {
    background: rgba(255, 0, 0, 0.2);
    border: 2px solid red;
}

/* Show grid areas */
.debug-areas {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    background-image: 
        linear-gradient(to right, 
            transparent calc(33.33% - 1px), 
            rgba(255, 0, 0, 0.5) calc(33.33% - 1px), 
            rgba(255, 0, 0, 0.5) calc(33.33% + 1px), 
            transparent calc(33.33% + 1px)),
        linear-gradient(to bottom, 
            transparent calc(33.33% - 1px), 
            rgba(255, 0, 0, 0.5) calc(33.33% - 1px), 
            rgba(255, 0, 0, 0.5) calc(33.33% + 1px), 
            transparent calc(33.33% + 1px));
}
```

CSS Grid is the most powerful layout system available in CSS. It's perfect for complex two-dimensional layouts, responsive designs, and when you need precise control over both rows and columns. Combine it with Flexbox for the ultimate layout toolkit.