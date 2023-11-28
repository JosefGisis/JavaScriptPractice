// First comment test
console.log('hello world');

// Use camel notation in JavaScript. That is the first word is not capitalized and the rest are.
let name = 'Yossi'; // string literal
console.log(name);

let firstName = 'Yossi ';
let lastName = 'Gisis';
console.log(firstName + lastName);

const interestRate = 0.3;
console.log(interestRate);

let isTrue = true; // Boolean literal
let undefinedVariable = undefined; 
let nullVariable = null;  

let person = {
  name: 'Yossi',
  age: 30
};  // Person object literal notation
console.log(person);

console.log(person.name);

let userSelection = 'age';
console.log(person[userSelection]);

let customArray = ['red', 'blue'];
customArray[2] = 3;
console.log(customArray); 

function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
    return 'Hello ' + firstName + ' ' + lastName;
}

greet('Yossi', 'Gisis'); // calling function

let greeting = greet('Chavi', 'Gisis');
console.log(greeting);

let numero = 5;
numero **= 2;
console.log(numero); 

// ternary operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

let ampersand = true && false;
let straightLine = true || false;
let opposite = !straightLine

console.log(ampersand, straightLine, opposite);

// Falsys include:
// false
// null
// undefined
// ''  // Empty string
// 0
// NaN

