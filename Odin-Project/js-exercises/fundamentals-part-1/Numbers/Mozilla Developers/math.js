// JavaScript has several built-in methods for the 'Number' object.

// round numbers using the 'toFixed()' method.
const MANY_DECIMAL = 1.766584958675746364; // 1.766584958675746364
const TWO_DECIMAL = toFixed(MANY_DECIMAL); // 1.77

// convert to the 'Number' data type using the 'Number()' method.
let myNumber = "74";
myNumber += 7; // produces the value "747", as it is a string.
myNumber = Number(myNumber) + 4; // produces the value 751.


// JavaScript supports pre- and post-fix incremenet/decrement.
console.log(myNumber++); // returns 751.
console.log(++myNumber); // returns 753.