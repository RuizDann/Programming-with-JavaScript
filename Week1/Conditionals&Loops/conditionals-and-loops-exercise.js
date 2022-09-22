/*
Exercise 1
In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.
To make the counter increment by 1 on each loop, you will use i++.
The exit condition for the for loop is i<=10.
Inside the loop, write an if-else statement, which will check the following conditions:

1. First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

2. Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

3. Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

4. For all the remaining values of i, your code will console log just the value of i.
*/

for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold medal");
    } else if (i == 2) {
        console.log("Silver medal");
    } else if (i == 3) {
        console.log("Bronze medal");
    } else {
        console.log(i + "th place");
    }
};
console.log("Exercise 1 complete\n");
/*
Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.
*/

for (var i = 1; i <= 10; i++) {
    switch(i){
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i + "th place");        
    }
};
console.log("Exercise 2 complete\n");

var i = 3;
var j = 5;

if(i == 3 && j < 5) {
    console.log("Hello");
}
else {
    console.log("Goodbye");
}
