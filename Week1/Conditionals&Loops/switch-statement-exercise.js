/*
Code the days of the week program as a switch statement
1. On the next line, define a new variable, name it day, and set its value to "Sunday".

2. Start coding a switch statement, passing the day variable as the expression to evaluate.

3. Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

4. At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

5. Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.
*/

var day = "Monday";

switch (day) {
    case 'Monday':
        console.log('Do something1');
        break;
    case 'Tueday':
        console.log('Do something2');
        break;
    case 'Wednesday':
        console.log('Do something3');
        break;
    case 'Thursday':
        console.log('Do something4');
        break;
    case 'Friday':
        console.log('Do something5');
        break;
    case 'Saturday':
        console.log('Do something6');
        break;
    case 'Sunday':
        console.log('Do something7');
        break;
    default:
        console.log('There is no such day');
}