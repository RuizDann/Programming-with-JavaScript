// ES5 Strings

let noMultiLineString = "No multi-line strings in ES5";
console.log("Did you know? " + noMultiLineString);

// If I were to run the code below I would get an error: Unterminated string literal
// let noMultiLineString = "No 
// multi-line strings in ES5";
// console.log("Did you know? " + noMultiLineString);

// ES6 Multi-line Template Literals

let multiLineString = `
Multi-line 
strings 
in 
ES6`;
console.log("Did you know? " + multiLineString);