console.log('________________________________________________________________________');
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

// exercise 3. Get string properties
const movie = {
    title: 'Blade Runner 2049',
    release: 2017,
    rating: 88,
    director: 'Denise Villeneuve'
}

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key + ': ' + obj[key]);
        }
    }
}

// ecercise 4. Show prime number
let numberPick = 4;
console.log(numberPick + showPrimes(numberPick));

function showPrimes(limit) {
    for (let i = 2; i < limit; i++) {
        if (limit % i === 0) {
            return ' is not a prime number';
        }
    }
    return ' is a prime number';
}

// exercise 4

function Address(street, address, city, state) {
    this.street = street;
    this.address = address;
    this.city = city;
    this.state = state;
    this.getAddress = function() {
        console.log(`You live at ${this.address} ${this.street} street in ${this.city}, ${this.state}.`);
    };
}
 
const myAddress = new Address('Capital lane', 8, 'Lakewood', 'New Jersey');
myAddress.getAddress();

function createAddress(street, city, zip) {
    return {
        street,
        city,
        zip
    };
}

console.log(createAddress('capital', 'lakewood', '08701'));
myOtherAddress = createAddress('capital', 'lakewood', '08701');
console.log(myOtherAddress);

console.log('_____________________________________________________________________________');