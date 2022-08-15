// exercise 1 - variable
function ex1() {
  const ts1 = 1;
  const ts2 = 1;

  console.log(`1 + 1 = ${ts1 + ts2}.`);
}

// exercise 2 - conditional
function ex2() {
  let i = 0;
  for (i = 0; i < 5; i++) {
    number = Math.floor(Math.random() * 20) + 1;
    console.log(`${number} is ${number >= 10 ? "greater" : "less"} than 10.`);
  }
}

// exercise 3 - math
function ex3() {
  const m1 = 1 + 8;
  const m2 = 22 * 3;
  const m3 = 5 % 4;
  const m4 = m1 - 17;
  const m5 = m1 + m2 + m3 + m4;

  const users = { m1, m2, m3, m4, m5 };
  const answers = { m1: 9, m2: 66, m3: 1, m4: -8, m5: 68 };

  const check = (x, n) => (x === n ? "correct!" : "incorrect.");

  for (x in answers)
    console.log(
      `${x} is ${check(users[x], answers[x])} Got ${users[x]}, expected ${
        answers[x]
      }.`
    );
}

// exercise 4 - string
function ex4() {
  let firstName = "Carlos",
    lastName = "Stevenson";
  let birthYear = 1948,
    thisYear = 1965;

  let fullName = firstName + " " + lastName;
  let age = thisYear - birthYear;

  let greeting = `Hello! My name is ${fullName} and I am ${age} years old.`;
  console.log(greeting);
}