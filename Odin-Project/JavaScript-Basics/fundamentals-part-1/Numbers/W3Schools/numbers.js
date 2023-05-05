// JavaScript only uses one number type, with several notations.
let x = 3.14; // A number with decimals
let y = 3;    // A number without decimals
let z = 123e5 // A number using scientific notation

// All numbers in JavaScript are double precision fp.
// As such, integers are accurate to 15 digits.
x = 999999999999999;  // x = 999999999999999
y = 9999999999999999; // y = 10000000000000000

// Floating point arithmetic is not always accurate.
x = 0.2 + 0.1 // produces 0.30000000000000004

// To solve this, make the values whole first.
x = (0.2 * 10 + 0.1 * 10) / 10; // produces 0.3

// The '+' operator is used for arithmetic addition and string concatenation.
x = 10;
y = 20;
z = x + y; // produces the number 30.

x = "10";
y = "20";
z = x + y; // produces the string "1020".

y = 20;
z = x + y; // also produces the string "1020".

x = 10;
y = "20";
z = x + y; // also produces the string "1020".

y = 20;
z = "The result is: " + x + y; // "The result is 1020"

z = "30";
let result = x + y + z; // produces the string "3030".

// Other arithmetic operators will attempt to parse the string.
x = 100;
y = "10";
z = x / y; // produces the number 10.

x = "100";
z = x * y; // produces the number 1000.

z = x - y; // produces the number 90.


// NaN is the reserved number for illegal numbers
let n = 100 / "Apple"; // results in NaN
isNaN(n);              // returns true
typeof NaN;            // returns 'number'

// Infinity is the reserved number for > dp fp limit.
typeof Infinity; // returns 'number'
let myNumber = 2;
while (myNumber != Infinity) {
    myNumber**2;
} // this loop breaks when myNumber goes out of bounds.

// Infinity is also used for undefined
myNumber = 2 / 0; // myNumber = Infinity.
myNumber = -2 / 0; // also = Infinity


// Hexadecimal, Octal, and Binary are also supported in JS.
// Do not start a number with a leading 0, as some interpreters treat this as hex.
// The toString() method can be used to display a number in a different base
myNumber = 32;
myNumber.toString(36); // w
myNumber.toString(32); // 10
myNumber.toString(16); // 20
myNumber.toString(12); // 28
myNumber.toString(10); // 32
myNumber.toString(8);  // 40
myNumber.toString(2);  // 100000


// JavaScript is object-oriented. Do not do this.
x = 123;
y = new Number(123);
z = new Number(123);

console.log(x == y);  // "true"
console.log(x === y); // "false"
console.log(y === z); // "false"