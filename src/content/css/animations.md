# Transitions & Animations

CSS transitions and animations allow you to create smooth, engaging user experiences by adding motion to your interfaces. Understanding when and how to use them effectively is crucial for modern web design.

## CSS Transitions

### Basic Transitions

```css
/* Simple color transition */
.button {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
}

/* Transition with multiple properties */
.card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: 
        background-color 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

.card:hover {
    background-color: #f8f9fa;
    border-color: #007bff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
```

### Transition Properties

```css
/* Transition property (which CSS property to animate) */
.transition-property {
    transition-property: transform;
    transition-property: color;
    transition-property: all; /* Animate all animatable properties */
}

/* Transition duration */
.transition-duration {
    transition-duration: 0.2s;
    transition-duration: 500ms;
    transition-duration: 0.3s, 0.5s; /* Different durations for different properties */
}

/* Transition timing function */
.transition-timing {
    transition-timing-function: ease;          /* Default - slow start, fast middle, slow end */
    transition-timing-function: ease-in;       /* Slow start, fast end */
    transition-timing-function: ease-out;      /* Fast start, slow end */
    transition-timing-function: ease-in-out;   /* Slow start, fast middle, slow end */
    transition-timing-function: linear;        /* Constant speed */
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* Custom bezier */
}

/* Transition delay */
.transition-delay {
    transition-delay: 0.1s;    /* Wait before starting */
    transition-delay: 0.5s;    /* Longer delay */
}
```

### Transition Shorthand

```css
/* Complete transition shorthand */
/* transition: property duration timing-function delay; */
.shorthand {
    transition: transform 0.3s ease-in-out 0.1s;
}

/* Multiple transitions */
.multiple {
    transition: 
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.3s ease,
        background-color 0.2s linear;
}

/* Transition all properties */
.all-properties {
    transition: all 0.3s ease;
}
```

### Common Transition Patterns

```css
/* Button hover effect */
.btn {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 
        background-color 0.2s ease,
        transform 0.1s ease,
        box-shadow 0.2s ease;
}

.btn:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
}

/* Card hover effect */
.card-hover {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #007bff;
}

/* Image zoom effect */
.image-zoom {
    overflow: hidden;
    border-radius: 8px;
}

.image-zoom img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-zoom:hover img {
    transform: scale(1.1);
}

/* Loading spinner */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

## CSS Animations

### Basic Keyframes

```css
/* Define keyframe animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply animation */
.fade-in {
    animation: fadeIn 0.6s ease-out;
}

/* Slide in from left */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.slide-in-left {
    animation: slideInLeft 0.5s ease-out;
}

/* Bounce effect */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

.bounce {
    animation: bounce 2s;
}
```

### Animation Properties

```css
/* Animation name */
.animation-name {
    animation-name: fadeIn;
    animation-name: slideInLeft;
    animation-name: bounce;
}

/* Animation duration */
.animation-duration {
    animation-duration: 0.5s;
    animation-duration: 2s;
    animation-duration: 300ms;
}

/* Animation timing function */
.animation-timing {
    animation-timing-function: ease;
    animation-timing-function: ease-in-out;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    animation-timing-function: steps(5, end);
}

/* Animation delay */
.animation-delay {
    animation-delay: 0.5s;
    animation-delay: 1s;
}

/* Animation iteration count */
.animation-iteration {
    animation-iteration-count: 1;        /* Default */
    animation-iteration-count: 2;
    animation-iteration-count: infinite; /* Loop forever */
}

/* Animation direction */
.animation-direction {
    animation-direction: normal;         /* Default - forward */
    animation-direction: reverse;        /* Backward */
    animation-direction: alternate;      /* Forward, then backward */
    animation-direction: alternate-reverse; /* Backward, then forward */
}

/* Animation fill mode */
.animation-fill {
    animation-fill-mode: none;           /* Default - no fill */
    animation-fill-mode: forwards;       /* Keep end state */
    animation-fill-mode: backwards;      /* Apply start state */
    animation-fill-mode: both;           /* Both forwards and backwards */
}

/* Animation play state */
.animation-play {
    animation-play-state: running;       /* Default - playing */
    animation-play-state: paused;        /* Pause animation */
}
```

### Animation Shorthand

```css
/* Complete animation shorthand */
/* animation: name duration timing-function delay iteration-count direction fill-mode; */
.shorthand {
    animation: fadeIn 0.6s ease-out 0.2s 1 normal both;
}

/* Multiple animations */
.multiple-animations {
    animation: 
        fadeIn 0.6s ease-out,
        slideUp 0.8s ease-out 0.3s,
        fadeInUp 1s ease-out 0.5s;
}

/* Simple animation */
.simple {
    animation: spin 1s linear infinite;
}
```

### Advanced Keyframe Patterns

```css
/* Pulse animation */
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}

/* Shake animation */
@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
        transform: translateX(10px);
    }
}

.shake {
    animation: shake 0.5s ease-in-out;
}

/* Typing effect */
@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

.typing-effect {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid #007bff;
    animation: 
        typing 3s steps(40) 1s 1 normal both,
        blink 0.75s step-end infinite;
}

/* Morphing effect */
@keyframes morph {
    0%, 100% {
        border-radius: 50% 20% 30% 40%;
    }
    25% {
        border-radius: 30% 50% 20% 40%;
    }
    50% {
        border-radius: 40% 30% 50% 20%;
    }
    75% {
        border-radius: 20% 40% 30% 50%;
    }
}

.morph {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, #007bff, #6f42c1);
    animation: morph 4s ease-in-out infinite;
}
```

## Transform Property

### 2D Transforms

```css
/* Translation */
.translate {
    transform: translate(50px, 100px); /* move right 50px, down 100px */
    transform: translateX(50px);        /* move right 50px */
    transform: translateY(100px);       /* move down 100px */
}

/* Rotation */
.rotate {
    transform: rotate(45deg);           /* rotate 45 degrees clockwise */
    transform: rotate(-45deg);          /* rotate 45 degrees counter-clockwise */
}

/* Scale */
.scale {
    transform: scale(1.5);              /* 1.5 times larger */
    transform: scale(0.5);              /* half size */
    transform: scale(2, 1);             /* 2x width, 1x height */
    transform: scaleX(2);               /* 2x width */
    transform: scaleY(0.5);             /* half height */
}

/* Skew */
.skew {
    transform: skew(20deg);             /* skew 20 degrees */
    transform: skewX(20deg);            /* skew horizontally */
    transform: skewY(20deg);            /* skew vertically */
}

/* Combined transforms */
.combined {
    transform: translate(50px, 100px) rotate(45deg) scale(1.2);
    /* Order matters! Applied right to left */
}
```

### 3D Transforms

```css
/* 3D translation */
.translate-3d {
    transform: translate3d(50px, 100px, 25px);
    transform: translateZ(25px);        /* move along Z-axis */
}

/* 3D rotation */
.rotate-3d {
    transform: rotateX(45deg);          /* rotate around X-axis */
    transform: rotateY(45deg);          /* rotate around Y-axis */
    transform: rotateZ(45deg);          /* rotate around Z-axis */
    transform: rotate3d(1, 0, 0, 45deg); /* custom 3D rotation */
}

/* 3D perspective */
.perspective {
    perspective: 1000px;                /* set perspective for children */
}

.transform-3d {
    transform-style: preserve-3d;       /* preserve 3D space */
    transform: rotateY(45deg);
}

/* Backface visibility */
.backface {
    backface-visibility: hidden;        /* hide back of element */
    backface-visibility: visible;       /* show back of element */
}
```

## Performance Optimization

### Hardware Acceleration

```css
/* Use transform3d to trigger GPU acceleration */
.gpu-accelerated {
    transform: translate3d(0, 0, 0);
    /* or */
    transform: translateZ(0);
}

/* Optimize animations */
.optimized-animation {
    /* Animate only transform and opacity */
    will-change: transform, opacity;    /* hint browser for optimization */
}

/* Disable text selection during animations */
.no-select {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

/* Optimize for painting */
.paint-optimized {
    transform: translateZ(0);           /* promote to own layer */
    backface-visibility: hidden;        /* prevent flickering */
}
```

### Animation Performance

```css
/* Best practices for smooth animations */

/* Animate only transform and opacity */
.good-animation {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.bad-animation {
    transition: left 0.3s ease, top 0.3s ease; /* Causes reflow */
}

/* Use will-change sparingly */
.will-change {
    will-change: transform; /* Remove after animation completes */
}

/* Debounce animations */
.debounced {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Use appropriate timing functions */
.timing-functions {
    /* Material Design timing */
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## User Preferences

### Respect Reduced Motion

```css
/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* Disable specific animations */
@media (prefers-reduced-motion: reduce) {
    .parallax {
        transform: none !important;
    }
    
    .hover-effect:hover {
        transform: none !important;
    }
    
    .spinner {
        animation: none !important;
        border-top-color: #007bff;
    }
}
```

### High Contrast Support

```css
/* Ensure animations work in high contrast mode */
@media (prefers-contrast: high) {
    .animated-element {
        animation-duration: 0.1s;
        border: 2px solid;
    }
}
```

## Animation Patterns

### Loading Animations

```css
/* Simple spinner */
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Dots loading animation */
@keyframes dots {
    0%, 20% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    80%, 100% {
        opacity: 0;
    }
}

.dots {
    display: flex;
    gap: 4px;
}

.dot {
    width: 8px;
    height: 8px;
    background-color: #007bff;
    border-radius: 50%;
    animation: dots 1.4s infinite ease-in-out;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }

/* Pulse loading */
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
}

.pulse-loading {
    animation: pulse 1.5s ease-in-out infinite;
}
```

### Hover Effects

```css
/* Image overlay effect */
.image-overlay {
    position: relative;
    overflow: hidden;
}

.image-overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 123, 255, 0.8);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-overlay:hover::before {
    opacity: 1;
}

.image-overlay::after {
    content: 'View Details';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-overlay:hover::after {
    opacity: 1;
}

/* Card lift effect */
.card-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-lift:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* Button ripple effect */
.btn-ripple {
    position: relative;
    overflow: hidden;
}

.btn-ripple::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-ripple:active::after {
    width: 300px;
    height: 300px;
}
```

### Entrance Animations

```css
/* Staggered animation */
.stagger-container > * {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
}

.stagger-container > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-container > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-container > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-container > *:nth-child(4) { animation-delay: 0.4s; }
.stagger-container > *:nth-child(5) { animation-delay: 0.5s; }

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Slide in from different directions */
.slide-left {
    animation: slideInLeft 0.5s ease-out;
}

.slide-right {
    animation: slideInRight 0.5s ease-out;
}

.slide-up {
    animation: slideInUp 0.5s ease-out;
}

.slide-down {
    animation: slideInDown 0.5s ease-out;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Micro-Interactions

```css
/* Focus animation for form inputs */
.form-input {
    border: 2px solid #ddd;
    padding: 12px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    outline: none;
}

/* Toggle switch animation */
.toggle {
    width: 60px;
    height: 30px;
    background: #ddd;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s ease;
}

.toggle.active {
    background: #007bff;
}

.toggle::before {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: transform 0.3s ease;
}

.toggle.active::before {
    transform: translateX(30px);
}

/* Like button animation */
.like-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.like-btn:hover {
    transform: scale(1.1);
}

.like-btn.liked {
    color: #e74c3c;
    animation: heartBeat 0.6s ease;
}

@keyframes heartBeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
}
```

## Animation Libraries Integration

### Using CSS Custom Properties for Dynamic Animations

```css
/* CSS custom properties for animation control */
:root {
    --animation-duration: 0.3s;
    --animation-timing: ease;
    --animation-delay: 0s;
}

.dynamic-animation {
    animation-duration: var(--animation-duration);
    animation-timing-function: var(--animation-timing);
    animation-delay: var(--animation-delay);
}

/* JavaScript can update these values */
.enhanced-animation {
    --animation-duration: 0.5s;
    --animation-timing: cubic-bezier(0.4, 0, 0.2, 1);
    --animation-delay: 0.2s;
}
```

### Intersection Observer Animation Triggers

```css
/* Animation triggered by scroll */
.scroll-animation {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-animation.in-view {
    opacity: 1;
    transform: translateY(0);
}

/* Different animation delays based on index */
.scroll-animation:nth-child(1) { transition-delay: 0.1s; }
.scroll-animation:nth-child(2) { transition-delay: 0.2s; }
.scroll-animation:nth-child(3) { transition-delay: 0.3s; }
.scroll-animation:nth-child(4) { transition-delay: 0.4s; }
.scroll-animation:nth-child(5) { transition-delay: 0.5s; }
```

## Best Practices

### Performance
1. **Animate only transform and opacity**: These properties are GPU-accelerated
2. **Use will-change sparingly**: Only for elements that will be animated
3. **Avoid animating layout properties**: left, top, width, height cause reflow
4. **Use hardware acceleration**: translate3d(0,0,0) to promote to GPU layer
5. **Debounce animations**: Prevent excessive animations on user interactions

### Accessibility
1. **Respect prefers-reduced-motion**: Disable animations for users who prefer less motion
2. **Provide alternatives**: Consider non-animated feedback for critical information
3. **Avoid seizure-inducing animations**: No flashing content more than 3 times per second
4. **Test with screen readers**: Ensure animations don't interfere with assistive technology

### User Experience
1. **Keep animations subtle**: Enhance the experience, don't distract
2. **Use meaningful timing**: Match animation duration to interaction feedback
3. **Provide visual feedback**: Show loading states and interaction responses
4. **Consider context**: Different animations for different types of content
5. **Test across devices**: Ensure animations perform well on all target devices

### Code Quality
1. **Use semantic naming**: Name animations based on purpose, not implementation
2. **Reuse animations**: Create reusable animation classes
3. **Document complex animations**: Comment on non-obvious animation logic
4. **Group related properties**: Keep animation properties together
5. **Use CSS custom properties**: For dynamic animation control

CSS transitions and animations, when used thoughtfully, create engaging, accessible, and performant user experiences that enhance rather than hinder usability.