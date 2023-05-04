"use strict";

// Check the range between.
// Write an `if` condition to check that 'age' is between 14 and 90, inclusively.

let age = 28;
if (age >= 14 && age <= 90) {
    console.log("sucess");
}


// Check the range outside.
// Write an `if` condition to check that 'age' is NOT between 14 and 90, inclusively.
// Create two variants: The first using ! `NOT` and the second without.

if (!(age >= 14 && age <= 90)) {
    console.log("success");
}

if (age < 14 || age > 90) {
    console.log("success");
}


// A question about "if"
// Which of these `alert`s are going to execute?
// What will the result of the expressions be inside `if(...)`?

if (-1 || 0) alert( 'first' ); // alert executes, as OR evaluates -1 as truthy.
if (-1 && 0) alert( 'second' ); // alert doesn't execute, as AND evaluates 0 as falsy.
if (null || -1 && 1) alert( 'third' ); // alert executes, as AND evaluates -1 and 1 as truthy, and OR evaluates 1 as truthy.