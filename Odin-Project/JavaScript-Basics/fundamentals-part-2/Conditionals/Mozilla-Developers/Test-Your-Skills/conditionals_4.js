let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
if (machineActive) {
    machineResult = "Machine active";
    pwd === "cheese" ? pwdResult = "Login successful." : pwdResult = "Wrong password.";
}
else {
    machineResult = "Machine not active.";
}
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);