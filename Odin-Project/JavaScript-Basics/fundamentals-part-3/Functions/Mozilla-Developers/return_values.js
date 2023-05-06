// Many methods include a "return value" section in their documentation.
const myText = "The weather is cold.";

// If we look at the `replace()` documentation's "return value" section:
// "A new string, with one, some, or all matches of the pattern replaced by the
// specified replacement."
const newText = myText.replace("cold", "warm");

// Some functions do not return any values, considered `void` or `undefined`.
const para = document.createElement('p');
function displayMessage(msgText) {
    para.textContent = msgText;
}

// Generally, a return value is used where the function is an intermediate step
// in a calculation of some kind.

// To return a value from a custom function, we use the `return` keyword.
function func() {
    return val;
}


// target.addEventListener(type, listener, options)
const input = document.querySelector('input');
input.addEventListener("change", () => {
    para.textContent = `You entered: "${input.value}".`;
});

/*
target: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
type: https://developer.mozilla.org/en-US/docs/Web/Events
listener: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
options: `capture`, `once`, `passive`, and `signal`
return value: none (undefined)
*/