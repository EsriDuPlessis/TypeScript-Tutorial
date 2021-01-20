//Lesson 3
//arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
//the push command adds new data to the array
//Because the array is declared of type string, only strings can be added
//The same applies for arrays of type string, numbers or boolean

//An array of mixed data type can also be declared
//TS recognises that the array can be of type string or integer
let mixed = ['Shaun', 5, 'Devin', 6, 8];
mixed.push('Esri'); //Adds a string to the array
mixed.push(10);//Adds an integer to the string

mixed[0] = 1; //You can also replace the string in position 0 to an integer

//objects
let ninja = {
    name: 'Mario',
    belt: 'Super Awesome',
    age: 500
};

//You can change the variables in the object
ninja.age = 1000;
ninja.name = 'Samurai Jack';

//You can also change everything in one go
ninja = {
    name: 'AirBender',
    belt: 'Watahhh',
    age: 5000000
};

//Lesson 2
let character = 'mario'; //declare that variable 'character' is of type string
let age = 30; //declare that variable 'age' is of type number
let isBlackBelt = false; //declare that variable 'isBlackBelt' is of type boolean

//TS recognises what type of data you declare and checks throughout
//the code what type of data you used.
//You can however change the variables by doing the following:

character = 'luigi';
age = 40;
isBlackBelt = true;

//declare a function named 'diameter' of type number
const circ = (diameter: number) => { 
    return diameter * Math.PI; //return a value 
};

console.log(circ(7.5)); //show the output of 'circ' with input of 7.5

//Lesson 1
const character = 'Mario';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    console.log(input);
})


