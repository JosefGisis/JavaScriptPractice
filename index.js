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