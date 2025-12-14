# Text & Typography

HTML provides various elements for structuring and formatting text content to create readable and accessible web pages.

## Headings

HTML offers six levels of headings (`<h1>` through `<h6>`) for creating document structure:

```html
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Sub-subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

### Heading Best Practices
- Use only one `<h1>` per page (for the main title)
- Follow proper hierarchy (don't skip levels)
- Make headings descriptive and meaningful
- Use headings to outline your content structure

## Paragraphs

The `<p>` element defines paragraphs of text:

```html
<p>This is a paragraph of text. It contains multiple sentences that flow together naturally.</p>
<p>This is another paragraph. Each paragraph should focus on a single idea or topic.</p>
```

## Text Formatting Elements

### Emphasis and Importance

```html
<!-- Strong importance -->
<strong>Important text</strong>

<!-- Emphasized text -->
<em>Emphasized text</em>

<!-- Strong element (similar to strong but semantically different) -->
<b>Bold text (presentational)</b>

<!-- Italic element (similar to em but presentational) -->
<i>Italic text (presentational)</i>
```

### Other Text Elements

```html
<!-- Inline code -->
<code>console.log('Hello World');</code>

<!-- Keyboard input -->
<kbd>Ctrl + C</kbd>

<!-- Preformatted text -->
<pre>
function hello() {
    console.log('Hello World');
}
</pre>

<!-- Block quote -->
<blockquote>
    "The best way to predict the future is to invent it."
    <cite>- Alan Kay</cite>
</blockquote>

<!-- Quote -->
<p>As <q>Shakespeare</q> said, <q>To be or not to be</q>.</p>
```

### Text Modifications

```html
<!-- Inserted text -->
<ins>Newly added content</ins>

<!-- Deleted text -->
<del>Removed content</del>

<!-- Superscript and subscript -->
<p>H<sub>2</sub>O (water) and E = mc<sup>2</sup></p>

<!-- Mark/highlight text -->
<mark>Highlighted text</mark>

<!-- Small text -->
<small>Small print text</small>

<!-- Abbreviation -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- Definition -->
<p><dfn>HTML</dfn> is the standard markup language for creating web pages.</p>
```

## Text Structure

### Line Breaks

```html
<!-- Hard line break -->
<p>This is a line<br>with a break</p>

<!-- Horizontal rule -->
<hr>

<!-- Address -->
<address>
    Contact Information:<br>
    John Doe<br>
    123 Main Street<br>
    City, State 12345
</address>
```

### Preformatted Text

```html
<pre>
function calculateTotal(items) {
    return items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}
</pre>
```

## Lists

### Unordered Lists

```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item
        <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
        </ul>
    </li>
</ul>
```

### Ordered Lists

```html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<!-- Custom starting number -->
<ol start="5">
    <li>Fifth item</li>
    <li>Sixth item</li>
</ol>

<!-- Roman numerals -->
<ol type="i">
    <li>First item (i)</li>
    <li>Second item (ii)</li>
</ol>
```

### Definition Lists

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - the standard markup language for web pages</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - used for styling HTML documents</dd>
    
    <dt>JavaScript</dt>
    <dd>Programming language that runs in web browsers</dd>
</dl>
```

## Text Accessibility

### ARIA Labels

```html
<p aria-label="Important announcement">
    This is an important announcement for screen readers.
</p>

<span aria-describedby="tooltip-text">Hover over me</span>
<div id="tooltip-text" role="tooltip">
    This tooltip provides additional information.
</div>
```

### Language Attributes

```html
<p lang="en">This paragraph is in English.</p>
<p lang="fr">Ce paragraphe est en français.</p>
<p lang="es">Este párrafo está en español.</p>
```

## Typography Best Practices

1. **Use semantic elements**: Choose `<strong>` over `<b>` for importance
2. **Maintain readability**: Keep line lengths reasonable (50-75 characters)
3. **Use proper heading hierarchy**: Create logical document outline
4. **Provide text alternatives**: Ensure all text is readable by assistive technologies
5. **Use meaningful content**: Write descriptive headings and link text
6. **Consider contrast**: Ensure sufficient color contrast for text readability
7. **Test with screen readers**: Verify text content is properly announced

## Example: Well-Structured Article

```html
<article>
    <header>
        <h1>The Future of Web Development</h1>
        <p><time datetime="2025-01-15">January 15, 2025</time> by <strong>Jane Smith</strong></p>
    </header>
    
    <section>
        <h2>Introduction</h2>
        <p>Web development continues to evolve at a rapid pace...</p>
    </section>
    
    <section>
        <h2>Emerging Technologies</h2>
        <p>Several technologies are shaping the future:</p>
        <ul>
            <li><strong>WebAssembly</strong> - Bringing native performance to web applications</li>
            <li><strong>Progressive Web Apps</strong> - Combining the best of web and native apps</li>
            <li><strong>AI Integration</strong> - Adding intelligent features to web experiences</li>
        </ul>
    </section>
    
    <footer>
        <p><small>© 2025 Web Development Today. All rights reserved.</small></p>
    </footer>
</article>
```

Proper typography creates readable, accessible, and well-structured content that serves all users effectively.