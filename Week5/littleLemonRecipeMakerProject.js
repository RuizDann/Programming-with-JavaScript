// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (var obj of dishData) {
        var finalPrice;
        if (taxBoolean == true) {
            finalPrice = tax * obj.price
            // console.log(finalPrice);
        }
        else if (taxBoolean == false) {
            finalPrice = obj.price
            // console.log(finalPrice);
        }
    }
}
taxBoolean = true;
getPrices(taxBoolean);

// Implement getDiscount()
function getDiscount() {
    
}

// Call getDiscount()