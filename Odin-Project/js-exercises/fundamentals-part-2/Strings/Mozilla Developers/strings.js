// Most of this is review.

// Single vs Double Quote
// In JS, there is basically no difference between single and double quotes.
// Just be careful of apostrophes and quotes in a string.
const sglDbl = 'Would you like to eat a "Fish supper"?';
const dblSgl = "I'm feeling blue.";

// Escape characters using backslash.
const bigmouth = 'I\'ve got no right to take my place...';

// Template literals (backtick quotes) allow variables by using '${}'.
const name = Chris;
const greeting = `Hello ${name}`;
console.log(`${dblSgl} ${sglDbl}`);

// Template literals can be pretty handy.
const song = "Fight the Youth";
const score = 9;
const maxScore = 10;
const output = `I like the song "${song}".
    I give it a score of ${
        (score/maxScore) * 100
    }%.`;
console.log(output);
// I like the song "Fight the Youth".
// I give it a score of 90%.

// This is much cleaner than
const messy = "I like the song " + song + ".\nI give it a score of " + ((score/maxScore)*100) + "%.";