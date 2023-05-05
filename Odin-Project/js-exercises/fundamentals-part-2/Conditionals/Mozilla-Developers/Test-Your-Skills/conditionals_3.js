let response;
let score = -1;
let machineActive = true;

if (machineActive) {
    // Add your code here
    switch (Math.floor(score / 10)) {
        case 0: case 1:
            response = "That was a terrible score, total fail!";
            break;
        case 2: case 3:
            response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
            break;
        case 4: case 5: case 6:
            response = "You did a passable job, not bad!";
            break;
        case 7: case 8:
            response = "That\'s a great score, you really know your stuff.";
            break;
        case 9:
            response = "What an amazing score! Did you cheat? Are you for real?";
            break;
        default:
            score === 100 ?
                response = "What an amazing score! Did you cheat? Are you for real?" :
                response = "That is not possible, an error has occured.";
    }
} else {
    response = 'The machine is turned off. Turn it on to process your score.';
}

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${score}.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);