# Operators & Expressions

JavaScript operators are symbols that perform operations on operands. Understanding operators is essential for writing effective JavaScript code.

## Arithmetic Operators

### Basic Arithmetic

```javascript
// Addition
let sum = 5 + 3; // 8
let stringConcat = "Hello " + "World"; // "Hello World"
let mixed = 5 + "5"; // "55" (type coercion)

// Subtraction
let difference = 10 - 4; // 6
let negative = -5 - 3; // -8

// Multiplication
let product = 6 * 7; // 42
let zero = 5 * 0; // 0

// Division
let quotient = 15 / 3; // 5
let decimal = 10 / 3; // 3.333...
let divisionByZero = 10 / 0; // Infinity

// Modulus (remainder)
let remainder = 17 % 5; // 2
let even = 10 % 2; // 0
let odd = 7 % 2; // 1

// Exponentiation (ES2016)
let power = 2 ** 3; // 8 (2³)
let square = 5 ** 2; // 25
let negativeExponent = 2 ** -2; // 0.25
```

### Increment and Decrement

```javascript
// Pre-increment
let a = 5;
let result = ++a; // result = 6, a = 6

// Post-increment
let b = 5;
let result2 = b++; // result2 = 5, b = 6

// Pre-decrement
let c = 5;
let result3 = --c; // result3 = 4, c = 4

// Post-decrement
let d = 5;
let result4 = d--; // result4 = 5, d = 4

// Practical examples
let counter = 0;
counter++; // 0 (post-increment)
++counter; // 2 (pre-increment)
counter--; // 2 (post-decrement)
--counter; // 0 (pre-decrement)
```

## Assignment Operators

### Basic Assignment

```javascript
// Simple assignment
let x = 10;
let y = 20;

// Assignment with operation
x += 5; // x = x + 5 (x = 15)
x -= 3; // x = x - 3 (x = 12)
x *= 2; // x = x * 2 (x = 24)
x /= 4; // x = x / 4 (x = 6)
x %= 5; // x = x % 5 (x = 1)
x **= 3; // x = x ** 3 (x = 1)

// String assignment
let str = "Hello";
str += " World"; // str = "Hello World"

// Complex assignment
let total = 0;
total += item1; // total = total + item1
total += item2; // total = total + item2
total *= quantity; // total = total * quantity
```

### Destructuring Assignment (ES6)

```javascript
// Array destructuring
let [first, second, third] = [1, 2, 3];
// first = 1, second = 2, third = 3

// Object destructuring
let {name, age, city} = {name: "John", age: 30, city: "New York"};
// name = "John", age = 30, city = "New York"

// Default values
let [a, b = 5] = [1]; // a = 1, b = 5
let {x, y = 10} = {x: 2}; // x = 2, y = 10

// Rest syntax
let [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]

let {name, ...otherProps} = {name: "John", age: 30, city: "NYC"};
// name = "John", otherProps = {age: 30, city: "NYC"}

// Swapping variables
let num1 = 10, num2 = 20;
[num1, num2] = [num2, num1];
// num1 = 20, num2 = 10
```

## Comparison Operators

### Loose Equality (==)

```javascript
// Number comparisons
5 == 5; // true
5 == '5'; // true (type coercion)
0 == false; // true (0 converts to false)
1 == true; // true (1 converts to true)

// String comparisons
'hello' == 'hello'; // true
'hello' == 'world'; // false

// Special cases
null == undefined; // true
null == 0; // false
undefined == 0; // false
NaN == NaN; // false (NaN is not equal to anything)
```

### Strict Equality (===)

```javascript
// Recommended for most comparisons
5 === 5; // true
5 === '5'; // false (different types)
'hello' === 'hello'; // true
'hello' === 'world'; // false

// Special cases
null === undefined; // false
null === null; // true
undefined === undefined; // true
NaN === NaN; // false
```

### Inequality Operators

```javascript
// Loose inequality (!=)
5 != 3; // true
5 != '5'; // false (type coercion)
'hello' != 'world'; // true

// Strict inequality (!==)
5 !== 3; // true
5 !== '5'; // true (different types)
'hello' !== 'world'; // true

// Greater than and less than
10 > 5; // true
5 > 10; // false
5 >= 5; // true (greater than or equal)
3 <= 5; // true (less than or equal)

// String comparisons (lexicographic)
'apple' > 'banana'; // false
'Zebra' > 'apple'; // true (uppercase letters come before lowercase)
```

## Logical Operators

### AND (&&)

```javascript
// Returns first falsy value or last value if all are truthy
true && true; // true
true && false; // false
false && true; // false
5 && 3; // 3 (last value)
0 && 5; // 0 (first falsy value)
null && 'hello'; // null

// Practical usage
let isLoggedIn = true;
let hasPermission = false;
let canAccess = isLoggedIn && hasPermission; // false

// Guard clauses
function getUserName(user) {
    return user && user.name; // Returns user.name if user exists
}
```

### OR (||)

```javascript
// Returns first truthy value or last value if all are falsy
true || false; // true
false || true; // true
5 || 3; // 5 (first truthy value)
0 || 5; // 5 (first truthy value)
null || undefined; // undefined (both falsy)

null || 'default'; // 'default'
undefined || 0 || 'fallback'; // 'fallback'

// Practical usage
let userName = userInput || 'Anonymous';
let port = process.env.PORT || 3000;

// Default parameters (modern alternative)
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
```

### NOT (!)

```javascript
// Converts to boolean and negates
!true; // false
!false; // true
!0; // true (0 is falsy)
!5; // false (5 is truthy)
!''; // true (empty string is falsy)
!'hello'; // false

// Double negation
!!5; // true
!!0; // false

// Check for truthy/falsy values
function isTruthy(value) {
    return !!value;
}

function isFalsy(value) {
    return !value;
}
```

## Bitwise Operators

### Bitwise AND (&)

```javascript
// Performs AND operation on each bit
5 & 3; // 1 (0101 & 0011 = 0001)
12 & 10; // 8 (1100 & 1010 = 1000)

// Practical usage
// Check if number is even
function isEven(num) {
    return (num & 1) === 0;
}

// Check if bit is set
function isBitSet(number, bit) {
    return (number & (1 << bit)) !== 0;
}
```

### Bitwise OR (|)

```javascript
// Performs OR operation on each bit
5 | 3; // 7 (0101 | 0011 = 0111)
12 | 10; // 14 (1100 | 1010 = 1110)

// Set bits
function setBit(number, bit) {
    return number | (1 << bit);
}
```

### Bitwise XOR (^)

```javascript
// Performs XOR operation on each bit
5 ^ 3; // 6 (0101 ^ 0011 = 0110)
12 ^ 10; // 6 (1100 ^ 1010 = 0110)

// Toggle bits
function toggleBit(number, bit) {
    return number ^ (1 << bit);
}

// Swap without temporary variable
let a = 5, b = 3;
a ^= b; // a = 6
b ^= a; // b = 5
a ^= b; // a = 3
```

### Bitwise NOT (~)

```javascript
// Inverts all bits
~5; // -6
~0; // -1
~-1; // 0

// Practical usage
// Find index in array
let colors = ['red', 'green', 'blue'];
let greenIndex = colors.indexOf('green'); // 1
let notFound = colors.indexOf('yellow'); // -1

// Check if not found
if (~greenIndex) {
    console.log('Found at index', greenIndex);
}
```

### Shift Operators

```javascript
// Left shift (<<)
5 << 2; // 20 (0101 << 2 = 10100)

// Right shift (>>)
5 >> 2; // 1 (0101 >> 2 = 0001)
-5 >> 2; // -2 (sign preserved)

// Unsigned right shift (>>>)
-5 >>> 2; // 1073741822 (treats as unsigned)

// Practical usage
// Multiply by 2^n
function multiplyByPowerOf2(number, power) {
    return number << power;
}

// Divide by 2^n (with truncation)
function divideByPowerOf2(number, power) {
    return number >> power;
}
```

## Ternary Operator (Conditional)

```javascript
// Basic ternary
let age = 18;
let status = age >= 18 ? 'adult' : 'minor';
// status = 'adult'

// Nested ternary
let score = 85;
let grade = score >= 90 ? 'A' : 
           score >= 80 ? 'B' : 
           score >= 70 ? 'C' : 'F';

// Practical usage
let welcomeMessage = isLoggedIn ? `Welcome back, ${username}!` : 'Please log in.';
let buttonText = isLoading ? 'Loading...' : 'Submit';
let theme = prefersDarkMode ? 'dark' : 'light';

// Function returns
function getDiscountPrice(price, isMember) {
    return isMember ? price * 0.9 : price;
}
```

## typeof Operator

```javascript
// Type checking
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof {}; // "object"
typeof []; // "object"
typeof null; // "object" (historical bug)
typeof function() {}; // "function"

// Practical type checking
function isNumber(value) {
    return typeof value === 'number';
}

function isString(value) {
    return typeof value === 'string';
}

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

function isArray(value) {
    return Array.isArray(value);
}

function isFunction(value) {
    return typeof value === 'function';
}
```

## instanceof Operator

```javascript
// Check if object is instance of constructor
let date = new Date();
date instanceof Date; // true
date instanceof Object; // true
date instanceof Array; // false

let array = [1, 2, 3];
array instanceof Array; // true
array instanceof Object; // true

// Custom constructors
function Person(name) {
    this.name = name;
}

let john = new Person('John');
john instanceof Person; // true
john instanceof Object; // true

// Practical usage
function logValue(value) {
    if (value instanceof Date) {
        console.log('Date:', value.toLocaleDateString());
    } else if (value instanceof Array) {
        console.log('Array:', value.join(', '));
    } else {
        console.log('Other:', value);
    }
}
```

## void Operator

```javascript
// Evaluates expression and returns undefined
void 0; // undefined
void 'hello'; // undefined
void (1 + 1); // undefined

// Practical usage
// Prevent default action in links
<a href="javascript:void(0)">Click me</a>
<a href="javascript:void(document.body.style.backgroundColor='red')">Red background</a>

// Immediately invoked function expressions
void function() {
    console.log('This runs and returns undefined');
}();

// In bookmarklets
javascript:void(document.body.classList.toggle('dark-mode'))
```

## delete Operator

```javascript
// Delete object properties
let obj = {name: 'John', age: 30};
delete obj.name; // true
console.log(obj); // {age: 30}

// Delete array elements (creates sparse array)
let arr = [1, 2, 3, 4, 5];
delete arr[2]; // true
console.log(arr); // [1, 2, <1 empty slot>, 4, 5]
console.log(arr.length); // 5 (length unchanged)

// Cannot delete variables
let variable = 'test';
// delete variable; // SyntaxError

// Cannot delete array length
let testArr = [1, 2, 3];
// delete testArr.length; // false

// Practical usage
function removeProperty(obj, prop) {
    return delete obj[prop];
}
```

## comma Operator

```javascript
// Evaluates expressions left to right, returns last value
let result = (1, 2, 3); // 3

// Practical usage
// In for loops
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}

// Multiple variable declarations
let a = 1, b = 2, c = 3;

// Return multiple values from function
function getCoordinates() {
    let x = 10, y = 20;
    return (x, y); // Returns y (20)
}
```

## Operator Precedence

```javascript
// Highest to lowest precedence
// 1. Grouping: ()
// 2. Member access: . [] ()
// 3. Logical NOT: !
4. Bitwise NOT: ~
// 5. Unary +/-
// 6. Multiplication/Division: * / %
// 7. Addition/Subtraction: + -
// 8. Bitwise shifts: << >> >>>
// 9. Comparison: < <= > >=
// 10. Equality: == != === !==
// 11. Bitwise AND: &
// 12. Bitwise XOR: ^
// 13. Bitwise OR: |
// 14. Logical AND: &&
// 15. Logical OR: ||
// 16. Ternary: ? :
// 17. Assignment: = += -= etc.

// Examples
let result1 = 2 + 3 * 4; // 2 + (3 * 4) = 14
let result2 = (2 + 3) * 4; // (2 + 3) * 4 = 20

let result3 = a && b || c; // (a && b) || c
let result4 = a || b && c; // a || (b && c)
```

## Best Practices

### Use Strict Equality

```javascript
// Good
if (userInput === '') {
    // Handle empty input
}

// Avoid
if (userInput == '') {
    // Could match 0, false, null, etc.
}
```

### Avoid Type Coercion Pitfalls

```javascript
// Good - explicit conversion
let number = parseInt(userInput, 10);
let boolean = Boolean(userInput);

// Avoid implicit coercion
if (userInput) { /* Could be truthy string */ }
if (userInput == false) { /* Confusing behavior */ }
```

### Use Descriptive Variable Names

```javascript
// Good
let hasValidEmail = email.includes('@');
let isUserAdmin = user.role === 'admin';
let canEditPost = user.permissions.includes('edit');

// Avoid
let e = email.includes('@');
let r = user.role === 'admin';
```

### Short-Circuit Evaluation

```javascript
// Good - use short-circuit for default values
function greet(name) {
    return `Hello, ${name || 'Guest'}!`;
}

// Good - guard clauses
function processData(data) {
    if (!data) return;
    // Process data
}

// Avoid unnecessary conditions
// Bad
if (isLoggedIn === true) {
    // Allow access
}

// Good
if (isLoggedIn) {
    // Allow access
}
```

### Bitwise Operations for Performance

```javascript
// Good - use bitwise for performance-critical code
// Check if number is power of 2
function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', 
        document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    );
}
```

### Logical Operators for Code Organization

```javascript
// Good - early returns
function validateUser(user) {
    if (!user) return false;
    if (!user.name) return false;
    if (!user.email) return false;
    return true;
}

// Good - conditional rendering
function renderUserProfile(user) {
    return `
        <div class="profile">
            <h2>${user.name}</h2>
            ${user.bio ? `<p>${user.bio}</p>` : ''}
            ${user.avatar ? `<img src="${user.avatar}" alt="${user.name}">` : ''}
        </div>
    `;
}
```

### Avoid eval and Function Constructor

```javascript
// Bad - security and performance risks
// let result = eval(userInput);
// let func = new Function('return ' + userInput);

// Good - use JSON.parse for JSON
try {
    let data = JSON.parse(jsonString);
} catch (error) {
    console.error('Invalid JSON:', error);
}

// Good - use template literals for strings
function createHTML(name, age) {
    return `<div>
        <h2>${name}</h2>
        <p>Age: ${age}</p>
    </div>`;
}
```

Understanding operators and expressions is fundamental to writing effective JavaScript code. Master these concepts to write more concise and performant applications.