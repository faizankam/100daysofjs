//faulty calculator code
let random = Math.random();
console.log(random);

let a = prompt("Enter First number");
let c = prompt("Enter Operation");
let b = prompt("Enter Second number");

// Convert input values to numbers
a = parseFloat(a);
b = parseFloat(b);

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

if (random > 0.2) {
    console.log(`the result is ${a} ${c} ${b}`);
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    // Update the operation when random is less than or equal to 0.1
    c = obj[c];
    console.log(`the result is ${a} ${c} ${b}`);
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
