//Callbacks example

// Example 1
function callbackExample1 () {
    function sum (num1, num2) {
        return num1 + num2;
    }

    function rest (num1, num2) {
        return num1 - num2;
    }

    function multiply (num1, num2) {
        return num1 * num2;
    }

    function divide (num1, num2) {
        return num1 / num2;
    }


    function calc(num1, num2, callback) {
        return callback(num1, num2);
    };

    console.log("Callback to sum: " + calc(25, 5, sum));
    console.log("Callback to rest: " + calc(25, 5, rest));
    console.log("Callback to multiply: " + calc(25, 5, multiply));
    console.log("Callback to divide: " + calc(25, 5, divide));
}
// callbackExample1();

// Example 2
// We can make an example with setTimeout which is part of the API of JavaScript
function callbackExample2() {
    setTimeout(function () {
        console.log('Hi Manita!');
    }, 5000);
}
callbackExample2();

function callbackExample3() {
    function greetings(name) {
        console.log(`Hello ${name}`);
    }    
    setTimeout(greetings, 2000, 'Manaa');
}
callbackExample3();