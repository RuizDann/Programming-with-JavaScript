// Task 1
// Create a function called logDairy. Within it, console log each of the items in the dairy array, using the for...of loop.

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (var prod of dairy) {
        console.log(prod);
    }
}
logDairy();

// Task 2
// Create a function called birdCan, within it, loop over the bird object's properties and console log each one, using the for...of loop.
// Remember, you need to console log both the key and the value of each of the bird object's properties.

const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (var prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop]);
    }
}
birdCan();

// Task 3
// create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop.

function animalCan() {
    for (var obj in bird) {
        console.log(obj + ": " + bird[obj]);
    }
}
animalCan();