// Review of logical operators as parts of conditional statements

// Four logical operators in JS, similar to other languages
// || OR
// && AND
// !  NOT
// ?? Nullish Coalescing


// || OR truth table 1/1/1/0
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // true

// || OR works looks for the first truthy value
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log("The office is closed."); // hour is 10 < hour < 18, but isWeekend is true
}

// || OR returns the first truthy value without conversion
console.log(undefined || null || 0 || 1); // 1, as number 1 is truthy

// there are a few ways to use this form of || OR

// selecting from a list of potentially truthy values
let firstName = "", lastName = "", userName = "Superuser";
console.log(firstName || lastName || userName || "Anonymous"); // Superuser

// short-circuiting into an expression
true || console.log("no");   // true
false || console.log("yes"); // yes


// && AND truth table 1/0/0/0
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// && AND returns the first falsy value without conversion
console.log(ndefined || null || 0 || 1); // false, as undefined is falsy

// && AND returns the last value if no values were falsy
console.log('a' && 'b' && 'c' && 'd'); // d

// && AND holds higher precedence than || OR
console.log(1 && 2 || 3 && 4); // 2

// While && can be shorthand for an if statement, it is not clean. Just use an if.
3 < 4 && console.log("maths"); // while true, just use an if statement.
if (3 < 4) { console.log("still maths") };


// ! NOT converts a value to boolean, then inverts the value.
console.log(!true);  // false
console.log(!0); // true, as 0 converts to false, then inverts to true.

// A double !! is a shorthand version of Boolean().
console.log(!!1); // true
// The first NOT converts and inverts, then the second NOT inverts the inversion.

// ! retains the highest precedence of all logical operators, executing before || or &&