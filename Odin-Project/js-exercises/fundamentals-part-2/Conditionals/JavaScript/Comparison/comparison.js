// Continued review, comparisons resulting in booleans
let a = 3;
let b = 4;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a >= b);  // false
console.log(a <= b);  // true
console.log(a == b);  // false
console.log(a === 3); // true
console.log(a != b);  // true

// Strings are compared left-to-right by character code
console.log('Z' > 'A');       // true
console.log('Z' > 'a');       // false  value is based on unicode sequence
console.log("Glee" > "Glow"); // false  the first character to break equality wins it
console.log("Bee" > "Be");    // true   longer strings are considered greater

// Data types are parsed when possible
console.log('2' > 1);    // true, string '2' becomes number 2
console.log(true == 1);  // true, boolean true becomes number 1
console.log(false == 0); // true, boolean false becomes number 0

// Conundrum
console.log(Boolean(0));   // false, number 0 is boolean false
console.log(Boolean('0')); // true, non-empty strings are boolean true
console.log(0 == '0');     // true, '0' becomes number 0

// Strict equality compares value and data type
console.log(false === 0); // false, boolean false is boolean, not number

// null and undefined are equal only in native value
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null >= undefined);   // false, null becomes number 0, undefined becomes NaN

// null is not a number object though, as found with equality check
console.log(null == 0); // false, as null is not natively a number
console.log(null >= 0); // true, as comparison invokes conversion