function add(a, b) {    //adding
    return a + b;
}

function subtract(a, b) {           //subtracting
    return a - b;
}


function multiply(a, b) {            //multiplying
    return a * b;
}


function divide(a, b) {
    if (b === 0) {                          //division
        return "Error: Division by zero";
    }
    return a / b;
}


function modulus(a, b) {                 //Modulus
    return a % b;
}

// Example usage:
const number1 = 30;
const number2 = 5;

console.log(`Addition: ${add(number1, number2)}`);           
console.log(`Subtraction: ${subtract(number1, number2)}`);   
console.log(`Multiplication: ${multiply(number1, number2)}`); 
console.log(`Division: ${divide(number1, number2)}`);         
console.log(`Modulus: ${modulus(number1, number2)}`);        