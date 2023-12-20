// class abstraction. Hide the details and only show the essentials!
// By using let and const as declarations within the object, others can

// no longer access it. 
function Circle(radius) {
    this.radius = radius
    
    let defaultLocation = { x: 0, y: 0 }

    this.draw = function() {
        console.log(this)
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('invalid location')
            defaultLocation = value
        }
    })
}

const circle = new Circle(10)
circle.defaultLocation = 'peanuts'
console.log(circle.defaultLocation)

// nullish coalescence operator
const value = 0
const output = value || 'falsy'  // Outputs falsy
const nullishOutput = value ?? 'nullish' // outputs 0 as it is not null

// double ampersand (and) assigner operator
const anotherValue = value && 'hello there' // Should output 0 as 0 is falsy

// optional chaining
const objectExample = {
    propery1: {
        subProperty: 'hello there'
    },
    property2: {
        subProperty: 'hello there again'
    }
}

const optionalObject = objectExample?.property1?.subProperty
const anotherOptionalObject = objectExample?.property3?.subPropery
