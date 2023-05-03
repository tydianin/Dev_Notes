// Like most languages, JS uses declarations and assignments.
let message;
message = "Hello";

// The two most common ways to display information are 'alert' and 'console.log'.
alert(message);
console.log(message);

// JS supports inline assignment.
let globMessage = "Hello World";
console.log(globMessage);

// JS supports multiple declarations in one line.
let user = "John", age = 25, johnMessage = "Hello";

// Generally you should stick to single declarations for clarity.
let user2 = "Steve";
let age2 = 30;
let steveMessage = "World";

// As expected, we can change the variable value as many times as we want.
message = "World";
console.log(message);

// We can use a variable to modify a variable.
message = globMessage;
console.log(message);
console.log(globMessage);

// As expected, declaring a variable twice will trigger an error, so only declare once.
// let message = "Error"; < This triggers an error.

// Naming: Variables must contain only alphanumeric, "$"", or "_".
// Variables must not start with a number.
let userName = "Jessica";
// let 25 = 25; < This triggers an error.

// Older scripting allowed for assignment without declaration.
james = 25;
// This is considered bad practice, however, and we can ensure adherence through '"use strict"'.
"use strict";
// david = 40 < This will now trigger an error.

// Constants are declared using 'const' instead of 'let'.
const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; < This triggers an error.

// It is common practice to use CAPS_SNAKE_CASE for pre-runtime known constants like colors.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
let color = COLOR_GREEN;
console.log(color);

// Therefore, camelCase should continue to be used for runtime constants.
// const timeToLoad = ; < Time taken to load the page is not known but does not change.

// Variables should always use clean, descriptive naming. Common rules:
// Use human-readable names like "userName" or "shoppingCart".
// Stay away from abbreviations or short names like "a", "b", "c".
// Names should be maximally descriptive and concise. "data" and "value" should not be used unless it's obvious.
// Agree on terms with your team. If a visitor is "user", make variables related like "currentUser" or "newUser".