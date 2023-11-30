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