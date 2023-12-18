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

let userColor = undefined;
let defaultColor = 'blue';
let selectedColor = userColor || defaultColor;
console.log(selectedColor);

// In this code, statements are single lines, so we can remove the curly braces
let randoVariable = 1;
if (randoVariable > 0)
    console.log('Greater than zero');
else if (randoVariable === 0)
    console.log('equal to zero');
else
    console.log('less than zero');


// switch and case
let role = 'guest';
switch (role) {
    case 'guest':
        console.log('guest user');
        break;

    case 'moderator':
        console.log('moderator');
        break;

    default:
        console.log('unknown user');
        break;
}

// for loops
for (let i = 0; i < 5; i++) {
    console.log('hello world', i);
}

// while loop
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0)
        console.log(i);
    i++;
}

// do while loops
let j = 11;
do {
    if (j % 2 !== 0)
        console.log(j);
    j++;
} while (j <= 5);

// Infinite loops are very bad
// let k = 0;
// while (k < 5) {
//     console.log(k);
// }

// for in loop
const man = {
    name: 'Yossi',
    age: 24
};

for (let key in man)
    console.log(key, man[key]);

let colorList = ['green', 'blue', 'red'];
for (let index in colorList) {
    index = Number(index) + 1;
    console.log(index, colorList[index]);
}

// for of loop. Similar to python for loop
for (let color of colorList) {
    console.log(color);
}

// Objects literal syntax

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    // draw method
    draw: function() {
        console.log('draw');
    }
};

console.log(circle);
circle.draw();

//Factory function. uses return? Uses camel notation

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

createCircle(4);

//constructor function. Pascal notation
function Circle(radius, name) {
    this.name = name;
    this.radius = radius;
    this.diameter = this.radius * 2;
    this.circumference = this.radius * 2 * 3.14;
    this.getSpecs = function() {
        console.log('Radius for ' + this.name + ' is ' + this.radius);
        console.log('Diameter for ' + this.name + ' is ' + this.diameter);
        console.log('Circumference for ' + this.name + ' is ' + this.circumference);
    }
}

let smallCircle = new Circle(1, 'smallCircle');
smallCircle.getSpecs();

let mediumCircle = new Circle(5, 'mediumCircle');
mediumCircle.getSpecs();

let largeCircle = new Circle(10, 'largeCircle');
largeCircle.getSpecs();

// Add properties
largeCircle.color = 'blue';
console.log(largeCircle);


// constructor function
console.log(largeCircle.constructor);

const randoString = new String('Hello world');
console.log(randoString.constructor);

let anotherRandoString = 'rando string';
console.log(anotherRandoString.constructor);

// Everything in javascrip is an object, even functions!
// We can also construct functions as a class.

// How to clone an object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

const another = {};

for (let key in circle) {
    another[key] = circle[key];
}

console.log(another);

// Better way of doing this

const anotherOne = Object.assign({color: 'yellow'}, circle);

console.log(anotherOne);

// Spread method
const yetAnotherOne = { ...anotherOne };
console.log(yetAnotherOne);

//string object
const stringExample = 'rando string';
console.log(stringExample, stringExample.includes('rand'), stringExample.length, stringExample.trim(), stringExample.split(' '));

// Template literals are made using backtick characters and do
// not require escape characters. Similar to f strings in Python.

let name = 'Yossi'

const message = `
Hello ${name}, 
This is my 


first' message`;

console.log(message);

// Arrays
const numbers = [3, 4];
numbers.push(5, 6);
numbers.unshift(1, 2);
numbers.splice(2, 0, 'a', 'b');
console.log(numbers)

console.log(numbers.includes(1));

// In js, hoisting is the interpreter moving all name function to the top of the file
// In unnamed functions, we cannot call the function before their declaration because they have not been hoisted

// javascript is a dynamic language. When we do not conform to the parameter
// stucture of a function, it does not throw and exception; rather, it can give
// us some unexpected results.
// We can also adapt to the number of arguments passed. Like so:

function sum(...args) {
    let total = args.reduce((a, b) => a + b, 7)
    return total
}

console.log(sum(5, 2, 3, 4))

function Circle(radius) {
    return {
        self: this,
        radius,
        draw: function() {
            console.log('draw')
        }
    }
}

const newCircle = Circle.call({beans: 'potatos'}, 1)

// bracket notation is useful if we do not know the name of the property
// or there are invalid characters in the property name. 
newCircle['beans'] = 'potatos'

console.log(newCircle)
console.log(newCircle['self'])

delete newCircle.beans

console.log(newCircle)

// enumerating object properties
function RandoObject() {
    this.beans = 'potatos'
    this.potatos = 'beans'
    this.twig = 'berries'
}

const randoObject = new RandoObject()

for (let keyValue of Object.entries(randoObject)) {
    console.log(keyValue)
}

if ('beans' in randoObject) console.log('got beans')