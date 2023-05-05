// Like most OOP languages, JS includes many methods for strings.
// Strings are immutable. They cannot be changed, only replaced.
// All string methods return a new string. They don't modify the original.

let text = "Apple, Banana, Kiwi";

// length() returns the character count of the string
console.log(text.length);                        // 19

// slice() takes a mandatory start and optional end parameter
console.log(text.slice(7, 13));                  // "Banana"
console.log(text.slice(7));                      // "Banana, Kiwi"
console.log(text.slice(-12));                    // "Banana, Kiwi"
console.log(text.slice(-12, -6))                 // "Banana"

// substring() is basically slice but without negatives
console.log(text.substring(7, 13));              // "Banana"
console.log(text.substring(7));                  // "Banana, Kiwi"
console.log(text.substring(-12));                // "Apple, Banana, Kiwi"
console.log(text.substring(-12, -6));            // 

// substr() is deprecated

// toUpperCase() and toLowerCase() modify text casing.
console.log(text.toUpperCase());                 // "APPLE, BANANA, KIWI"
console.log(text.toLowerCase());                 // "apple, banana, kiwi"


// replace()
// replace() swaps the first occurence of a specified value with a new value
console.log(text.replace("Kiwi", "Strawberry")); // "Apple, Banana, Strawberry"

// replace() does not change the original string, it only returns a new one
console.log(text);                               // "Apple, Banana, Kiwi"

// replace() is case-sensitive
console.log(text.replace("APPLE", "Lemon"));     // "Apple, Banana, Kiwi"

// replace() can ignore these limitations by utilizing RegEx
console.log(text.replace(/APPLE/i, "Lemon"));    // "Lemon, Banana, Kiwi"
text += ", Apple";                               // "Apple, Banana, Kiwi, Apple"
console.log(text.replace(/Apple/g, "Lemon"));    // "Lemon, Banana, Kiwi, Lemon"
console.log(text.replace(/APPLE/ig, "Lemon"));   // "Lemon, Banana, Kiwi, Lemon"

// replace() using regex and /g (global flag) is now its own function: replaceAll()
console.log(text.replaceAll("Apple", "Lemon"));  // "Lemon, Banana, Kiwi, Lemon"


// trim(), trimStart(), trimEnd() remove whitespace
text = "     Blue     ";
console.log(text);                               // "     Blue     "
console.log(text.trim());                        // "Blue"
console.log(text.trimStart());                   // "Blue     "
console.log(text.trimEnd());                     // "     Blue"

// padStart() and padEnd() pad a string with copies of a string to the specified length
text = "Blue"
console.log(text);                               // "Blue"
console.log(text.padStart(4, "x"));              // "xxx4"
console.log(text.padEnd(4, "x"));                // "4xxx"


// characters can be accessed with charAt(), charCodeAt(), and string indexing
console.log(text.charAt(0));                     // "B"
console.log(text.charCodeAt(0));                 // 73
console.log(text[0]);                            // "B"

// note that charAt() is not the same as string[].
// if charAt() does not find a character, it will return "".
// if string[] does not find a character, it will return undefined.
// string indexing is read only.
text[0] = 'A' // this will not return an error, but it won't do anything either.

// split() can be used to convert a string into an array
text = "Blue, Green";
let myArray = text.split();                    // myArray[0] = "Blue, Green"
myArray = text.split("");                      // myArray[] = ['B', 'l', 'u', 'e', ',', ' ', 'G'...]
myArray = text.split(",");                     // myArray[] = ["Blue", "Green"]