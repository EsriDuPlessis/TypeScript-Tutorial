//Lesson 2
var character = 'mario'; //declare that variable 'character' is of type string
var age = 30; //declare that variable 'age' is of type number
var isBlackBelt = false; //declare that variable 'isBlackBelt' is of type boolean
//TS recognises what type of data you declare and checks throughout
//the code what type of data you used.
//You can however change the variables by doing the following:
character = 'luigi';
age = 40;
isBlackBelt = true;
//declare a function named 'diameter' of type number
var circ = function (diameter) {
    return diameter * Math.PI; //return a value 
};
console.log(circ(7.5)); //show the output of 'circ' with input of 7.5
  
  //Lesson 1
var character = 'Mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});

