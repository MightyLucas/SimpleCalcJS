//First Model of the Calc
/*
const calc = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    multiply: function (a, b) {
        console.log(a * b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
}

calc.add(2, 5);
calc.divide(210, 30);
calc.multiply(1, 7);
calc.minus(45, 38);
*/

//Second Model of the Calc
/*
const calc = {
    add: function (a, b) {
        alert(a + b);
    },
    minus: function (a, b) {
        alert(a - b);
    },
    multiply: function (a, b) {
        alert(a * b);
    },
    divide: function (a, b) {
        alert(a / b);
    },
}

calc.add(2, 5);
calc.divide(210, 30);
calc.multiply(1, 7);
calc.minus(45, 38);
*/

//Age Calculator
/*
const age = 18;
function CalculateKrAge(AgeOfForeigner) {
    return AgeOfForeigner + 2;
}

const KrAge = CalculateKrAge(age);

console.log(KrAge);
*/

//Third Model of the Calc

const calc = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a /b;
    },
}

console.log(calc.add(2, 5));
console.log(calc.divide(210, 30));
console.log(calc.multiply(1, 7));
console.log(calc.minus(45, 38));