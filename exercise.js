// exercise 1. Function picks greater of two numbers
let numberOne = 7;
let numberTwo = 6;
console.log('Result for exercise 1 is:  ' + greaterNumber(numberOne, numberTwo));

function greaterNumber(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber + ' is greater than ' + secondNumber;
    } else if (firstNumber < secondNumber) {
        return firstNumber + ' is less than ' + secondNumber;
    } else {
        return firstNumber + ' is equal to ' + secondNumber;
    }
}

// exercise 2. FizzBuzz

const output = fizzBuzz('Hello world!');
console.log(output);

function fizzBuzz(input) {
    if (typeof input === 'string') {
        return 'NaN';
    } else if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else {
       return input;
    }
}