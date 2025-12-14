# Forms & Input

Forms are essential for collecting user input on web pages. Understanding how to create accessible, semantic, and user-friendly forms is crucial for web development.

## Basic Form Structure

### The `<form>` Element

```html
<form action="/submit-form" method="POST">
    <!-- Form fields go here -->
</form>
```

### Form Attributes

```html
<!-- Form with various attributes -->
<form action="/submit-form" 
      method="POST" 
      enctype="multipart/form-data"
      autocomplete="on"
      novalidate
      target="_blank">
    <!-- Form content -->
</form>
```

## Input Elements

### Text Inputs

```html
<!-- Basic text input -->
<input type="text" name="username" placeholder="Enter your username">

<!-- Email input with validation -->
<input type="email" name="email" placeholder="your@email.com" required>

<!-- Password input -->
<input type="password" name="password" placeholder="Enter password">

<!-- Search input -->
<input type="search" name="search" placeholder="Search...">

<!-- URL input -->
<input type="url" name="website" placeholder="https://example.com">

<!-- Telephone input -->
<input type="tel" name="phone" placeholder="(123) 456-7890">
```

### Number and Range Inputs

```html
<!-- Number input -->
<input type="number" name="age" min="18" max="100" step="1">

<!-- Range input -->
<input type="range" name="volume" min="0" max="100" value="50">
```

### Date and Time Inputs

```html
<!-- Date input -->
<input type="date" name="birthdate">

<!-- Time input -->
<input type="time" name="appointment-time">

<!-- Datetime-local input -->
<input type="datetime-local" name="meeting-datetime">

<!-- Month input -->
<input type="month" name="birth-month">

<!-- Week input -->
<input type="week" name="vacation-week">
```

### File and Color Inputs

```html
<!-- File input -->
<input type="file" name="document" accept=".pdf,.doc,.docx">

<!-- Color input -->
<input type="color" name="favorite-color" value="#007bff">

<!-- Hidden input -->
<input type="hidden" name="user-id" value="12345">
```

## Text Areas

```html
<!-- Basic textarea -->
<textarea name="message" rows="4" cols="50" placeholder="Enter your message"></textarea>

<!-- Resizable textarea -->
<textarea name="description" 
          rows="6" 
          cols="40" 
          placeholder="Describe your project..."></textarea>
```

## Select Elements

### Basic Select

```html
<select name="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
    <option value="au">Australia</option>
</select>
```

### Multiple Select

```html
<select name="skills" multiple size="4">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="javascript">JavaScript</option>
    <option value="python">Python</option>
    <option value="java">Java</option>
</select>
```

### Optgroup

```html
<select name="category">
    <optgroup label="Frontend">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
    </optgroup>
    <optgroup label="Backend">
        <option value="nodejs">Node.js</option>
        <option value="python">Python</option>
        <option value="php">PHP</option>
    </optgroup>
</select>
```

## Checkboxes and Radio Buttons

### Checkboxes

```html
<!-- Single checkbox -->
<input type="checkbox" name="terms" id="terms" required>
<label for="terms">I agree to the terms and conditions</label>

<!-- Multiple checkboxes -->
<fieldset>
    <legend>Programming Languages</legend>
    <input type="checkbox" name="languages" value="html" id="html">
    <label for="html">HTML</label>
    
    <input type="checkbox" name="languages" value="css" id="css">
    <label for="css">CSS</label>
    
    <input type="checkbox" name="languages" value="javascript" id="javascript">
    <label for="javascript">JavaScript</label>
</fieldset>
```

### Radio Buttons

```html
<!-- Radio button group -->
<fieldset>
    <legend>Experience Level</legend>
    <input type="radio" name="experience" value="beginner" id="beginner" checked>
    <label for="beginner">Beginner</label>
    
    <input type="radio" name="experience" value="intermediate" id="intermediate">
    <label for="intermediate">Intermediate</label>
    
    <input type="radio" name="experience" value="advanced" id="advanced">
    <label for="advanced">Advanced</label>
</fieldset>
```

## Form Labels and Associations

### Explicit Label Association

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" required>

<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

### Implicit Label Association

```html
<label>
    Username:
    <input type="text" name="username" required>
</label>

<label>
    Email:
    <input type="email" name="email" required>
</label>
```

### ARIA Labels

```html
<!-- Using aria-label -->
<input type="text" name="username" aria-label="Enter your username">

<!-- Using aria-labelledby -->
<label id="username-label">Username:</label>
<input type="text" name="username" aria-labelledby="username-label">

<!-- Using aria-describedby -->
<label for="password">Password:</label>
<input type="password" id="password" name="password" aria-describedby="password-help">
<div id="password-help">Password must be at least 8 characters long</div>
```

## Form Validation

### HTML5 Validation Attributes

```html
<input type="email" name="email" required>
<input type="text" name="username" minlength="3" maxlength="20" required>
<input type="number" name="age" min="18" max="120" required>
<input type="url" name="website" pattern="https?://.+">
<input type="text" name="code" pattern="[A-Za-z]{3}" title="Three letter code">
```

### Custom Validation Messages

```html
<form id="custom-form">
    <input type="email" name="email" required 
           oninvalid="setCustomValidity('Please enter a valid email address')"
           oninput="setCustomValidity('')">
    
    <input type="password" name="password" required 
           oninvalid="setCustomValidity('Password is required')"
           oninput="setCustomValidity('')">
</form>
```

## Fieldset and Legend

```html
<!-- Grouping related form elements -->
<fieldset>
    <legend>Personal Information</legend>
    
    <label for="first-name">First Name:</label>
    <input type="text" id="first-name" name="first-name" required>
    
    <label for="last-name">Last Name:</label>
    <input type="text" id="last-name" name="last-name" required>
    
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" required>
</fieldset>

<fieldset>
    <legend>Contact Information</legend>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone">
</fieldset>
```

## Button Elements

```html
<!-- Submit button -->
<button type="submit">Submit Form</button>

<!-- Reset button -->
<button type="reset">Reset Form</button>

<!-- Button without default behavior -->
<button type="button" onclick="performAction()">Custom Action</button>

<!-- Image button -->
<button type="submit">
    <img src="submit-icon.png" alt="Submit form">
    Submit
</button>

<!-- Input buttons -->
<input type="submit" value="Submit Form">
<input type="reset" value="Reset Form">
<input type="button" value="Custom Action" onclick="performAction()">
```

## Complete Form Example

```html
<form action="/submit-registration" method="POST" enctype="multipart/form-data">
    <fieldset>
        <legend>Registration Form</legend>
        
        <!-- Personal Information -->
        <div>
            <label for="first-name">First Name *</label>
            <input type="text" id="first-name" name="first-name" required 
                   aria-describedby="first-name-help">
            <small id="first-name-help">Enter your legal first name</small>
        </div>
        
        <div>
            <label for="last-name">Last Name *</label>
            <input type="text" id="last-name" name="last-name" required>
        </div>
        
        <div>
            <label for="email">Email Address *</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div>
            <label for="password">Password *</label>
            <input type="password" id="password" name="password" 
                   minlength="8" required aria-describedby="password-requirements">
            <small id="password-requirements">
                Must be at least 8 characters long
            </small>
        </div>
        
        <div>
            <label for="confirm-password">Confirm Password *</label>
            <input type="password" id="confirm-password" name="confirm-password" required>
        </div>
        
        <!-- Profile Information -->
        <fieldset>
            <legend>Profile Information</legend>
            
            <div>
                <label for="bio">Bio</label>
                <textarea id="bio" name="bio" rows="4" 
                          placeholder="Tell us about yourself..."></textarea>
            </div>
            
            <div>
                <label for="website">Personal Website</label>
                <input type="url" id="website" name="website" 
                       placeholder="https://example.com">
            </div>
            
            <div>
                <label for="profile-picture">Profile Picture</label>
                <input type="file" id="profile-picture" name="profile-picture" 
                       accept="image/*">
            </div>
        </fieldset>
        
        <!-- Preferences -->
        <fieldset>
            <legend>Preferences</legend>
            
            <div>
                <label for="newsletter-frequency">Newsletter Frequency</label>
                <select id="newsletter-frequency" name="newsletter-frequency">
                    <option value="daily">Daily</option>
                    <option value="weekly" selected>Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="never">Never</option>
                </select>
            </div>
            
            <div>
                <p>Preferred Contact Method:</p>
                <input type="radio" id="contact-email" name="contact-method" value="email" checked>
                <label for="contact-email">Email</label>
                
                <input type="radio" id="contact-phone" name="contact-method" value="phone">
                <label for="contact-phone">Phone</label>
            </div>
            
            <div>
                <p>Interests:</p>
                <input type="checkbox" id="web-dev" name="interests" value="web-dev">
                <label for="web-dev">Web Development</label>
                
                <input type="checkbox" id="mobile-dev" name="interests" value="mobile-dev">
                <label for="mobile-dev">Mobile Development</label>
                
                <input type="checkbox" id="data-science" name="interests" value="data-science">
                <label for="data-science">Data Science</label>
                
                <input type="checkbox" id="ai-ml" name="interests" value="ai-ml">
                <label for="ai-ml">AI/Machine Learning</label>
            </div>
        </fieldset>
        
        <!-- Terms and Conditions -->
        <div>
            <input type="checkbox" id="terms" name="terms" required>
            <label for="terms">I agree to the <a href="/terms">Terms and Conditions</a> *</label>
        </div>
        
        <div>
            <input type="checkbox" id="privacy" name="privacy">
            <label for="privacy">I agree to the <a href="/privacy">Privacy Policy</a></label>
        </div>
        
        <!-- Form Actions -->
        <div>
            <button type="submit">Create Account</button>
            <button type="reset">Clear Form</button>
        </div>
    </fieldset>
</form>
```

## Form Accessibility Best Practices

1. **Always use labels**: Associate labels with form controls
2. **Provide clear instructions**: Use placeholder text and help text
3. **Group related elements**: Use fieldset and legend for grouping
4. **Indicate required fields**: Use visual indicators and ARIA attributes
5. **Show validation errors**: Provide clear error messages
6. **Ensure keyboard navigation**: All controls should be accessible via keyboard
7. **Use proper input types**: Leverage HTML5 input types for better UX
8. **Test with screen readers**: Verify forms work with assistive technologies
9. **Provide alternative text**: For image buttons and complex controls
10. **Consider mobile users**: Ensure touch targets are appropriately sized

Proper form implementation creates accessible, user-friendly interfaces that work well for all users.