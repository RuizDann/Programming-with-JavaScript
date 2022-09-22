// Exercise: Creating arrays and objects
// In this exercise lab you will practice creating arrays and objects.
// 1. Create a new empty array literal and assign it to the variable clothes.
var clothes = [];

// 2. Add 5 of your favorite items of clothing as strings using the push() method.
clothes.push("tank-top", "joggers", "t-shirt", "jeans", "shorts");
console.log("Clothes contains: ".concat(clothes));

// 3. Remove the fifth piece of clothing from the array using the pop() method.
clothes.pop();
console.log("\nClothes now contains: ".concat(clothes));

// 4. Add a new piece of clothing using the push() method.
clothes.push("boxers");
console.log("\nClothes array contains: ".concat(clothes));

// 5. Use console.log to show the third item from the clothes array in the console.
console.log("\nThe third item: ".concat(clothes[2]));

// 6. Create a new empty object literal and assign it to the variable favCar.
var favCar = {};

// 7. Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.
favCar.color = "red";

// 8. Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.
favCar.convertable = false;

// 9. Use the console to log the entire favCar object
console.log(favCar);

/*
    Tips:
    - Remember to use the object literal syntax: {}
    - Remember to use the array literal syntax: []
*/