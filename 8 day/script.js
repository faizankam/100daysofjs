// Get user input for the number to calculate factorial
let a = prompt('Enter Your Number that you want to calculate factorial');

// Parse the input to ensure it's treated as a number
a = Number.parseInt(a);

// Initialize a variable to store the factorial result
let sum = 1;

// Display the entered number
console.log(a);

// Calculate factorial using a loop
for (let i = a; i > 0; i--) {
    sum *= i;
}

// Display the factorial result
console.log(`The factorial of ${a} is = ${sum}`);
alert(`The factorial of ${a} is = ${sum}`);
