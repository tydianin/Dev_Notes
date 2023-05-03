// unary operators are those that only affect one operand.
let x = 5;
x = -x;

// binary operators are those that affect two operands.
x = x + 5;


// Reminder: A root is simply a fractional exponent..
x = x**2   // raise to second power.
x = x**1/2 // raise to 1/2 power, aka square root of x.


// In addition to string concat, the '+' operator can be used for conversion.
let y = "";
y = +y; // y is now the number 0.
// Unary '+' is effectively shorthand for the 'Number()' method.

// A better example is when the values are stored as strings.
let apples = "2";
let oranges = "5";
let total = +apples + +oranges; // total is now the number 7.


// Bitwise operators (because we're still bad at this).
// AND (&)
// OR (|)
// XOR (^)
// NOT (~)
// LEFT SHIFT (<<)
// RIGHT SHIFT (>>)
// ZERO-FILL RIGHT SHIFT (>>>)


// Comma operator. Lower precendence than '=', use sparingly.