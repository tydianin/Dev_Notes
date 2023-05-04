"use strict";

// What's the result of OR?
console.log(null || 2 || undefined); // 2, as it is the first truthy in the list

// What's the result of OR'ed alerts?
console.log(alert(1) || 2 || alert(3)); // alert(1), 2
// alert executes, but does not return a value. The first OR evaluates the `alert` as undefined.
// since OR looks for the first truthy value, it continues to '2', which is truthy.

// What is the result of AND?
console.log(1 && null && 2); // null, as it is the first falsy in the list

// What is the result of AND'ed alerts?
console.log(alert(1) && alert(2)); // alert(1), undefined
// alert executes, but does not return a value. The first AND evaluates the `alert` as undefined.
// since AND looks for the first falsy value, it terminates and returns the 'undefined' from `alert`.

// The result of OR AND OR
console.log(null || 2 && 3 || 4); // 3. AND holds higher precedence than OR, so it evaluates 2 && 3 first.
// As both '2' and '3' are truthy, AND returns the last item in the list.
// OR then evaluates `null || 3 || 4`, returning 3, as it is the first truthy in the list.

// Check the Range Between