// Using var
var name = "Alice";

// Using let
let age = 25;

// Using const
const PI = 3.14;

// Using var in a function
function greet() {  
    var greeting = "Hello, " + name;
    console.log(greeting);
}
// Using let in a block
function checkAge() {
    if (age >= 18) {
        let message = "You are an adult.";
        console.log(message);
    } else {
        let message = "You are a minor.";
        console.log(message);
    }
}
// Using const in a block
function calculateCircleArea(radius) {
    const area = PI * radius * radius;
    console.log("Area of the circle: " + area);
}   

// Using var, let, and const in the global scope
greet(); // Outputs: Hello, Alice   
checkAge(); // Outputs: You are an adult. (if age >= 18)
calculateCircleArea(5); // Outputs: Area of the circle: 78.5

let name = "Alice";         // String
let aage = 25;               // Number
let isStudent = false;      // Boolean
let address;                // Undefined
let salary = null;          // Null
let person = { name, age }; // Object
let scores = [90, 80, 70];  // Array
