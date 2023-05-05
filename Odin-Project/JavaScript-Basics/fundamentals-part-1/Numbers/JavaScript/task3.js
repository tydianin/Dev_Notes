"use strict";
// Type conversions

let a = "" + 1 + 0
let b = "" - 1 + 0
let c = true + false
let d = 6 / "3"
let e = "2" * "3"
let f = 4 + 5 + "px"
let g = "$" + 4 + 5
let h = "4" - 2
let i = "4px" - 2
let j = "  -9  " + 5
let k = "  -9  " - 5
let l = null + 1
let m = undefined + 1
let n = " \t \n" - 2

// What are the results of these expressions?

// a = "10"
// b = -1
// c = true      // c = 1 (logic vs interpretated addition)
// d = 2
// e = 6
// f = "9px"
// g = "$45"
// h = 2
// i = error     // i = NaN (review NaN)
// j = "  -9  5"
// k = error     // k = -14 (arithmetic will parse out blanks)
// l = 1
// m = infinity  // m = NaN (review NaN)
// n = -2