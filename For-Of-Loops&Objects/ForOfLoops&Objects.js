const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log('---- for-in is unreliable ----\n');
for (var prop in sportsCar) {
    console.log(prop);
}
console.log('Iterating over object AND prototype properties\n');

console.log('---- for-of is reliable ----\n');
for (var prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}

console.log("Iterating over object's OWN PROPERTIES only!\n");

//when you run on objects in JavaScript for in loops, iterate over the properties of the object and its prototype.
//While for of loops do this only for the objects' properties