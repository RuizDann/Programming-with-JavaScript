const car = {
    engine: true
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);


for (var prop in sportsCar) {
    console.log(prop);
}

for (var prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}
