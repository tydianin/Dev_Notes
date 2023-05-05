"use strict";

// Check the login

// Use nested `if` blocks to write the code which asks for a login with `prompt`;
// If the user enters "Admin", then `prompt` for a password.
// If the user enters nothing or hits [ESC], show "Canceled".
// If the user enters anything else, show "I don't know you."

// The password check works as follows:
// If it equals "TheMaster", then show "Welcome!".
// If it is blank or escaped, show "Canceled".
// If it is anything else, show "Wrong password.".

// Hint: Passing an empty input to a prompt returns an empty string ''.
// Hint: Escaping from a prompt returns `null`.

let login = prompt("Enter login.", '');

if (login === "Admin") {
    let password = prompt("Enter password.", '');

    if (password === "TheMaster")
        alert("Welcome!");
        
    else (password === '' || password === null) ?
        alert("Canceled.") :
        alert("Wrong password.");
}

else (login === '' || login === null) ?
    alert("Canceled.") :
    alert("I don't know you.");