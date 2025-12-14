# Selectors & Specificity

CSS selectors are patterns used to select and style HTML elements. Understanding selectors and specificity is fundamental to writing effective CSS.

## Basic Selectors

### Type Selectors

```css
/* Select all paragraph elements */
p {
    color: #333;
    font-size: 16px;
}

/* Select all heading elements */
h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin-bottom: 1rem;
}

/* Select all div elements */
div {
    box-sizing: border-box;
}
```

### Class Selectors

```css
/* Select all elements with class "btn" */
.btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
}

/* Select elements with multiple classes */
.btn.primary.large {
    font-size: 18px;
    padding: 15px 30px;
}

/* Select specific element with class */
button.btn {
    cursor: pointer;
}
```

### ID Selectors

```css
/* Select element with id "header" */
#header {
    background-color: #333;
    color: white;
    padding: 20px;
}

/* ID selectors should be used sparingly */
#main-content {
    max-width: 1200px;
    margin: 0 auto;
}
```

### Universal Selector

```css
/* Select all elements */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Select all elements inside a container */
.container * {
    font-family: Arial, sans-serif;
}
```

## Attribute Selectors

### Basic Attribute Selectors

```css
/* Select elements with specific attribute */
[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Select elements with specific attribute value */
[type="email"] {
    border: 2px solid #007bff;
}

/* Select elements with attribute containing value */
[class*="btn"] {
    display: inline-block;
}

/* Select elements with attribute starting with value */
[class^="btn-"] {
    text-transform: uppercase;
}

/* Select elements with attribute ending with value */
[class$="-primary"] {
    background-color: #007bff;
}
```

### Advanced Attribute Selectors

```css
/* Select links that open in new tabs */
a[target="_blank"] {
    position: relative;
}

a[target="_blank"]::after {
    content: "↗";
    margin-left: 4px;
}

/* Select required form fields */
input[required] {
    border-left: 4px solid #dc3545;
}

/* Select input fields with valid values */
input:valid {
    border-left-color: #28a745;
}

input:invalid {
    border-left-color: #dc3545;
}

/* Select links to external websites */
a[href^="http"]:not([href*="mysite.com"]) {
    color: #007bff;
    text-decoration: underline;
}
```

## Pseudo-Classes

### Link Pseudo-Classes

```css
/* Unvisited link */
a:link {
    color: #007bff;
}

/* Visited link */
a:visited {
    color: #6f42c1;
}

/* Mouse hover */
a:hover {
    color: #0056b3;
    text-decoration: underline;
}

/* Active link (when being clicked) */
a:active {
    color: #dc3545;
}
```

### Form Pseudo-Classes

```css
/* Focus state */
input:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}

/* Required fields */
input:required {
    border-left: 4px solid #007bff;
}

/* Optional fields */
input:optional {
    border-left: 4px solid #6c757d;
}

/* Checked checkboxes and radio buttons */
input:checked {
    accent-color: #007bff;
}

/* Disabled elements */
input:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
}

/* Enabled elements */
input:enabled {
    background-color: white;
}
```

### Structural Pseudo-Classes

```css
/* First child */
li:first-child {
    margin-top: 0;
}

/* Last child */
li:last-child {
    margin-bottom: 0;
}

/* Only child */
p:only-child {
    margin: 0;
}

/* nth-child */
li:nth-child(odd) {
    background-color: #f8f9fa;
}

li:nth-child(even) {
    background-color: #ffffff;
}

/* nth-last-child */
li:nth-last-child(2) {
    font-weight: bold;
}

/* First of type */
h2:first-of-type {
    margin-top: 0;
}

/* Last of type */
p:last-of-type {
    margin-bottom: 0;
}

/* nth-of-type */
p:nth-of-type(2n) {
    font-style: italic;
}

/* Only of type */
em:only-of-type {
    color: #007bff;
}
```

### User Action Pseudo-Classes

```css
/* Hover state */
button:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
}

/* Focus state for accessibility */
button:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}

/* Active state */
button:active {
    transform: translateY(0);
}

/* Focus-visible (modern browsers) */
button:focus-visible {
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}
```

## Pseudo-Elements

### Text Pseudo-Elements

```css
/* First line of text */
p::first-line {
    font-weight: bold;
    text-transform: uppercase;
}

/* First letter */
p::first-letter {
    font-size: 2em;
    float: left;
    margin: 0.1em 0.1em 0 0;
}

/* Selection */
::selection {
    background-color: #007bff;
    color: white;
}

/* Placeholder */
input::placeholder {
    color: #6c757d;
    opacity: 1;
}
```

### Generated Content

```css
/* Add content before element */
h2::before {
    content: "📌 ";
    margin-right: 0.5em;
}

/* Add content after element */
a[href^="http"]::after {
    content: " ↗";
    font-size: 0.8em;
}

/* Clearfix using pseudo-elements */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Custom bullet points */
ul.custom-list li::before {
    content: "▶";
    color: #007bff;
    margin-right: 0.5em;
}
```

## Combinators

### Descendant Combinator

```css
/* Select all paragraphs inside divs */
div p {
    margin-bottom: 1rem;
}

/* Select all links inside navigation */
nav a {
    text-decoration: none;
    padding: 0.5rem 1rem;
}

/* Specific descendant */
.main-content article h2 {
    color: #333;
}
```

### Child Combinator

```css
/* Select direct children only */
ul > li {
    list-style-type: none;
}

/* Select direct child paragraphs */
.container > p {
    background-color: #f8f9fa;
}

/* First level navigation items only */
nav > ul > li {
    display: inline-block;
}
```

### Adjacent Sibling Combinator

```css
/* Paragraph immediately following h2 */
h2 + p {
    margin-top: 0.5rem;
    font-style: italic;
}

/* Input immediately following label */
label + input {
    margin-left: 0.5rem;
}

/* Remove margin from first heading */
h1 + h2 {
    margin-top: 0;
}
```

### General Sibling Combinator

```css
/* All paragraphs following h2 (not just the first) */
h2 ~ p {
    color: #666;
    line-height: 1.6;
}

/* All inputs following error message */
.error-message ~ input {
    border-color: #dc3545;
}

/* All sections following the first section */
section:first-of-type ~ section {
    margin-top: 2rem;
}
```

## Grouping Selectors

### Selector Lists

```css
/* Group multiple selectors */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    margin-bottom: 1rem;
}

/* Group with different properties */
.btn, .card, .modal {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Complex grouping */
header nav a,
footer nav a,
.sidebar nav a {
    text-decoration: none;
    padding: 0.5rem 1rem;
}
```

## Specificity

### Understanding Specificity

Specificity determines which CSS rule wins when multiple rules target the same element. The specificity is calculated based on:

1. **Inline styles** (1,0,0,0)
2. **IDs** (0,1,0,0)
3. **Classes, attributes, and pseudo-classes** (0,0,1,0)
4. **Elements and pseudo-elements** (0,0,0,1)

### Specificity Examples

```css
/* Specificity: 0,0,0,1 */
p {
    color: red;
}

/* Specificity: 0,0,1,0 */
.my-class {
    color: blue;
}

/* Specificity: 0,1,0,0 */
#my-id {
    color: green;
}

/* Specificity: 0,0,1,1 */
p.my-class {
    color: purple;
}

/* Specificity: 0,0,2,0 */
.my-class.another-class {
    color: orange;
}

/* Specificity: 0,1,1,0 */
#my-id.my-class {
    color: pink;
}

/* Specificity: 0,0,0,2 */
p::first-letter {
    color: brown;
}
```

### Managing Specificity

```css
/* Bad: Using IDs for styling (high specificity) */
#header {
    background-color: #333; /* Specificity: 0,1,0,0 */
}

/* Better: Use classes */
.header {
    background-color: #333; /* Specificity: 0,0,1,0 */
}

/* Avoid overly specific selectors */
.main-content .container .card .title {
    color: red; /* Specificity: 0,0,4,0 - too specific */
}

/* Better: Simplify */
.card-title {
    color: red; /* Specificity: 0,0,1,0 */
}

/* Use :not() to increase specificity strategically */
.input:not(.error) {
    border-color: #007bff; /* Specificity: 0,0,2,0 */
}
```

## Modern CSS Selectors

### :is() Pseudo-Class

```css
/* Instead of: */
header h1, header h2, header h3, header h4, header h5, header h6 {
    margin: 0;
}

/* Use: */
header :is(h1, h2, h3, h4, h5, h6) {
    margin: 0;
}

/* Complex grouping */
:is(header, main, footer) nav a {
    text-decoration: none;
}
```

### :where() Pseudo-Class

```css
/* :where() has zero specificity */
:where(header, main, footer) nav a {
    color: #007bff;
}

/* Specificity is 0,0,0,0 regardless of selector count */
:where(.btn, .card, .modal) {
    border-radius: 8px;
}
```

### :has() Pseudo-Class (Parent Selector)

```css
/* Select form that has required input */
form:has(input[required]) {
    border: 2px solid #007bff;
}

/* Select card that has an image */
.card:has(img) {
    padding: 0;
}

/* Select navigation item that has active link */
nav li:has(a.active) {
    background-color: #007bff;
}

/* Select parent of hovered link */
a:has(+ :hover) {
    color: #007bff;
}
```

## Best Practices

### Selector Performance

```css
/* Good: Simple, efficient selectors */
.btn {
    /* Styles */
}

/* Avoid: Overly complex selectors */
.container > .content-wrapper .main-content-area .article-container .post-title {
    /* Styles - too complex */
}

/* Good: Use classes for styling */
.card {
    /* Styles */
}

/* Avoid: Using element selectors for styling */
div {
    /* Styles - too generic */
}
```

### Maintainable Selectors

```css
/* Good: Meaningful class names */
.btn-primary {
    background-color: #007bff;
}

.btn-secondary {
    background-color: #6c757d;
}

.alert-success {
    background-color: #d4edda;
    color: #155724;
}

/* Good: Component-based naming */
.card {
    border: 1px solid #dee2e6;
    border-radius: 0.375rem;
    padding: 1rem;
}

.card-header {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #dee2e6;
    font-weight: bold;
}

.card-body {
    padding: 1rem;
}
```

### Accessibility Considerations

```css
/* Ensure focus indicators are visible */
:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .btn {
        border: 2px solid;
    }
}
```

### State-Based Selectors

```css
/* Loading state */
.btn.loading {
    opacity: 0.7;
    cursor: not-allowed;
}

.btn.loading::after {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Success state */
.btn.success {
    background-color: #28a745;
    color: white;
}

/* Error state */
.btn.error {
    background-color: #dc3545;
    color: white;
}
```

## Debugging Selectors

### Browser DevTools

```css
/* Use browser developer tools to inspect specificity */
/* Chrome: Right-click → Inspect */
/* Firefox: Right-click → Inspect Element */
/* Safari: Develop menu → Show Web Inspector */
```

### Specificity Calculators

```css
/* Online tools to calculate specificity */
/* https://specificity.keegan.st/ */
/* https://www.specificity Calculator.com/ */
```

### Common Issues

```css
/* Issue: Selector not working */
/* Solution: Check specificity and cascade order */

/* Issue: Styles being overridden */
/* Solution: Increase specificity or use !important sparingly */

/* Issue: Performance problems */
/* Solution: Simplify selectors and avoid deep nesting */

/* Issue: Overly specific selectors */
/* Solution: Use component-based CSS and BEM methodology */
```

Understanding selectors and specificity is crucial for writing maintainable, performant, and predictable CSS. Focus on using simple, meaningful selectors and managing specificity carefully to avoid CSS conflicts and maintenance headaches.