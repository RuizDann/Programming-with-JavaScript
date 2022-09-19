// OOP Ex 1

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calc = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calc);
    }
}

purchase1.totalPrice();