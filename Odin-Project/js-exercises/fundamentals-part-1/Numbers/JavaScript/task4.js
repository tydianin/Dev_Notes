"use strict";
// Fix the addition

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b);

// The output is "12". Fix it to output 3.

a = +prompt("First number?", 1);
b = +prompt("Second number?", 2);

// or

alert(+a + +b);