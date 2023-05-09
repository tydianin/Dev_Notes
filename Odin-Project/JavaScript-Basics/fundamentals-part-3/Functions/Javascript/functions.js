// Functions have read and write access to outer variables
let userName = "John";

function changeName(word) {
    word = "Bob";
    console.log("confirmed");
}

console.log(userName); // "John"
changeName(userName);  // "confirmed"
console.log(userName); // "Bob"

// Shadowing a variable, declaring a same-named variable, in a function ignores
function changeName2() {
    let userName = "Jeremy";
    console.log(userName);
}

changeName2();         // "Jeremy"
console.log(userName); // "Bob"


// Default Values
// If a function is called without arguments to parameters, they are `undefined`
function conLog(word) {
    console.log(word);
}
conLog()               // "undefined"

// We can specify a default value for these situations
function conLog2(word = "this is the default") {
    console.log(word);
}
conLog2()              // "this is the default"

// We can also use expressions as default values
function foo() {
    return "another function";
}

function conLog3(word = foo()) {
    console.log(word);
}
conLog3();             // "another function"

// In old code when default value syntax was not supported, we commonly see:
function showMessage(text) {
    // a check for explicit `undefined`
    if (text === undefined) {
        text = "no text given";
    }

    // or a check for falsy values
    text = text || "no text given";

    // and more modern checks for nullish coalescing values
    text = text ?? "unknown";
}

// A function that does not return, or returns nothing, returns `undefined`

// A return line cannot contain a newline, as JavaScript will append a semicolon.
// If your return expression needs more than one line, utilize parentheses.

/*
Functions are actions. So their name is usually a verb. It should be brief, as
accurate as possible and describe what the function does, so that someone
reading the code gets an indication of what the function does.

Similarly, functions should be short and do exactly one thing. If that thing is
big, maybe it’s worth it to split the function into a few smaller functions.
Sometimes following this rule may not be that easy, but it’s definitely a good thing.
*/


// Task: Rewrite the function `?` or `||`
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Did parents allow you?");
    }
}
*/

// Rewrite checkAge to use `?` in a single line instead of `if`
function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?");
}

// Rewrite checkAge to use `||` in a single line instead of `if`
function checkAge2(age) {
    return (age > 18) || confirm("Did parents allow you?");
}


// Task: Function min(a, b)
// Write a function `min(a, b)` which returns the least of two numbers `a` and `b`.

function min(a, b) {
    return (a < b) ? a : b;
}


// Task: Function pow(x, n)
// Write a function `pow(x, n)` which returns `x` in power `n`.
// Enforce a data validation of n == integer > 1.
function pow(x, n) {
    if (n > 1) {
        let result = x;
        for (i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    } else {
        return alert("Please use an integer power > 1 only.")
    }
}
// In practice just do `**`