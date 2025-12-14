# Lists & Tables

Lists and tables are essential for organizing and presenting structured data on web pages. Understanding how to create accessible, semantic lists and tables is crucial for good web design.

## Unordered Lists

Unordered lists (`<ul>`) display items with bullet points, perfect for collections where order doesn't matter.

### Basic Unordered List

```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

### Nested Unordered Lists

```html
<ul>
    <li>Web Development Technologies
        <ul>
            <li>HTML - Structure</li>
            <li>CSS - Styling
                <ul>
                    <li>Flexbox</li>
                    <li>Grid</li>
                    <li>CSS3 Features</li>
                </ul>
            </li>
            <li>JavaScript - Functionality</li>
        </ul>
    </li>
    <li>Backend Technologies
        <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>PHP</li>
        </ul>
    </li>
</ul>
```

### Custom Bullet Points

```html
<!-- Custom styled list (requires CSS) -->
<style>
.custom-list {
    list-style: none;
    padding-left: 0;
}

.custom-list li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 10px;
}

.custom-list li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: #007bff;
    font-weight: bold;
}
</style>

<ul class="custom-list">
    <li>Custom bullet point 1</li>
    <li>Custom bullet point 2</li>
    <li>Custom bullet point 3</li>
</ul>
```

## Ordered Lists

Ordered lists (`<ol>`) display items with numbers, perfect for step-by-step instructions or ranked items.

### Basic Ordered List

```html
<ol>
    <li>Create HTML structure</li>
    <li>Add CSS styling</li>
    <li>Implement JavaScript functionality</li>
    <li>Test and deploy</li>
</ol>
```

### Custom Numbering

```html
<!-- Start from specific number -->
<ol start="5">
    <li>Fifth step</li>
    <li>Sixth step</li>
    <li>Seventh step</li>
</ol>

<!-- Roman numerals -->
<ol type="i">
    <li>Introduction</li>
    <li>Main content</li>
    <li>Conclusion</li>
</ol>

<!-- Letters (uppercase) -->
<ol type="A">
    <li>Option A</li>
    <li>Option B</li>
    <li>Option C</li>
</ol>
```

### Reversed List

```html
<ol reversed>
    <li>Last step</li>
    <li>Second to last</li>
    <li>First step</li>
</ol>
```

## Definition Lists

Definition lists (`<dl>`) are used for terms and their definitions or descriptions.

### Basic Definition List

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - the standard markup language for creating web pages</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - used for styling HTML documents and controlling layout</dd>
    
    <dt>JavaScript</dt>
    <dd>A programming language that runs in web browsers to create interactive experiences</dd>
</dl>
```

### Complex Definition Lists

```html
<dl>
    <dt>Web Developer</dt>
    <dd>Professional who creates and maintains websites and web applications</dd>
    <dd>Responsible for both frontend and backend development</dd>
    
    <dt>Frontend Developer</dt>
    <dd>Specializes in client-side development using HTML, CSS, and JavaScript</dd>
    
    <dt>Backend Developer</dt>
    <dd>Focuses on server-side logic and database management</dd>
</dl>
```

## Semantic Lists

### Navigation Lists

```html
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
    <ol class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="electronics.html">Electronics</a></li>
        <li aria-current="page">Smartphones</li>
    </ol>
</nav>
```

### List of Links

```html
<ul class="link-list">
    <li><a href="privacy.html">Privacy Policy</a></li>
    <li><a href="terms.html">Terms of Service</a></li>
    <li><a href="cookies.html">Cookie Policy</a></li>
</ul>
```

## Accessible Lists

### Screen Reader Optimization

```html
<!-- List with proper ARIA labels -->
<ul aria-label="Programming languages">
    <li>JavaScript</li>
    <li>Python</li>
    <li>Java</li>
</ul>

<!-- List with group description -->
<div role="group" aria-labelledby="frontend-technologies">
    <h3 id="frontend-technologies">Frontend Technologies</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
</div>
```

## Basic Tables

Tables (`<table>`) organize data in rows and columns.

### Simple Table

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Developer</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>Designer</td>
        </tr>
    </tbody>
</table>
```

### Table with Caption

```html
<table>
    <caption>Team Members Information</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Department</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">John Doe</th>
            <td>john@example.com</td>
            <td>Senior Developer</td>
            <td>Engineering</td>
        </tr>
        <tr>
            <th scope="row">Jane Smith</th>
            <td>jane@example.com</td>
            <td>UX Designer</td>
            <td>Design</td>
        </tr>
    </tbody>
</table>
```

## Complex Tables

### Table with Column Groups

```html
<table>
    <colgroup>
        <col style="width: 25%">
        <col style="width: 25%">
        <col style="width: 25%">
        <col style="width: 25%">
    </colgroup>
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Laptop</td>
            <td>$999.99</td>
            <td>15</td>
            <td><button>Order</button></td>
        </tr>
    </tbody>
</table>
```

### Responsive Table

```html
<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Product">Smartphone</td>
                <td data-label="Price">$599.99</td>
                <td data-label="Stock">25</td>
                <td data-label="Category">Electronics</td>
            </tr>
            <tr>
                <td data-label="Product">Laptop</td>
                <td data-label="Price">$1299.99</td>
                <td data-label="Stock">10</td>
                <td data-label="Category">Computers</td>
            </tr>
        </tbody>
    </table>
</div>

<style>
.table-container {
    overflow-x: auto;
}

@media (max-width: 768px) {
    table {
        border: 0;
    }
    
    table thead {
        display: none;
    }
    
    table tr {
        display: block;
        margin-bottom: 10px;
        border: 1px solid #ddd;
    }
    
    table td {
        display: block;
        text-align: right;
        border-bottom: 1px solid #ddd;
    }
    
    table td:before {
        content: attr(data-label) ": ";
        float: left;
        font-weight: bold;
    }
}
</style>
```

## Table Accessibility

### Header Associations

```html
<!-- Simple association -->
<table>
    <thead>
        <tr>
            <th id="name">Name</th>
            <th id="email">Email</th>
            <th id="phone">Phone</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td headers="name">John Doe</td>
            <td headers="email">john@example.com</td>
            <td headers="phone">555-0123</td>
        </tr>
    </tbody>
</table>

<!-- Scope attribute -->
<table>
    <thead>
        <tr>
            <th scope="col">Product</th>
            <th scope="col">Q1 Sales</th>
            <th scope="col">Q2 Sales</th>
            <th scope="col">Q3 Sales</th>
            <th scope="col">Q4 Sales</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Widget A</th>
            <td>$10,000</td>
            <td>$12,000</td>
            <td>$15,000</td>
            <td>$18,000</td>
        </tr>
    </tbody>
</table>
```

### Table with Summary

```html
<table aria-describedby="table-description">
    <caption>Quarterly Sales Report 2024</caption>
    <thead>
        <tr>
            <th>Quarter</th>
            <th>Revenue</th>
            <th>Growth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Q1 2024</td>
            <td>$50,000</td>
            <td>+5%</td>
        </tr>
        <tr>
            <td>Q2 2024</td>
            <td>$55,000</td>
            <td>+10%</td>
        </tr>
    </tbody>
</table>

<div id="table-description">
    This table shows quarterly revenue and growth percentages for 2024. 
    Growth is calculated compared to the previous quarter.
</div>
```

## Best Practices

### Lists
1. **Use semantic elements**: Choose `<ul>` for unordered, `<ol>` for ordered, `<dl>` for definitions
2. **Provide context**: Use ARIA labels when list purpose isn't clear
3. **Maintain proper nesting**: Don't skip list levels when nesting
4. **Keep lists concise**: Break long lists into smaller groups
5. **Use meaningful content**: Write descriptive list items

### Tables
1. **Use tables for tabular data**: Don't use tables for layout
2. **Include captions**: Provide context for table content
3. **Associate headers**: Use `scope` or `headers` attributes
4. **Make responsive**: Ensure tables work on mobile devices
5. **Provide summaries**: Use `aria-describedby` for complex tables
6. **Consider accessibility**: Test with screen readers

### Performance
1. **Limit table size**: Large tables can impact performance
2. **Use pagination**: For large datasets
3. **Optimize images**: Compress images in table cells
4. **Minimize nesting**: Avoid deeply nested lists

Proper list and table implementation creates well-organized, accessible, and performant web content.