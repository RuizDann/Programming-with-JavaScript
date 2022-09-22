// capture user input and process it
// manipulate information displayed based on user input
// capture user input with the built-in prompt() method

var answer = prompt('Whats is your name?');

// can output the typed-in information on the screen, as an <h1> HTML element
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1');
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}
// This is probably the quickest and easiest way to capture user input on a website, but doing it this way is not the most efficient approach, especially in more complex scenarios
// This is where HTML forms come in.
// You can code a script which will take an input from an HTML form and display the text that a user types in on the screen

var h1 = document.createElement('h1');
h1.innerText = "Type into the input to make this text change";

var input = document.createElement('input');
input.setAttribute('type', 'text');

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

// So, you're essentially doing the same thing that you did before, only this time you're also dynamically adding the input element, and you're setting its HTML type attribute to text. That way, when you start typing into it, the letters will be showing in the h1 element above
// The next thing that you need to do is: set up an event listener. The change event will fire after you've typed into the input and pressed the ENTER key.

input.addEventListener('change', function() {
    // console.log(input.value);
    h1.innerText = input.value;
    input.value = '';
});
// Now,  update the text content of the h1 element with the value from the input field
// After this update, whatever you type into the input, after pressing the ENTER key, will be shown as the text inside the h1 element