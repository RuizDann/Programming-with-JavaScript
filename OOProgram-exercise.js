/* Create classes in JavaScript:
Specifically, building the following inheritance hierarchy:

            Animal
           /      \
        Cat       Bird
       /   \         \
HouseCat    Tiger    Parrot
1. The Animal class' constructor will have two properties: color and energy 
2. The Animal class' prototype will have three methods: isActive(), sleep(), and getColor()
3. The isActive() method, whenever ran, will lower the value of energy until it hits 0.
    The isActive() method will also report the updated value of energy.
    If energy is at zero, the animal object will immediately go to sleep, by invoking the sleep() method based on the said condition. 
4. The getColor() method will just console log the value in the color property. 
5. The Cat class will inherit from Animal, with the additional sound, canJumpHigh, and canClimbTrees properties specific to the Cat class. It will also have its own makeSound() method. 

6. The Bird class will also inherit from Animal, but is own specific properties will be quite different from Cat.
Namely, the Bird class will have the sound and the canFly properties, and the makeSound method too. 

7. The HouseCat class will extend the Cat class, and it will have its own houseCatSound as its special property.
    Additionally, it will override the makeSound() method from the Cat class, but it will do so in an interesting way.
    If the makeSound() method, on invocation, receives a single option argument - set to true, then it will run super.makeSound() - in other words, run the code from the parent class (Cat) with the addition of running the console.log(this.houseCatSound).
    Effectively, this means that the makeSound() method on the HouseCat class' instance object will have two separate behaviors, based on whether we pass it true or false. 
8. The Tiger class will also inherit from Cat, and it will come with its own tigerSound property, while the rest of the behavior will be pretty much the same as in the HouseCat class. 
9. Finally, the Parrot class will extend the Bird class, with its own canTalk property, and its own makeSound() method, working with two conditionals: one that checks if the value of true was passed to makeSound during invocation, and another that checks the value stored inside this.canTalk property.  
*/
//The Animal class should have the following methods:
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at: ', this.energy, '\n');
        }
        else if (this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at: ', this.energy, '\n');
    }
    getColor() {
        return this.color;
    }
}

//The Cat sub-class should have the following methods:
class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = 'meow', sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound() {
        super.makeSound();
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = 'roar!', sound, canJumpHigh, CanClimbTrees, color, energy) {
        super(color, energy, sound, canJumpHigh, CanClimbTrees);
        this.tigerSound = tigerSound;
    }
    makeSound() {
        super.makeSound();
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(color, energy, sound, canFly);
        this.canTalk = canTalk;
    }
    makeSound() {
        if (this.canTalk == false) {
            super.makeSound();
        }
        else if (this.canTalk == true) {
            super.makeSound();
            console.log("I'm a talking parrot!");
        }
    }
}

//Testing the code:
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

console.log(polly.color); // yellow
console.log(polly.energy); // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
console.log(penguin); // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

console.log(penguin.sound); // 'shriek'
console.log(penguin.canFly); // false
console.log(penguin.color); // 'black and white'
console.log(penguin.energy); // 200
penguin.isActive(); // Energy is decreasing, currently at: 180