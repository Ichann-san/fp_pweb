# Document Structure

Understanding the fundamental structure of HTML documents is crucial for building well-formed web pages.

## The Basic HTML Document

Every HTML document follows a standard structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

## Document Elements

### `<!DOCTYPE html>`
- Declares the document type and HTML version
- Must be the very first line in an HTML document
- Ensures browsers render the page in standards mode

### `<html>` Element
- Root element of the page
- `lang` attribute specifies the language (important for accessibility and SEO)
- Contains all other elements

### `<head>` Section
Contains metadata about the document:
- **`<title>`**: Sets the browser tab title and page title for search engines
- **`<meta charset="UTF-8">`**: Defines character encoding
- **`<meta name="viewport">`**: Controls mobile responsiveness
- **`<meta name="description">`**: Provides page description for search engines
- **`<link>`**: Links external resources (CSS, icons)
- **`<style>`**: Contains inline CSS
- **`<script>`**: Links external JavaScript or contains inline scripts

### `<body>` Section
Contains all visible content:
- Text content
- Images
- Links
- Tables
- Forms
- Interactive elements

## Common Head Elements

### Meta Tags
```html
<!-- Character encoding -->
<meta charset="UTF-8">

<!-- Viewport for responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Page description for SEO -->
<meta name="description" content="Learn web development with our comprehensive tutorials">

<!-- Keywords for SEO -->
<meta name="keywords" content="HTML, CSS, JavaScript, web development">

<!-- Author information -->
<meta name="author" content="Your Name">

<!-- Viewport and mobile optimization -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Link Elements
```html
<!-- External CSS -->
<link rel="stylesheet" href="styles.css">

<!-- Favicon -->
<link rel="icon" href="favicon.ico" type="image/x-icon">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
```

## Page Organization

### Headers (`<h1>` to `<h6>`)
```html
<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<!-- ... up to h6 -->
```

### Paragraphs (`<p>`)
```html
<p>This is a paragraph of text. It can contain multiple sentences and will automatically wrap to fit the container width.</p>
```

### Divisions (`<div>`)
```html
<div class="container">
    <p>Content inside a division</p>
</div>
```

### Sections (`<section>`)
```html
<section>
    <h2>About Our Company</h2>
    <p>Company information goes here...</p>
</section>
```

### Articles (`<article>`)
```html
<article>
    <h2>Blog Post Title</h2>
    <p>Blog post content...</p>
</article>
```

## Best Practices

1. **Always include DOCTYPE**: Ensures consistent rendering across browsers
2. **Use semantic elements**: Choose `<section>`, `<article>`, `<nav>` over generic `<div>` when appropriate
3. **Set language attribute**: Add `lang="en"` to the `<html>` element
4. **Include meta viewport**: Essential for mobile responsiveness
5. **Use meaningful titles**: The `<title>` should describe the page content
6. **Structure content logically**: Use proper heading hierarchy (h1 → h2 → h3)
7. **Keep head minimal**: Only include essential metadata in the `<head>`

## Validation

Always validate your HTML structure using tools like:
- [W3C Markup Validator](https://validator.w3.org/)
- Browser developer tools
- Online HTML validators

Proper document structure is the foundation of accessible, SEO-friendly, and maintainable web pages.