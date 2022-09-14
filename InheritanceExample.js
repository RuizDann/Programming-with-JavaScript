// Understanding Inheritance in JavaScript
// We create 'bird' to be our prototype object
var bird = {
    hasWings : true,
    canFly: true,
    hasFeathers: true
}

// We create 'eagle' to inherit from 'bird' and console log its properties
var eagle = Object.create(bird);
console.log("Eagle: ", eagle);

// We see that the Eagle object has iherited the properties of bird
console.log("Eagle has wings: ", eagle.hasWings);
console.log("Eagle can fly: ", eagle.canFly);
console.log("Eagle has feathers: ", eagle.hasFeathers);

// Sparrow has also iherited the properties of bird
var sparrow = Object.create(bird);
console.log("Sparrow has wings: ", sparrow.hasWings);

var penguin = Object.create(bird);
// we can also change a property from being true which overrides the default value
penguin.canFly = false;
console.log("Penguin: ", penguin);
console.log("Penguin has feathers: ", penguin.hasFeathers);
console.log("Penguin can fly: ", penguin.canFly);