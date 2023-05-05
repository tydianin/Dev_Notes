let response;
let score = 75;
let machineActive = false;

// Add your code here
if (!machineActive) {
    response = "Machine not active.";
} else if (machineActive) {
    if (score < 0 || score > 100) response = "That is not possible, an error has occured.";
    else if (score <= 19) response = "That was a terrible score, total fail!";
    else if (score <= 39) response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
    else if (score <= 69) response = "You did a passable job, not bad!";
    else if (score <= 89) response = "That\'s a great score, you really know your stuff.";
    else if (score <= 100) response = "What an amazing score! Did you cheat? Are you for real?";
    else response = "Exception: Invalid score.";
} else {
    response = "Exception: Invalid machine state.";
}
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${score}`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);