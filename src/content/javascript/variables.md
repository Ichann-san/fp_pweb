# Variables & Data Types

Variables are containers for storing data values. JavaScript has several ways to declare variables and supports different data types.

## Variable Declaration

### `var` (Function Scoped)

```javascript
// Function-scoped variable declaration
var functionScoped = 'I am function scoped';

// Can be redeclared
var functionScoped = 'I can be redeclared';

// Hoisted to top of function scope
console.log(hoistedVar); // undefined (not ReferenceError)
var hoistedVar = 'I am hoisted';

// Function scope example
function example() {
    var functionVar = 'I am inside function';
    if (true) {
        var blockVar = 'I am accessible outside block';
        console.log(blockVar); // Accessible here
    }
    console.log(blockVar); // Also accessible here (function scoped)
}
```

### `let` (Block Scoped)

```javascript
// Block-scoped variable declaration
let blockScoped = 'I am block scoped';

// Cannot be redeclared in same scope
let blockScoped = 'This will cause an error';

// Block scope example
function blockExample() {
    let blockVar = 'I am inside block';
    if (true) {
        let innerBlockVar = 'I am inside inner block';
        console.log(blockVar); // Accessible
        console.log(innerBlockVar); // Accessible here
    }
    // console.log(innerBlockVar); // ReferenceError - not accessible here
}

// Temporal dead zone
console.log(tdzVar); // ReferenceError
let tdzVar = 'I am in temporal dead zone';
```

### `const` (Block Scoped, Read-Only)

```javascript
// Block-scoped constant declaration
const PI = 3.14159;

// Cannot be reassigned
PI = 3.14; // TypeError

// Must be initialized
const uninitialized; // SyntaxError

// Block scoped like let
if (true) {
    const blockConst = 'I am block scoped';
    console.log(blockConst); // Accessible
}
// console.log(blockConst); // ReferenceError

// Object properties can be modified
const person = {
    name: 'John',
    age: 30
};

person.age = 31; // This is allowed
// person = {}; // This is not allowed (reassignment)

// Freeze object to prevent modification
Object.freeze(person);
// person.age = 32; // This would fail in strict mode
```

## Variable Naming Rules

```javascript
// Valid variable names
let validName = 'valid';
let _private = 'private';
let $special = 'special';
let camelCase = 'camelCase';
let withNumbers = 'valid123';
let unicode = 'こんにちは';

// Invalid variable names
// let 123invalid = 'starts with number';
// let invalid-name = 'contains dash';
// let invalid name = 'contains space';
// let class = 'reserved keyword';
// let function = 'reserved keyword';

// Use descriptive names
let userName = 'John Doe';
let totalAmount = 1000;
let isLoggedIn = false;
let userList = [];

// Constants should be uppercase
const MAX_SIZE = 100;
const API_URL = 'https://api.example.com';
const COLORS = ['red', 'blue', 'green'];
```

## Primitive Data Types

### Number

```javascript
// Integer
let integer = 42;
let negativeInteger = -17;

// Floating point
let floating = 3.14;
let scientific = 2.5e6; // 2.5 million

// Special values
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

// Number methods
let numString = '42.5';
let parsedNumber = parseInt(numString); // 42
let parsedFloat = parseFloat(numString); // 42.5

let rounded = Math.round(3.6); // 4
let ceiling = Math.ceil(3.1); // 4
let floor = Math.floor(3.9); // 3
let absolute = Math.abs(-5); // 5
let random = Math.random(); // 0 to 1 (exclusive)

// Number methods
let number = 42.567;
console.log(number.toFixed(2)); // "42.57"
console.log(number.toString()); // "42.567"
console.log(Number.isInteger(42)); // true
console.log(Number.isNaN(NaN)); // true
```

### String

```javascript
// String creation
let singleQuotes = 'Hello World';
let doubleQuotes = "Hello World";
let templateLiteral = `Hello World`;

// Template literals (interpolation)
let name = 'John';
let greeting = `Hello, ${name}!`; // "Hello, John!"
let expression = `The result is ${2 + 2}`; // "The result is 4"

// String methods
let text = 'JavaScript is awesome';
console.log(text.length); // 23
console.log(text.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log(text.toLowerCase()); // "javascript is awesome"
console.log(text.indexOf('is')); // 11
console.log(text.includes('awesome')); // true
console.log(text.slice(0, 10)); // "JavaScript"
console.log(text.substring(4, 10)); // "Script"
console.log(text.split(' ')); // ["JavaScript", "is", "awesome"]
console.log(text.replace('awesome', 'powerful')); // "JavaScript is powerful"

// String concatenation
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
let fullNameTemplate = `${firstName} ${lastName}`;
```

### Boolean

```javascript
// Boolean values
let isTrue = true;
let isFalse = false;

// Truthy values
if ('hello') console.log('String is truthy');
if (42) console.log('Number is truthy');
if ([]) console.log('Array is truthy');
if ({}) console.log('Object is truthy');

// Falsy values
if (!0) console.log('0 is falsy');
if (!'') console.log('Empty string is falsy');
if (!null) console.log('null is falsy');
if (!undefined) console.log('undefined is falsy');
if (!NaN) console.log('NaN is falsy');
if (!false) console.log('false is falsy');

// Boolean methods
let bool = true;
console.log(bool.toString()); // "true"

// Converting to boolean
console.log(Boolean('hello')); // true
console.log(!!'hello'); // true (double negation)
console.log(!!0); // false
```

### Undefined

```javascript
// Undefined value
let undefinedVar;
console.log(undefinedVar); // undefined

// Explicit undefined
let explicitUndefined = undefined;

// Undefined in objects
let obj = {};
console.log(obj.nonExistentProperty); // undefined

// typeof undefined
console.log(typeof undefinedVar); // "undefined"

// Check if variable is undefined
if (undefinedVar === undefined) {
    console.log('Variable is undefined');
}

if (typeof undefinedVar === 'undefined') {
    console.log('Variable type is undefined');
}
```

### Null

```javascript
// Null value
let nullVar = null;
console.log(nullVar); // null

// Null vs undefined
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)

// typeof null
console.log(typeof nullVar); // "object" (historical bug)

// Explicit null assignment
let intentionallyNull = null;

// Null in object properties
let person = {
    name: 'John',
    spouse: null // Intentionally no spouse
};

// Check for null
if (nullVar === null) {
    console.log('Variable is null');
}
```

## Reference Data Types

### Object

```javascript
// Object creation
let emptyObject = {};
let person = {
    name: 'John',
    age: 30,
    'favorite-color': 'blue', // Quoted property name
    sayHello: function() {
        return `Hello, I'm ${this.name}`;
    }
};

// Accessing properties
console.log(person.name); // "John"
console.log(person['age']); // 30
console.log(person['favorite-color']); // "blue"
console.log(person.sayHello()); // "Hello, I'm John"

// Modifying properties
person.age = 31;
person['favorite-color'] = 'green';
person.email = 'john@example.com'; // Add new property

// Deleting properties
delete person.email;

// Object methods
let keys = Object.keys(person); // ["name", "age", "favorite-color", "sayHello"]
let values = Object.values(person); // ["John", 31, "green", function]
let entries = Object.entries(person); // Array of [key, value] pairs

// Check property existence
console.log('name' in person); // true
console.log(person.hasOwnProperty('age')); // true
```

### Array

```javascript
// Array creation
let emptyArray = [];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', true, null, {name: 'John'}];

// Array properties
console.log(numbers.length); // 5

// Accessing elements
console.log(numbers[0]); // 1
console.log(numbers[numbers.length - 1]); // 5 (last element)

// Modifying arrays
numbers[2] = 10; // [1, 2, 10, 4, 5]
numbers.push(6); // [1, 2, 10, 4, 5, 6]
numbers.pop(); // [1, 2, 10, 4, 5]
numbers.unshift(0); // [0, 1, 2, 10, 4, 5]
numbers.shift(); // [1, 2, 10, 4, 5]

// Array methods
let doubled = numbers.map(num => num * 2); // [2, 4, 20, 8, 10]
let evens = numbers.filter(num => num % 2 === 0); // [2, 10, 4]
let sum = numbers.reduce((acc, num) => acc + num, 0); // 19

// Array searching
console.log(numbers.indexOf(10)); // 2
console.log(numbers.includes(10)); // true

// Array transformation
let joined = numbers.join(', '); // "1, 2, 10, 4, 5"
let sliced = numbers.slice(1, 3); // [2, 10]
let spliced = numbers.splice(2, 1, 99); // removes 10, adds 99
```

## Type Coercion and Conversion

### Implicit Coercion

```javascript
// String coercion
let result = '5' + 3; // "53" (number converted to string)
let result2 = '5' - 3; // 2 (string converted to number)
let result3 = '5' * '3'; // 15 (both converted to numbers)

// Boolean coercion
if ('hello') console.log('String is truthy');
if (!0) console.log('0 is falsy');
if ('0') console.log('String "0" is truthy');

// Loose equality (==) vs strict equality (===)
console.log('5' == 5); // true (type coercion)
console.log('5' === 5); // false (no type coercion)
console.log(null == undefined); // true
console.log(null === undefined); // false
```

### Explicit Conversion

```javascript
// To String
String(42); // "42"
(42).toString(); // "42"
42 + ''; // "42"

// To Number
Number('42'); // 42
parseInt('42', 10); // 42
parseFloat('42.5'); // 42.5
+'42'; // 42 (unary plus)

// To Boolean
Boolean('hello'); // true
!!'hello'; // true (double negation)

// To Array
Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
Array.from([1, 2, 3]); // [1, 2, 3]

// JSON conversion
let obj = {name: 'John', age: 30};
let jsonString = JSON.stringify(obj); // '{"name":"John","age":30}'
let parsedObj = JSON.parse(jsonString); // {name: 'John', age: 30}
```

## Scope and Hoisting

### Variable Hoisting

```javascript
// Function declarations are hoisted
sayHello(); // Works!
function sayHello() {
    console.log('Hello!');
}

// var declarations are hoisted (initialized to undefined)
console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted';

// let and const declarations are hoisted (but in temporal dead zone)
console.log(tdzVar); // ReferenceError
let tdzVar = 'I am in temporal dead zone';

// Function expressions are not hoisted
// sayGoodbye(); // TypeError
var sayGoodbye = function() {
    console.log('Goodbye!');
};
```

### Scope Chain

```javascript
// Global scope
let globalVar = 'I am global';

function outerFunction() {
    // Outer function scope
    let outerVar = 'I am outer';
    
    function innerFunction() {
        // Inner function scope
        let innerVar = 'I am inner';
        
        console.log(globalVar); // Accessible
        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }
    
    innerFunction();
    // console.log(innerVar); // ReferenceError
}

outerFunction();
// console.log(outerVar); // ReferenceError
```

### Block Scope

```javascript
// if block
if (true) {
    let blockVar = 'I am in block';
    var functionVar = 'I am function scoped';
    const constVar = 'I am block scoped';
    console.log(blockVar); // Accessible
}
// console.log(blockVar); // ReferenceError
// console.log(constVar); // ReferenceError
console.log(functionVar); // Accessible (function scoped)

// for loop
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // ReferenceError

for (var j = 0; j < 3; j++) {
    console.log(j); // 0, 1, 2
}
console.log(j); // 3 (function scoped)
```

## Best Practices

### Variable Declaration

```javascript
// Use const by default
const API_URL = 'https://api.example.com';
const MAX_RETRY_COUNT = 3;
const DEFAULT_TIMEOUT = 5000;

// Use let when reassignment is needed
let retryCount = 0;
retryCount++; // Okay

let userInput = getUserInput();
userInput = userInput.trim(); // Okay

// Avoid var
// Use const and let instead

// Use descriptive names
const userAuthenticationToken = 'abc123';
let totalItemCount = 0;
const isUserLoggedIn = false;

// Use camelCase for variables
let firstName = 'John';
let lastName = 'Doe';

// Use UPPER_CASE for constants
const PI = 3.14159;
const API_VERSION = 'v1';
const MAX_FILE_SIZE = 1024 * 1024; // 1MB
```

### Variable Initialization

```javascript
// Always initialize variables
let userName = '';
let userAge = 0;
let isActive = false;
let userProfile = null;

// Use null for optional object references
let optionalConfig = null; // Better than undefined

// Initialize objects and arrays properly
let userList = []; // Empty array
let userMap = {}; // Empty object
let settings = {
    theme: 'light',
    language: 'en'
};

// Avoid mixed types in arrays
let validNumbers = [1, 2, 3, 4, 5]; // Good
let mixedData = [1, 'hello', true]; // Avoid when possible
```

### Scope Management

```javascript
// Keep scope minimal
function processUserData(userData) {
    // Use const/let to limit scope
    const sanitizedData = sanitizeUserData(userData);
    const validatedData = validateUserData(sanitizedData);
    
    // Process data
    return saveUserData(validatedData);
}

// Avoid global variables
// Bad
let globalCounter = 0;
function incrementCounter() {
    globalCounter++;
}

// Better - encapsulate in function
function createCounter() {
    let counter = 0;
    return {
        increment() { counter++; },
        getValue() { return counter; }
    };
}

const counter = createCounter();
```

### Type Safety Considerations

```javascript
// Be aware of type coercion
const userId = '123'; // String
const numericId = Number(userId); // Convert to number

// Use strict equality
if (userInput === '') {
    // Better than userInput == ''
}

// Check for null/undefined explicitly
function greetUser(user) {
    if (user === null || user === undefined) {
        return 'Guest';
    }
    return `Hello, ${user.name}!`;
}

// Use optional chaining (ES2020)
function getUserCity(user) {
    return user?.address?.city ?? 'Unknown';
}

// Use type checking
function isString(value) {
    return typeof value === 'string';
}

function isArray(value) {
    return Array.isArray(value);
}
```

## Common Pitfalls

```javascript
// Pitfall 1: Reassigning const objects
const config = { apiUrl: 'https://api.example.com' };
config.apiUrl = 'https://new-api.example.com'; // This is okay
// config = {}; // This is not okay

// Pitfall 2: Temporal dead zone
// console.log(myVar); // ReferenceError
let myVar = 'value';

// Pitfall 3: typeof null
console.log(typeof null); // "object" (historical bug)

// Pitfall 4: NaN comparisons
let result = 0 / 0; // NaN
console.log(result === NaN); // false (NaN is not equal to anything)
console.log(isNaN(result)); // true (use isNaN())
console.log(Number.isNaN(result)); // true (better method)

// Pitfall 5: Array indexing
let arr = [1, 2, 3];
console.log(arr[10]); // undefined (not error)

// Pitfall 6: String concatenation with numbers
let count = 5;
let message = 'Total count: ' + count; // "Total count: 5"
let calculation = '5' + 3; // "53" (not 8)
let properCalculation = +'5' + 3; // 8

// Pitfall 7: Boolean coercion
let emptyString = '';
let zero = 0;
let nullValue = null;
let undefinedValue = undefined;

console.log(emptyString || 'default'); // "default"
console.log(zero || 'default'); // "default"
console.log(nullValue || 'default'); // "default"
console.log(undefinedValue || 'default'); // "default"

// Pitfall 8: Global variable leakage
function badFunction() {
    leakedVariable = 'I leaked to global scope';
    // Missing var, let, or const
}

// Fixed version
function goodFunction() {
    let localVariable = 'I am local';
}
```

Understanding variables and data types is fundamental to JavaScript programming. Master these concepts to write more reliable and maintainable code.