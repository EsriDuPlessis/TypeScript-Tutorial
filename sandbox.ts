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

