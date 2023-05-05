// Continue review of conditional statements

// use `if` to specify a block of code to be executed if a special condition is true.
if (1 > 0) {
    console.log("true");
}
// use `else if` to provide alternative special conditions before the `else` statement.
else if (1 < 0) {
    console.log("This code will never run.");
}
// use `else` to specify a block of code to be executed if a special condition is false.
else {
    console.log("This code will also never run.");
}

// use `switch` so you don't have 30 `else if` statements.
switch (0) {
    case 0:
        console.log("true");
        break;
    case 1:
        console.log("false");
        break;
    case 2:
        console.log("also false");
}