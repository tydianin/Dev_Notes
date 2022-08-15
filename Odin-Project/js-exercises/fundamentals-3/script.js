// task 1 - Rewrite the function using '?' or '||'

// original
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did your parents allow you?");
  }
}

// ternary operators
function checkAgeTernary(age) {
  return age > 18 ? true : confirm("Did your parents allow you?");
}

// logical or operator
function checkAgeLogical(age) {
  return age > 18 || confirm("Did your parents allow you?");
}

// task 2 - Function min(a, b)
function min(a, b) {
  return a < b ? a : b;
}

// task 3 - Function pow(x,n)
function pow(x, n) {
  return x ** n;
}

// task 4 - Rewrite with arrow functions

// original
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled.");
  }
);

// rewrite
function askArrow(question, yes, no) {
  confirm(question) ? yes() : no();
}

askArrow(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled.")
);
