const button = document.querySelector('button');

function greet() {
  const greeting = ", nice to meet you!";
  const name = prompt("What is your name?", "user");
  alert(`Hello ${name}${greeting}`);
}

button.addEventListener('click', greet);