// ES5 Strings

let noMultiLineString = "No multi-line strings in ES5";
console.log("Did you know? " + noMultiLineString);

// If I were to run the code below I would get an error: Unterminated string literal
// let noMultiLineString = "No 
// multi-line strings in ES5";
// console.log("Did you know? " + noMultiLineString);

// ES6 Multi-line Template Literals

let multiLineString = `
Using ES6
backticks,
Multi-line 
strings are
possible!`;
console.log(multiLineString);

// ES6 variable interpolation

let first = `He said, "Don't you know? ES6, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?", he asked.`;

console.log(`${first} - and I got curious. ${second}`);