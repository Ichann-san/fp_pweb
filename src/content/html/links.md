# Links & Navigation

Links are the foundation of web navigation, connecting pages and resources. Understanding how to create effective, accessible links is crucial for web development.

## Basic Links

### The Anchor Element (`<a>`)

The `<a>` (anchor) element creates hyperlinks:

```html
<!-- Basic link -->
<a href="https://example.com">Visit Example.com</a>

<!-- Link to another page -->
<a href="about.html">About Us</a>

<!-- Link with descriptive text -->
<a href="contact.html">Contact our customer service team</a>
```

### Link Attributes

```html
<!-- Absolute URL -->
<a href="https://www.example.com/page">External Link</a>

<!-- Relative URL -->
<a href="../images/photo.jpg">Image in parent directory</a>

<!-- Root-relative URL -->
<a href="/contact.html">Contact page from root</a>

<!-- Link to email -->
<a href="mailto:john@example.com">Send email to John</a>

<!-- Link to phone -->
<a href="tel:+1234567890">Call us at (123) 456-7890</a>

<!-- Link to download -->
<a href="files/document.pdf" download>Download PDF</a>

<!-- Link with target -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Open in new tab
</a>
```

## Link States and Styling

### Link Pseudo-classes (CSS)

```css
/* Unvisited link */
a:link {
    color: #007bff;
    text-decoration: none;
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

/* Active/clicked link */
a:active {
    color: #dc3545;
}

/* Focus state (keyboard navigation) */
a:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}
```

## Types of Links

### External Links

```html
<!-- Link to external website -->
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
    Visit MDN Web Docs
</a>

<!-- Social media links -->
<a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
    <svg><!-- Twitter icon --></svg>
</a>
```

### Internal Links

```html
<!-- Navigation menu -->
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>

<!-- In-page navigation -->
<nav aria-label="Page sections">
    <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
    </ul>
</nav>
```

### Fragment Links (Anchors)

```html
<!-- Link to section on same page -->
<a href="#section-id">Jump to Section</a>

<!-- Target section -->
<section id="section-id">
    <h2>Section Title</h2>
    <p>Section content...</p>
</section>

<!-- Link to specific part of page -->
<a href="#contact-form">Skip to contact form</a>
```

## Link Accessibility

### Descriptive Link Text

```html
<!-- Good: Descriptive link text -->
<a href="privacy-policy.html">Read our privacy policy</a>
<a href="contact.html">Contact customer support</a>
<a href="report.pdf" download>Download annual report (PDF)</a>

<!-- Bad: Non-descriptive link text -->
<a href="privacy-policy.html">Click here</a>
<a href="contact.html">More info</a>
<a href="report.pdf">Download</a>
```

### ARIA Labels and Descriptions

```html
<!-- Link with aria-label -->
<a href="https://twitter.com/company" aria-label="Follow us on Twitter for updates">

<!-- Link with aria-describedby -->
<a href="terms.html" aria-describedby="terms-warning">Terms of Service</a>
<span id="terms-warning">Review our updated terms and conditions</span>

<!-- Skip links for screen readers -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Skip Links

```html
<!-- CSS for skip links -->
<style>
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
}

.skip-link:focus {
    top: 6px;
}
</style>

<!-- HTML skip link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<header>
    <nav><!-- Navigation content --></nav>
</header>

<main id="main-content">
    <!-- Main page content -->
</main>
```

## Advanced Link Techniques

### Link Groups

```html
<!-- Related links grouped together -->
<div class="link-group" role="group" aria-labelledby="external-resources">
    <h3 id="external-resources">External Resources</h3>
    <ul>
        <li><a href="https://w3.org">W3C Standards</a></li>
        <li><a href="https://developer.mozilla.org">MDN Documentation</a></li>
        <li><a href="https://caniuse.com">Browser Support</a></li>
    </ul>
</div>
```

### Breadcrumb Navigation

```html
<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="electronics.html">Electronics</a></li>
        <li aria-current="page">Smartphones</li>
    </ol>
</nav>
```

### Table of Contents

```html
<aside class="toc">
    <h2>Table of Contents</h2>
    <nav aria-label="Table of contents">
        <ol>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#setup">Setup</a></li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#examples">Examples</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
        </ol>
    </nav>
</aside>
```

## Link Best Practices

1. **Use descriptive text**: Make link text meaningful out of context
2. **Avoid "click here"**: Use descriptive text that explains the destination
3. **Keep links concise**: Long link text can be hard to scan
4. **Use proper HTML**: Don't use non-semantic elements for links
5. **Consider context**: Link text should make sense in the surrounding content
6. **Test keyboard navigation**: Ensure all links are accessible via keyboard
7. **Provide visual feedback**: Style links differently from regular text
8. **Use appropriate targets**: Open external links in new tabs, internal links in same tab
9. **Include security attributes**: Add `rel="noopener noreferrer"` for external links
10. **Optimize for mobile**: Ensure links are easy to tap on touch devices

## Common Link Patterns

### Call-to-Action Links

```html
<!-- Primary action -->
<a href="signup.html" class="btn btn-primary">Sign Up Now</a>

<!-- Secondary action -->
<a href="learn-more.html" class="btn btn-secondary">Learn More</a>

<!-- Download action -->
<a href="guide.pdf" class="btn btn-download" download>
    Download Free Guide
</a>
```

### Navigation Patterns

```html
<!-- Main navigation -->
<nav role="navigation" aria-label="Main navigation">
    <ul class="main-nav">
        <li><a href="home.html" aria-current="page">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>

<!-- Footer navigation -->
<footer>
    <nav aria-label="Footer navigation">
        <ul class="footer-nav">
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
            <li><a href="sitemap.html">Sitemap</a></li>
        </ul>
    </nav>
</footer>
```

Effective links create intuitive navigation experiences and improve both user experience and accessibility.