// Our standard format is Function Declaration.
function sayHi() {
    alert("Hi");
}

// The alternate format is Function Expression.
let sayHey = function() {
    alert("Hey");
};
// Notice the semicolon, as function expression is part of an assignment.


/*
An important point to keep in mind: As the function expression is a part of an
assignment, it is created when execution reaches its point, and only available
after that point and within its scope. A function that is declared instead will
be available earlier than it is defined, due to the interpreter's design. 
*/


// In JavaScript, a function is a value.
alert(sayHi); // "function sayHi() { alert("Hi"); }"
let func = sayHi;

func();       // "Hi"
alert(func);  // "function sayHi() { alert("Hi"); }"

// This is, of course, not the same as assigning a variable the return value.
let foo = sayHey();
alert(foo);   // "Hey"


// Callback Functions provide an extended functionality to tie in other functions.
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled");
}

ask("Do you agree?", showOk, showCancel);
// By passing the two functions as variable arguments, we provide the calling
// function callback variables.

// We can combine this knowledge with the anonymous functions from earlier
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled.");}
);


/*
A function is a value representing an *action*.
Regular values, such as strings or numbers, represent *data*.
We can pass actions between variables and execute them when we want.
*/


// Functions are subject to scope and unavailable outside of scope.
let age = prompt("What is your age?", 18);
if (age < 18) {
    welcome();               // "Hello", as declaration below is uplifted.

    function welcome() {
        alert("Hello!");
    }

    welcome();               // "Hello", as declared.
} else {
    function welcome() {
        alert("Greetings!");
    }
}
welcome();                   // Error: welcome() not defined.

// Functions can be made visible outside of scope through expression assignment.
let welcome;
if (age < 18) {
    welcome = function() {
        alert("Hello!");
    }
} else {
    welcome = function() {
        alert("Greetings!");
    }
}
welcome();                   // "Hello", as 18 >= 18

// And we can combine this with the ternary operator for compaction
age < 18 ?
    welcome = function() { alert("Hello!"); } :
    welcome = function() { alert("Greetings"); };

welcome();                   // "Hello", as 18 >= 18


/*
If possible, function declarations are preferred. Due to interpreter uplifting,
functions can be declared any time, provided they remain within scope. If,
however, a function declaration does not suit the current need, a function
expression is better than spaghetti coded solutions.
*/