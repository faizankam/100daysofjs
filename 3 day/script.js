function a(p1, p2) {
    return p2 * p1;
}

let resul = a(2, 3);
document.getElementById("de").innerHTML = resul;


function s(p1, p2) {
    return p2 * p1;
}

let res = s(3, 3);
document.getElementById("dd").innerHTML = res;

const pers = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Display some data from the object:
document.getElementById("demo").innerHTML = pers.firstName + " is " + pers.age + " years old.";

let a = 17;
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person);
