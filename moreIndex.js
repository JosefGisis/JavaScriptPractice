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