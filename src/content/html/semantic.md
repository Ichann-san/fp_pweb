# Semantic HTML

Semantic HTML uses meaningful HTML elements that clearly describe their content and purpose. This improves accessibility, SEO, and code maintainability.

## What is Semantic HTML?

Semantic HTML provides meaning to web content through proper element selection. Instead of generic containers, semantic elements convey the structure and purpose of content.

### Non-Semantic vs Semantic

```html
<!-- Non-semantic (generic) -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="article">...</div>
<div class="section">...</div>
<div class="aside">...</div>
<div class="footer">...</div>

<!-- Semantic (meaningful) -->
<header>...</header>
<nav>...</nav>
<article>...</article>
<section>...</section>
<aside>...</aside>
<footer>...</footer>
```

## Document Structure Elements

### Document Outline

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <!-- Skip link for accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Header -->
    <header>
        <nav>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main content -->
    <main id="main-content">
        <!-- Primary content area -->
        <article>
            <header>
                <h1>Understanding Semantic HTML</h1>
                <p>Published on <time datetime="2025-01-15">January 15, 2025</time></p>
            </header>
            
            <section>
                <h2>Introduction</h2>
                <p>Semantic HTML provides meaningful structure to web content...</p>
            </section>
            
            <section>
                <h2>Benefits</h2>
                <ul>
                    <li>Improved accessibility</li>
                    <li>Better SEO</li>
                    <li>Enhanced maintainability</li>
                </ul>
            </section>
            
            <footer>
                <p>Author: Jane Doe</p>
            </footer>
        </article>
        
        <!-- Secondary content -->
        <aside>
            <h2>Related Articles</h2>
            <ul>
                <li><a href="accessibility-guide.html">Accessibility Guide</a></li>
                <li><a href="seo-best-practices.html">SEO Best Practices</a></li>
            </ul>
        </aside>
    </main>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Web Development Blog</p>
    </footer>
</body>
</html>
```

## Semantic Elements

### `<header>`
```html
<header>
    <h1>Company Logo</h1>
    <nav>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
        </ul>
    </nav>
</header>

<!-- Article header -->
<article>
    <header>
        <h1>Blog Post Title</h1>
        <p>By John Doe on <time datetime="2025-01-15">January 15, 2025</time></p>
    </header>
    <!-- Article content -->
</article>
```

### `<nav>`
```html
<!-- Primary navigation -->
<nav aria-label="Main navigation">
    <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>

<!-- Breadcrumb navigation -->
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="electronics.html">Electronics</a></li>
        <li aria-current="page">Smartphones</li>
    </ol>
</nav>

<!-- Table of contents -->
<nav aria-label="Table of contents">
    <h2>Contents</h2>
    <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
    </ul>
</nav>
```

### `<main>`
```html
<main>
    <!-- Primary content of the page -->
    <article>
        <h1>Welcome to Our Website</h1>
        <p>This is the main content of the page...</p>
    </article>
</main>

<!-- Only one main element per page -->
<main id="primary-content">
    <!-- Main content here -->
</main>
```

### `<section>`
```html
<section>
    <h2>About Our Company</h2>
    <p>Company description goes here...</p>
</section>

<!-- Section with navigation -->
<section aria-labelledby="features-heading">
    <h2 id="features-heading">Features</h2>
    <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
    </ul>
</section>
```

### `<article>`
```html
<!-- Blog post -->
<article>
    <header>
        <h1>How to Write Semantic HTML</h1>
        <p>Published on <time datetime="2025-01-15">January 15, 2025</time></p>
    </header>
    
    <section>
        <h2>Introduction</h2>
        <p>Semantic HTML is the foundation of accessible web development...</p>
    </section>
    
    <section>
        <h2>Best Practices</h2>
        <p>Here are some best practices for writing semantic HTML...</p>
    </section>
    
    <footer>
        <p>Tags: <a href="tags/html">HTML</a>, <a href="tags/accessibility">Accessibility</a></p>
    </footer>
</article>

<!-- News article -->
<article>
    <header>
        <h1>New Web Standards Released</h1>
        <p>By Tech News on <time datetime="2025-01-15">January 15, 2025</time></p>
    </header>
    
    <p>Major updates to web standards have been released today...</p>
    
    <footer>
        <p>Category: <a href="category/web-standards">Web Standards</a></p>
    </footer>
</article>
```

### `<aside>`
```html
<!-- Sidebar content -->
<aside>
    <h2>Quick Links</h2>
    <ul>
        <li><a href="getting-started.html">Getting Started</a></li>
        <li><a href="documentation.html">Documentation</a></li>
    </ul>
</aside>

<!-- Related content -->
<aside>
    <h2>Related Articles</h2>
    <ul>
        <li><a href="accessibility-guide.html">Accessibility Guide</a></li>
        <li><a href="seo-optimization.html">SEO Optimization</a></li>
    </ul>
</aside>
```

### `<footer>`
```html
<!-- Page footer -->
<footer>
    <nav aria-label="Footer navigation">
        <ul>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
        </ul>
    </nav>
    
    <p>&copy; 2025 Your Company. All rights reserved.</p>
</footer>

<!-- Article footer -->
<article>
    <h1>Article Title</h1>
    <p>Article content...</p>
    
    <footer>
        <p>Author: <a href="author/john-doe">John Doe</a></p>
        <p>Published: <time datetime="2025-01-15">January 15, 2025</time></p>
        <p>Category: <a href="category/web-development">Web Development</a></p>
    </footer>
</article>
```

## Text-Level Semantics

### `<time>`
```html
<!-- Machine-readable date -->
<p>Published on <time datetime="2025-01-15">January 15, 2025</time></p>

<!-- Date and time -->
<p>Meeting scheduled for <time datetime="2025-01-15T14:30:00">January 15, 2025 at 2:30 PM</time></p>

<!-- Relative time -->
<p>Article published <time datetime="2025-01-15">3 days ago</time></p>
```

### `<mark>`
```html
<p>Search results for <mark>"semantic HTML"</mark>:</p>
<p>You searched for <mark>accessibility</mark> and found 15 results.</p>
```

### `<abbr>`
```html
<p><abbr title="HyperText Markup Language">HTML</abbr> is the standard markup language for web pages.</p>
<p>The <abbr title="Cascading Style Sheets">CSS</abbr> file styles the HTML elements.</p>
```

### `<cite>`
```html
<blockquote>
    "The best way to predict the future is to invent it."
    <cite>- Alan Kay</cite>
</blockquote>

<p>Read more in the book <cite>"Design Patterns"</cite> by Gamma et al.</p>
```

### `<dfn>`
```html
<p><dfn>Semantic HTML</dfn> is the use of HTML markup to reinforce the semantics or meaning of content.</p>

<p>The term <dfn id="web-accessibility">web accessibility</dfn> refers to the practice of making websites accessible to people with disabilities.</p>
```

## Interactive Elements

### `<details>` and `<summary>`
```html
<details>
    <summary>What is semantic HTML?</summary>
    <p>Semantic HTML uses meaningful HTML elements that clearly describe their content and purpose.</p>
</details>

<details open>
    <summary>Benefits of semantic HTML</summary>
    <ul>
        <li>Improved accessibility</li>
        <li>Better SEO</li>
        <li>Easier maintenance</li>
    </ul>
</details>
```

### `<figure>` and `<figcaption>`
```html
<figure>
    <img src="diagram.png" alt="Semantic HTML structure diagram">
    <figcaption>
        Figure 1: The structure of semantic HTML showing header, nav, main, section, article, and footer elements.
    </figcaption>
</figure>

<figure>
    <pre><code>
        <article>
            <h1>Article Title</h1>
            <p>Article content...</p>
        </article>
    </code></pre>
    <figcaption>Example of semantic HTML structure</figcaption>
</figure>
```

## Address and Contact Information

### `<address>`
```html
<!-- Company address -->
<address>
    <strong>Web Development Co.</strong><br>
    123 Tech Street<br>
    San Francisco, CA 94105<br>
    <a href="mailto:contact@webdev.com">contact@webdev.com</a><br>
    <a href="tel:+1234567890">(123) 456-7890</a>
</address>

<!-- Article author contact -->
<article>
    <h1>Article Title</h1>
    <p>Article content...</p>
    
    <address>
        Written by <a href="mailto:author@example.com">John Doe</a><br>
        Web Developer at <a href="https://example.com">Example Company</a>
    </address>
</article>
```

## Progress and Measurement

### `<progress>`
```html
<!-- Task progress -->
<label for="task-progress">Task Progress:</label>
<progress id="task-progress" value="70" max="100">70%</progress>

<!-- File upload progress -->
<progress value="45" max="100">45%</progress>
```

### `<meter>`
```html>
<!-- Disk usage -->
<p>Disk usage: <meter value="0.6" min="0" max="100">60%</meter></p>

<!-- Rating -->
<p>Rating: <meter value="4.5" min="0" max="5">4.5/5</meter></p>

<!-- Battery level -->
<p>Battery: <meter value="0.8" min="0" max="1">80%</meter></p>
```

## Best Practices

### 1. Choose the Right Element
```html
<!-- Good: Use semantic elements -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<section>...</section>
<aside>...</aside>
<footer>...</footer>

<!-- Avoid: Generic div elements -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>
```

### 2. Use Proper Heading Hierarchy
```html
<!-- Good: Logical heading structure -->
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>

<!-- Avoid: Skipping heading levels -->
<h1>Main Title</h1>
<h3>Section (skipped h2)</h3>
```

### 3. Provide ARIA Labels When Needed
```html
<!-- Good: Clear labeling -->
<nav aria-label="Main navigation">
    <ul>...</ul>
</nav>

<nav aria-label="Breadcrumb">
    <ol>...</ol>
</nav>

<!-- Good: Describe complex content -->
<div aria-labelledby="chart-title">
    <h2 id="chart-title">Sales Data 2024</h2>
    <!-- Chart content -->
</div>
```

### 4. Use Meaningful Content
```html
<!-- Good: Descriptive link text -->
<a href="privacy-policy.html">Read our privacy policy</a>
<a href="contact.html">Contact customer support</a>

<!-- Avoid: Generic link text -->
<a href="privacy-policy.html">Click here</a>
<a href="contact.html">More info</a>
```

### 5. Group Related Content
```html
<!-- Good: Use fieldset for form groups -->
<fieldset>
    <legend>Personal Information</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
</fieldset>
```

## SEO Benefits

Semantic HTML improves SEO by:

1. **Clear content structure**: Search engines understand page hierarchy
2. **Rich snippets**: Better search result presentation
3. **Accessibility signals**: Google favors accessible websites
4. **Content parsing**: Easier for crawlers to extract meaning

## Accessibility Benefits

Semantic HTML enhances accessibility by:

1. **Screen reader navigation**: Semantic elements provide landmarks
2. **Keyboard navigation**: Proper element structure supports tab order
3. **Text alternatives**: Semantic elements help describe content purpose
4. **Assistive technology**: Better compatibility with accessibility tools

## Common Semantic Patterns

### Blog Post Structure
```html
<article>
    <header>
        <h1>Blog Post Title</h1>
        <p>By <address><a href="mailto:author@example.com">Author Name</a></address></p>
        <p>Published on <time datetime="2025-01-15">January 15, 2025</time></p>
    </header>
    
    <section>
        <h2>Introduction</h2>
        <p>Introduction content...</p>
    </section>
    
    <section>
        <h2>Main Content</h2>
        <p>Main content...</p>
    </section>
    
    <footer>
        <p>Tags: <a href="tag/html">HTML</a>, <a href="tag/accessibility">Accessibility</a></p>
    </footer>
</article>
```

### Product Page Structure
```html
<main>
    <article>
        <header>
            <h1>Product Name</h1>
            <p>Product description...</p>
        </header>
        
        <section>
            <h2>Features</h2>
            <ul>...</ul>
        </section>
        
        <section>
            <h2>Specifications</h2>
            <dl>
                <dt>Weight</dt>
                <dd>2.5 lbs</dd>
                <dt>Dimensions</dt>
                <dd>12" x 8" x 4"</dd>
            </dl>
        </section>
        
        <footer>
            <p>Category: <a href="category/electronics">Electronics</a></p>
        </footer>
    </article>
</main>
```

Semantic HTML creates web pages that are meaningful, accessible, and well-structured, benefiting both users and search engines.