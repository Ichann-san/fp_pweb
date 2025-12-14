# Images & Media

Images and media elements are crucial for creating engaging web experiences. Understanding how to properly implement them ensures good performance, accessibility, and SEO.

## Basic Images

### The `<img>` Element

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description of the image">

<!-- Image with dimensions -->
<img src="photo.jpg" alt="Sunset over mountains" width="400" height="300">

<!-- Responsive image -->
<img src="image.jpg" alt="Description" class="responsive-img">
```

### Image Attributes

```html
<!-- Alternative text (essential for accessibility) -->
<img src="cat.jpg" alt="A fluffy orange cat sitting on a windowsill">

<!-- Width and height (prevents layout shift) -->
<img src="logo.png" alt="Company Logo" width="200" height="100">

<!-- Loading optimization -->
<img src="hero.jpg" alt="Hero image" loading="lazy">

<!-- Referrer policy -->
<img src="analytics-chart.png" alt="Monthly sales chart" referrerpolicy="no-referrer">
```

## Image Formats

### Common Image Formats

```html
<!-- JPEG - Best for photographs -->
<img src="photo.jpg" alt="Beautiful landscape photograph">

<!-- PNG - Best for graphics with transparency -->
<img src="logo.png" alt="Transparent logo" width="150" height="50">

<!-- GIF - Simple animations -->
<img src="loading.gif" alt="Loading animation" width="32" height="32">

<!-- WebP - Modern format with good compression -->
<img src="image.webp" alt="Optimized image">

<!-- SVG - Vector graphics -->
<img src="icon.svg" alt="Vector icon" width="24" height="24">
```

## Responsive Images

### Picture Element

```html
<!-- Multiple image sources for different screen sizes -->
<picture>
    <source media="(min-width: 1200px)" srcset="image-large.webp">
    <source media="(min-width: 768px)" srcset="image-medium.webp">
    <source media="(max-width: 767px)" srcset="image-small.webp">
    <img src="image-fallback.jpg" alt="Responsive image">
</picture>
```

### Responsive `<img>` with `srcset`

```html
<!-- Different image sizes for different devices -->
<img src="image-800.jpg" 
     alt="Mountain landscape"
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 900px) 800px,
            1200px">
```

## Image Optimization

### Lazy Loading

```html
<!-- Native lazy loading -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- JavaScript lazy loading for older browsers -->
<img data-src="image.jpg" alt="Description" class="lazy-load">
```

### Preload Important Images

```html
<!-- Preload hero image -->
<link rel="preload" as="image" href="hero-image.jpg">

<!-- Use in HTML -->
<img src="hero-image.jpg" alt="Hero image">
```

## Image Accessibility

### Alt Text Best Practices

```html
<!-- Good alt text -->
<img src="team-photo.jpg" alt="Our development team at the 2024 company retreat">

<!-- Decorative images -->
<img src="decorative-line.svg" alt="" role="presentation">

<!-- Complex images with long descriptions -->
<img src="complex-chart.png" alt="Sales data showing 25% increase in Q4 2024" 
     aria-describedby="chart-description">

<div id="chart-description" class="sr-only">
    Detailed chart description: Sales increased from $100K in Q1 to $125K in Q4 2024...
</div>
```

### ARIA Labels and Descriptions

```html
<!-- Image with additional context -->
<img src="product.jpg" alt="Red running shoes" 
     aria-label="Product image of red athletic running shoes">

<!-- Image with description -->
<img src="diagram.jpg" alt="System architecture diagram" 
     aria-describedby="diagram-caption">

<figcaption id="diagram-caption">
    Figure 1: System architecture showing frontend, API, and database layers
</figcaption>
```

## Figure and Caption

```html
<!-- Image with caption -->
<figure>
    <img src="landscape.jpg" alt="Mountain landscape at sunset">
    <figcaption>
        Figure 1: A breathtaking sunset over the Rocky Mountains, 
        captured during our hiking trip in September 2024.
    </figcaption>
</figure>

<!-- Multiple images in one figure -->
<figure>
    <img src="before.jpg" alt="Room before renovation">
    <img src="after.jpg" alt="Room after renovation">
    <figcaption>
        Before and after photos of our kitchen renovation project.
    </figcaption>
</figure>
```

## Image Maps

```html
<!-- Interactive image map -->
<img src="world-map.jpg" alt="World map" usemap="#worldmap">

<map name="worldmap">
    <area shape="rect" coords="0,0,100,100" alt="North America" href="north-america.html">
    <area shape="rect" coords="100,0,200,100" alt="Europe" href="europe.html">
    <area shape="rect" coords="200,0,300,100" alt="Asia" href="asia.html">
</map>
```

## SVG Images

### Inline SVG

```html
<!-- Inline SVG icon -->
<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>

<!-- Accessible SVG -->
<svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="icon-title">
    <title id="icon-title">Favorite icon</title>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>
```

### SVG as Image Source

```html
<!-- SVG file as image -->
<img src="logo.svg" alt="Company logo" width="200" height="100">

<!-- Data URI SVG -->
<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJsMy4wOSA2LjI2TDIyIDkuMjdsLTUgNC44NyAxLjE4IDYuODhMMTIgMTcuNzdsLTYuMTggMy4yNUw3IDE0LjE0IDIgOS4yN2w2LjkxLTEuMDFMMTIgMnoiIGZpbGw9IiMwMDdiZmYiLz4KPC9zdmc+" alt="Star icon">
```

## Video and Audio

### Video Element

```html
<!-- Basic video -->
<video controls width="640" height="480">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    <p>Your browser doesn't support HTML5 video. <a href="movie.mp4">Download the video</a>.</p>
</video>

<!-- Video with poster -->
<video controls width="640" height="480" poster="video-thumbnail.jpg">
    <source src="movie.mp4" type="video/mp4">
    <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">
    <p>Your browser doesn't support HTML5 video.</p>
</video>
```

### Audio Element

```html
<!-- Basic audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    <p>Your browser doesn't support HTML5 audio. <a href="audio.mp3">Download the audio</a>.</p>
</audio>

<!-- Audio with transcript -->
<audio controls aria-describedby="audio-transcript">
    <source src="podcast-episode.mp3" type="audio/mpeg">
</audio>

<div id="audio-transcript">
    <h3>Podcast Transcript</h3>
    <p>Welcome to our weekly podcast where we discuss web development trends...</p>
</div>
```

## Performance Optimization

### Responsive Images with CSS

```html
<!-- CSS for responsive images -->
<style>
.responsive-image {
    max-width: 100%;
    height: auto;
    display: block;
}

.hero-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.thumbnail {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
}
</style>

<!-- HTML using responsive classes -->
<img src="hero.jpg" alt="Hero image" class="responsive-image hero-image">
<img src="thumb1.jpg" alt="Product thumbnail" class="responsive-image thumbnail">
```

### Image Compression

```html
<!-- Optimized image with proper compression -->
<img src="optimized-image.webp" 
     alt="Optimized product image"
     loading="lazy"
     width="400" height="300">
```

## Image Security

### Content Security Policy

```html
<!-- Prevent inline images in CSP -->
<meta http-equiv="Content-Security-Policy" 
      content="img-src 'self' https://cdn.example.com;">

<!-- Safe image implementation -->
<img src="https://cdn.example.com/safe-image.jpg" 
     alt="Safe image from trusted CDN">
```

## Image SEO

### Structured Data for Images

```html
<!-- Image with proper context -->
<article>
    <h2>Beautiful Sunset Photography</h2>
    <figure>
        <img src="sunset.jpg" alt="Golden sunset over ocean waves">
        <figcaption>Professional sunset photography captured at Malibu Beach</figcaption>
    </figure>
    <p>Learn about sunset photography techniques...</p>
</article>
```

## Best Practices Summary

1. **Always include alt text**: Essential for accessibility and SEO
2. **Use appropriate formats**: JPEG for photos, PNG for graphics, SVG for icons
3. **Optimize file sizes**: Compress images for faster loading
4. **Implement responsive images**: Use `srcset` and `picture` for different devices
5. **Set width and height**: Prevent layout shift and improve performance
6. **Use lazy loading**: Load images only when needed
7. **Provide meaningful captions**: Help users understand image context
8. **Test with screen readers**: Ensure images are properly announced
9. **Use vector graphics when possible**: SVG files are scalable and lightweight
10. **Consider accessibility**: Provide text alternatives and proper ARIA labels

Proper image implementation enhances user experience, improves performance, and ensures accessibility for all users.