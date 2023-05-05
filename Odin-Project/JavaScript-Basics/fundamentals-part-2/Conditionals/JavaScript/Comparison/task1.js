"use strict";

// What will be the result of these expressions?
console.log(5 > 4);                 // true, number comparison 5 > 4
console.log("apple" > "pineapple"); // false, string comparison, 'p' > 'a'
console.log("2" > "12");            // true, string comparison, '2' > '1'
console.log(undefined == null);     // true, special condition, null == undefined
console.log(undefined === null);    // false, differing data types
console.log(null == "\n0\n");       // false, null is only == undefined
console.log(null === +"\n0\n");     // false, null is not a number type