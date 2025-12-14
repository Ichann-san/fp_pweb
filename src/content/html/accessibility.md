# Accessibility

Web accessibility ensures that websites and web applications are usable by people with disabilities. Following accessibility guidelines makes content available to everyone, regardless of their abilities or the technology they use.

## What is Web Accessibility?

Web accessibility means designing and developing websites so that people with disabilities can perceive, understand, navigate, and interact with them. This includes:

- **Visual impairments**: Blindness, low vision, color blindness
- **Hearing impairments**: Deafness, hard of hearing
- **Motor impairments**: Physical disabilities affecting movement
- **Cognitive impairments**: Learning disabilities, memory problems

## WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility:

### Four Principles (POUR)

1. **Perceivable**: Information must be presentable in ways users can perceive
2. **Operable**: Interface components must be operable by all users
3. **Understandable**: Information and operation must be understandable
4. **Robust**: Content must be robust enough to work with assistive technologies

### Compliance Levels

- **A (Minimum)**: Basic accessibility features
- **AA (Mid-range)**: Industry standard for most websites
- **AAA (Enhanced)**: Highest level of accessibility

## Semantic HTML for Accessibility

### Proper Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Website - Page Title</title>
</head>
<body>
    <!-- Skip link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Header -->
    <header>
        <h1>Website Title</h1>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main content -->
    <main id="main-content">
        <article>
            <header>
                <h1>Page Title</h1>
                <p>Page introduction...</p>
            </header>
            
            <section aria-labelledby="section1-heading">
                <h2 id="section1-heading">Section Title</h2>
                <p>Section content...</p>
            </section>
        </article>
        
        <aside>
            <h2>Related Information</h2>
            <p>Sidebar content...</p>
        </aside>
    </main>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Website Name</p>
    </footer>
</body>
</html>
```

## ARIA (Accessible Rich Internet Applications)

### ARIA Roles

```html
<!-- Navigation landmarks -->
<nav role="navigation" aria-label="Main navigation">
    <!-- Navigation content -->
</nav>

<nav role="navigation" aria-label="Breadcrumb">
    <!-- Breadcrumb content -->
</nav>

<!-- Content landmarks -->
<main role="main" id="main-content">
    <!-- Main content -->
</main>

<aside role="complementary">
    <!-- Complementary content -->
</aside>

<!-- Search -->
<form role="search">
    <!-- Search form -->
</form>
```

### ARIA Properties

```html
<!-- Expanded/collapsed state -->
<button aria-expanded="false" aria-controls="menu-items">Menu</button>
<div id="menu-items" aria-hidden="true">
    <!-- Menu items -->
</div>

<!-- Current page indication -->
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="home.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li aria-current="page">Electronics</li>
    </ol>
</nav>

<!-- Live regions for dynamic content -->
<div aria-live="polite" id="status-message"></div>
<div aria-live="assertive" id="error-message"></div>
```

### ARIA Labels and Descriptions

```html
<!-- aria-label (replaces element's accessible name) -->
<button aria-label="Close dialog">
    <span aria-hidden="true">&times;</span>
</button>

<!-- aria-labelledby (references another element) -->
<h2 id="section-title">Section Title</h2>
<div aria-labelledby="section-title">
    <!-- Content -->
</div>

<!-- aria-describedby (provides additional description) -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" aria-describedby="email-help">
<div id="email-help">We'll use this to send you important updates</div>
```

## Form Accessibility

### Proper Labeling

```html
<!-- Explicit label association -->
<label for="username">Username:</label>
<input type="text" id="username" name="username" required>

<!-- Implicit label association -->
<label>
    Email:
    <input type="email" name="email" required>
</label>

<!-- Complex form groups -->
<fieldset>
    <legend>Personal Information</legend>
    
    <div>
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name" required>
    </div>
    
    <div>
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name" required>
    </div>
</fieldset>
```

### Error Handling

```html
<form>
    <div>
        <label for="email">Email Address *</label>
        <input type="email" 
               id="email" 
               name="email" 
               required 
               aria-describedby="email-error"
               aria-invalid="true">
        <div id="email-error" role="alert" aria-live="polite">
            Please enter a valid email address
        </div>
    </div>
    
    <button type="submit">Submit</button>
</form>
```

### Required Field Indicators

```html
<label for="password">Password: <span aria-label="required">*</span></label>
<input type="password" id="password" name="password" required>
<span class="sr-only">required</span>
```

## Image Accessibility

### Alt Text Best Practices

```html
<!-- Informative images -->
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2 2024">

<!-- Decorative images -->
<img src="decorative-line.svg" alt="" role="presentation">

<!-- Complex images with descriptions -->
<img src="diagram.png" 
     alt="System architecture diagram showing frontend, API, and database layers"
     aria-describedby="diagram-description">

<div id="diagram-description">
    Figure 1: The system architecture consists of three main layers: 
    the frontend user interface, the backend API server, and the database storage layer.
</div>
```

### Figure and Caption

```html
<figure>
    <img src="workflow-diagram.png" alt="Five-step workflow process">
    <figcaption>
        Figure 1: The five-step workflow process from initial request to final delivery.
        Step 1: Request received, Step 2: Analysis completed, Step 3: Design phase, 
        Step 4: Development phase, Step 5: Final delivery.
    </figcaption>
</figure>
```

## Link Accessibility

### Descriptive Link Text

```html
<!-- Good: Descriptive link text -->
<a href="privacy-policy.html">Read our privacy policy</a>
<a href="contact.html">Contact customer support</a>
<a href="download-guide.pdf" download>Download our beginner's guide (PDF)</a>

<!-- Avoid: Non-descriptive link text -->
<a href="privacy-policy.html">Click here</a>
<a href="contact.html">More info</a>
<a href="download-guide.pdf">Download</a>

<!-- Skip links -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Link Context

```html
<!-- Link with surrounding context -->
<p>
    Before proceeding, please 
    <a href="terms.html">review our terms of service</a> 
    and <a href="privacy.html">privacy policy</a>.
</p>

<!-- Multiple links to same destination -->
<p>
    For more information, see:
    <a href="getting-started.html">the getting started guide</a>,
    <a href="tutorials.html">our tutorials</a>, or
    <a href="faq.html">frequently asked questions</a>.
</p>
```

## Keyboard Accessibility

### Focus Management

```html
<!-- Focusable elements -->
<button>Click me</button>
<a href="page.html">Go to page</a>
<input type="text" placeholder="Enter text">
<select>
    <option>Option 1</option>
    <option>Option 2</option>
</select>
<textarea placeholder="Enter message"></textarea>

<!-- Custom focusable elements -->
<div tabindex="0" role="button" onclick="handleClick()">
    Custom button
</div>

<!-- Focus indicators -->
<style>
.focusable:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}
</style>
```

### Tab Order

```html
<!-- Logical tab order -->
<form>
    <label for="name">Name:</label>
    <input type="text" id="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email">
    
    <button type="submit">Submit</button>
</form>

<!-- Skip navigation -->
<nav aria-label="Main navigation">
    <ul>
        <li><a href="#main-content">Skip to main content</a></li>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
    </ul>
</nav>
```

### Modal Dialogs

```html
<!-- Accessible modal -->
<div role="dialog" 
     aria-labelledby="modal-title" 
     aria-describedby="modal-description"
     aria-modal="true">
    <h2 id="modal-title">Confirm Action</h2>
    <p id="modal-description">Are you sure you want to delete this item?</p>
    
    <button onclick="closeModal()">Cancel</button>
    <button onclick="confirmDelete()">Delete</button>
</div>
```

## Color and Contrast

### Color Contrast

```html
<!-- Good contrast -->
<style>
.good-contrast {
    background-color: #ffffff;
    color: #000000; /* Black on white */
}

.better-contrast {
    background-color: #ffffff;
    color: #333333; /* Dark gray on white */
}
</style>

<!-- Poor contrast (avoid) -->
<style>
.poor-contrast {
    background-color: #ffffff;
    color: #dddddd; /* Light gray on white - hard to read */
}
</style>

<!-- Don't rely on color alone -->
<style>
.status-message {
    padding: 10px;
    border-left: 4px solid;
}

.success {
    background-color: #d4edda;
    border-color: #28a745; /* Green border */
    color: #155724;
}

.error {
    background-color: #f8d7da;
    border-color: #dc3545; /* Red border */
    color: #721c24;
}

/* Add icons for non-color communication */
.success::before {
    content: "✓ ";
}

.error::before {
    content: "⚠ ";
}
</style>
```

## Text and Typography

### Scalable Text

```html
<!-- Responsive typography -->
<style>
body {
    font-size: 16px;
    line-height: 1.6;
}

h1 {
    font-size: 2.5rem;
}

h2 {
    font-size: 2rem;
}

p {
    font-size: 1rem;
    max-width: 65ch; /* Optimal reading width */
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>
```

### Language and Direction

```html
<!-- Language specification -->
<html lang="en">
<!-- or -->
<html lang="fr">

<!-- Text direction -->
<p dir="ltr">Left-to-right text</p>
<p dir="rtl">Right-to-left text</p>

<!-- Language-specific content -->
<p lang="fr">Bonjour! Comment allez-vous?</p>
<p lang="es">¡Hola! ¿Cómo está usted?</p>
```

## Testing and Validation

### Automated Testing Tools

```html
<!-- Use browser developer tools -->
<!-- 1. Chrome DevTools Accessibility panel -->
<!-- 2. Firefox Accessibility Inspector -->
<!-- 3. WAVE browser extension -->

<!-- Command line tools -->
<!-- axe-cli for automated testing -->
<!-- pa11y for command line accessibility testing -->
```

### Manual Testing Checklist

```html
<!-- Keyboard navigation -->
<!-- 1. Can you navigate the entire page with Tab key? -->
<!-- 2. Can you activate all interactive elements with Enter/Space? -->
<!-- 3. Is the focus indicator clearly visible? -->
<!-- 4. Is the tab order logical? -->

<!-- Screen reader testing -->
<!-- 1. Can you navigate by headings? -->
<!-- 2. Can you navigate by landmarks? -->
<!-- 3. Are form labels properly associated? -->
<!-- 4. Are images properly described? -->

<!-- Visual testing -->
<!-- 1. Does the page work with zoom up to 200%? -->
<!-- 2. Can you understand content without color? -->
<!-- 3. Are contrast ratios adequate? -->
<!-- 4. Is text scalable without horizontal scrolling? -->
```

## Common Accessibility Patterns

### Accordion

```html
<div role="region" aria-labelledby="accordion-header">
    <h3 id="accordion-header">
        <button aria-expanded="false" aria-controls="accordion-content" id="accordion-button">
            Section 1
        </button>
    </h3>
    <div id="accordion-content" aria-hidden="true">
        <p>Accordion content goes here...</p>
    </div>
</div>
```

### Tabs

```html
<div role="tablist" aria-label="Sample tabs">
    <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">Tab 1</button>
    <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">Tab 2</button>
    <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1">Tab 3</button>
</div>

<div role="tabpanel" aria-labelledby="tab-1" id="panel-1">
    <p>Panel 1 content</p>
</div>
<div role="tabpanel" aria-labelledby="tab-2" id="panel-2" hidden>
    <p>Panel 2 content</p>
</div>
<div role="tabpanel" aria-labelledby="tab-3" id="panel-3" hidden>
    <p>Panel 3 content</p>
</div>
```

## Accessibility Resources

### Guidelines and Standards
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Testing Tools
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)

### Screen Readers
- [NVDA](https://www.nvaccess.org/) (Windows - Free)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Windows - Commercial)
- [VoiceOver](https://support.apple.com/guide/voiceover/) (macOS/iOS - Built-in)

### Color Contrast Checkers
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

## Best Practices Summary

1. **Use semantic HTML**: Choose meaningful elements over generic divs
2. **Provide alt text**: Describe images meaningfully
3. **Ensure keyboard accessibility**: All functionality available via keyboard
4. **Maintain proper focus**: Visible focus indicators and logical tab order
5. **Use ARIA appropriately**: Enhance, don't replace, semantic HTML
6. **Test with assistive technologies**: Screen readers, keyboard navigation
7. **Consider color accessibility**: Adequate contrast and don't rely on color alone
8. **Provide text alternatives**: For non-text content and complex visuals
9. **Structure content logically**: Proper heading hierarchy and landmarks
10. **Validate with tools**: Use both automated and manual testing

Web accessibility is not just about compliance—it's about creating inclusive experiences that work for everyone.