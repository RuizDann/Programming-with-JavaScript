const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log()'---- for-in is unreliable ----');
for (var prop in sportsCar) {
    console.log(prop);
}