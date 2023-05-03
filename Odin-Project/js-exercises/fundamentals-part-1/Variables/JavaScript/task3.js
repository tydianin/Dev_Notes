"use strict";
// Uppercase const?

// Examine the following code:
const birthday = '18.04.1982';
const age = someCode(birthday);

// Would it be alright to use uppercase for 'birthday', 'age', or both?
// 'birthday' should be capitalized, as it is hard-coded and known prior to execution.
// 'age' should remain lowercase, as it is determined through a function 'someCode'.
const BIRTHDAY = '18.04.1982';