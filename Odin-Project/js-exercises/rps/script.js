// 0 = rock, 1 = paper, 2 = scissors
function getMoves(choice) {
  let cpu = [rng(3), "rock"];
  
  if (cpu[0] == 1) cpu[1] = "paper";
  if (cpu[0] == 2) cpu[1] = "scissors";

  let str = `Computer picked ${cpu[1]}.<br>`;
  str += game(choice, cpu[0]);

  outputById("rps", str);
}

// plays rock paper scissors
function game(p1, p2) {
  let str = "You win!"
  
  if (p1 != p2) {
    if (p2 > p1 && p2 - p1 == 1) str = "You lose...";
    if (p2 == 0 && p1 == 2) str = "You lose...";
  } else str = "It's a tie!";

  return str;
}



// template functions

// generates a random number
function rng(max) {
  return Math.floor(Math.random() * max);
}

// outputs using the id and string to be output
function outputById(id, str) {
  document.getElementById(id).innerHTML = str;
}