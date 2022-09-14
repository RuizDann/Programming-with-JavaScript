// OOP Ex 3
// Using 'this' instead of specific object names

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        // changed 'purchase1' to 'this' to be able to reuse the code easier
        var calc = this.shoes * this.stateTax;
        console.log('Total price:', calc);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        // changed 'purchase2' to 'this' to be able to reuse the code easier
        var calc = this.shoes * this.stateTax;
        console.log('Total price:', calc);
    }
}
purchase2.totalPrice();