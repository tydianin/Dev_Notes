/*
Since JavaScript was made primarily for browsers, many browsers feature their
own functions as part of the browser's API and written in lower-level languages
like C++.

As with C++, functions belonging to objects are referred to as methods.
*/

// A simple function with no parameters or arguments. This is peak programming.
function myFunction() {
    alert('hello');
}

myFunction();

// JS functions support default arguments
function hello(name = "Chris") {
    console.log(`Hello, ${name}!`);
}

hello("Ari");
hello();


// Anonymous Functions
// Usually used in with a function that uses a function as a parameter.
(function () {
    alert("hello");
})

// Example without anonymous function:
function logKey(event) {
    console.log(`You pressed "${event.key}".`)
}

textBox.addEventListener('keydown', logKey);

// Example with anonymous function:
textBox.addEventListener('keydown', function (event) {
    console.log(`You pressed "${event.key}".`);
});

// Arrow Functions are an alt form of anonymous functions.
textBox.addEventListener('keydown', (event) => {
    console.log(`You pressed "${event.key}".`);
})

// Braces may be omitted if the function is only one line.
textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));

// Parenthesis may be omitted for the argument if there is only one parameter.
textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));

// `return` may be omitted if the function is only one line.
// Example without condensing:
function doubleItem(item) {
    return item * 2;
}
const originals = [1, 2, 3];
const doubled = originals.map(doubleItem(item));
console.log(doubled);

// Example with condensing:
const originals2 = [1, 2, 3];
const doubled2 = originals2.map(item => item * 2);
console.log(doubled2);


// Function Scope and Conflicts
// As with other languages, JS has separated scopes
const named = "Chris";

function testing() {
    console.log(named) // "ReferenceError: named is not defined."

    test = "testing";
    console.log(test); // "testing"
}

console.log(named); // "Chris"
console.log(test); // "ReferenceError: test is not defined."

/*
In the case that one HTML file pulls in two script files, if both script files
have a function or const with the same name, only the first file's function
will be used and the second file's const reassignment will produce an error.

As such, best practice is to use functions and scope to prevent conflicts.
*/