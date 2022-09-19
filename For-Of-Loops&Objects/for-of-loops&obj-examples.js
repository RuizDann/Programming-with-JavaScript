
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(var key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
// price : 50
// color : beige
// material : cotton
// season : autumn
console.log("");

// let's code a function declaration that randomly assigns either the string speed or the string color to a variable name, and then build an object that has only two keys: a speed key and a color key.
// After this setup, you will be able to dynamically access either one of those properties on a brand new drone object, using the brackets notation.

function testBracketsDynamicAccess() {
  var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

    var drone = {
      speed: 15,
      color: "orange"
    }

    console.log(drone[dynamicKey]);
}

// Run the testBracketsDynamicAccess() function a few times, and you'll notice that sometimes the value that gets output is 15, and sometimes it's orange, although I'm always accessing the drone[dynamicKey] key. Since the dynamicKey is an expression that gets evaluated, based on the Math.random() invocation, sometimes that expression evaluates to drone["speed"], and other times that expression evaluates to drone["color"]

testBracketsDynamicAccess();