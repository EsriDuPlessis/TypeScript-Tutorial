"use strict";
// example 1
var greet;
//Here you give the variable 'greet' a function signature,
//meaning that you declare which type of data you input
greet = function (name, greeting) {
    console.log('${name} says ${greeting}');
};
//The ${} notation allows you to output the data from the function as a string type
// example 2
var calc;
//Function signature
//Note that this function is set to give a certain data type as output
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo; //The code will result in error if you don't make sure that 
    } //a data type 'number' is given as output
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log('${ninja.name} is ${ninja.age} years old');
};

