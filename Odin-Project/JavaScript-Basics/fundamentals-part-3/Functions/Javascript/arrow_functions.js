// Arrow functions are a relatively new shorthand alternate to function expressions.
// Using function expression form:
let sumExp = function (a, b) {
    return a + b;
}
alert(sumExp(1, 2)) // 3

// Using arrow function form:
let sumArr = (a, b) => a + b;
alert(sumArr(1, 2)) // 3

// If we have only one argument, the function can be even shorter.
let pow2 = a => a ** 2;
alert(pow2(2)); // 4

// If there are no arguments, we must show parentheses.
let msg = () => alert("Hello");


// Combining these points, we can revisit a previous example.
// In function declaration format:
let age = prompt("What is your age?", 18);
if (age < 18) {
    function welcome() { alert("Hello!"); }
    welcome();               // "Hello", as 18 >= 18.
} else {
    function welcome() { alert("Greetings!"); }
    welcome();               // Does not run, as 18 >= 18.
}

// Using function expression format:
/*let age = prompt("What is your age?", 18);*/
let welcome;
if (age < 18) {
    welcome = function () { alert("Hello!"); }
} else {
    welcome = function () { alert("Greetings"); }
}
welcome();                   // "Hello", as 18 >= 18.

// Combining with ternary operator:
/*let age = prompt("What is your age?", 18);*/
/*let*/ welcome = age < 18 ?
    function () { alert("Hello!"); } :
    function () { alert("Greeting"); }
welcome();

// And, finally, using arrow format:
/*let age = prompt("What is your age?", 18);*/
/*let*/ welcome = age < 18 ?
    () => alert("Hello!") :
    () => alert("Greetings!");
welcome();


// Arrow functions can still be used with multiple expressions by adding braces.
let sumArr2 = (a, b) => {
    let result = a + b;
    return result;
}
// An arrow function utilizing braces must include a `return` to return a value.


// Task: Rewrite with arrow functions:
/*
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled."); }
);
*/

// Still using function declaration for uplift and scope
function ask(question, yes, no) { confirm(question) ? yes() : no(); }

// Use arrow functions here for brevity and clarity.
ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled."));