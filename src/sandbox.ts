
// example 1
let greet: (a: string, b: string) => void;
//Here you give the variable 'greet' a function signature,
//meaning that you declare which type of data you input

greet = (name: string, greeting: string) => {
    console.log('${name} says ${greeting}');
}
//The ${} notation allows you to output the data from the function as a string type

// example 2
let calc: (a: number, b: number, c: string) => number;
//Function signature
//Note that this function is set to give a certain data type as output

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') { 
        return numOne + numTwo;
    } else {
        return numOne - numTwo; //The code will result in error if you don't make sure that 
    }                           //a data type 'number' is given as output
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
    console.log('${ninja.name} is ${ninja.age} years old');
}

