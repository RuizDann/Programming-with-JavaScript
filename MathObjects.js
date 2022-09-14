// Math.random() generates a decimal number between 0 and 0.99

// save it to a variable:
/* var decimal = Math.random();

// log the value of a decimal to the console
console.log(decimal);

// log the value of the decimal MULTIPLIED by 10
console.log(decimal * 10);
*/

// Math.ceil() rounds the number to the nearest integer value
/* var rounded = Math.ceil(0.0001); rounds to 1
// var rounded = Math.ceil(0.5); rounds to 1
// var rounded = Math.ceil(0.99); rounds to 1
// var rounded = Math.ceil(1.01); rounds to 2
// var rounded = Math.ceil(1.5); rounds to 2
// var rounded = Math.ceil(2.99); rounds to 3
console.log(rounded);
*/

// Random integer
// Get a random decimal number between 0 and 0.99 and save it to a variable
var decimal = Math.random() * 10;

// Rounding up the value of the decimal
var rounded = Math.ceil(decimal);

// Log the value of rounded to the console
console.log(rounded);