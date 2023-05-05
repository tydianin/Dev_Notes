/*
1. Create 4 variables:
    firstName = Carlos
    lastName = Stevenson
    currentYear = 1965
    birthYear = 1948

2. Create a 5th variable, greeting, that is constructed from the previous 4 and
    says "Hello! My name is Carlos Stevenson and I am 17 years old."

3. Print greeting with console.log

4. Go back to your code and create 2 new variables: "fullName" and "age".

5. Set them using the pre-existing variables, with the calculations that are currently inside of greeting.

6. Edit the greeting string to use "fullName" and "age" instead of the other 4 variables.
    (the greeting should then look something like: "Hello, my name is " + fullName)

*/

//===== Your code goes here =================
const firstName = "Carlos";
const lastName = "Stevenson";
const fullName = `${firstName} ${lastName}`;

const currentYear = 1965;
const birthYear = 1948;
const age = currentYear - birthYear;

const greeting = `Hello! My name is ${fullName} and I am ${age} years old.`;