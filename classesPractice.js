class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
// add methods to classes to be shared by all future instance objects of 'Train' class
// This will change the value in 'lightsOn' property of future instances object of 'Train' class
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
// reports the current status of the 'lightsOn' variable of a given object instance
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
// prints out the properties on the object instance it is called on
    getSelf() {
        console.log(this);
    }
// console logs the prototype of the object instance of the 'Train' class
// The prototype holds all the properties shared by all the object instances of the 'Train' class
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
//This code above allows me to build new instances of the 'Train' class
//Each object instance of the 'Train' class that I build will have its own custom properties of color and lightsOn

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain);

var mySecondTrain = new Train('blue', false);

console.log(mySecondTrain.toggleLights());
// undefined
console.log(mySecondTrain.lightsStatus()); 
// Lights on? true
console.log(mySecondTrain.getSelf()); 
// Train {color: blue', lightsOn: true}
console.log(mySecondTrain.getPrototype());
// {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// 'HighSpeedTrain' inherits from the 'Train' class
// 'HighSpeedTrain' class becomes the sub-class of the 'Train' class
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
//super specifies what property gets inherited from the super-class in the sub-class
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var train3 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

console.log(train3.toggleLights()); // undefined
console.log(train3.lightsStatus()); // Lights on? true
console.log(highSpeed1.toggleLights()); // Lights on? true, Lights are 100% operational.

train3.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}