let str = "apple , banana , kiwi";
document.getElementById("demo").innerHTML = str.substr(0, 5);
function myFunction() {
  let abc = "visit wali";
  document.getElementById("demo1").innerHTML = abc.replace("wali", "faizan");
}
function mysFunction() {
  let text = document.getElementById("desmo").innerHTML;
  document.getElementById("desmo").innerHTML =
    text.toUpperCase();
}
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ", text2);
document.getElementById("de").innerHTML = text3;

let a = prompt( "enter your name");
console.log("your name is " + a);
let istrue = confirm("do you want to write it on the page");
if (istrue) {
  document.write(a);
}
else {
  document.write("please allow me to write");
}
let age = prompt("enter age");
if (age > 18) {
  alert("you can drive");
}
else if (age == 0){
  alert("are you kidding?");
}
else {
  alert("you can not drive");
}
/*
below code translates to:
if(d>b){
    let c = d - b;
}
else {
    let c = d - b;
}
*/


var d = 6;
var b = 8;
let dad = d > b ? (d - b) : (b - d);
console.log(dad);
let dads = 1;
for (let i = 0; i < 10; i++) {
  console.log(dads + i);
}

