// OOP Ex 2

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calc = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:', calc);
    }
}

purchase2.totalPrice();