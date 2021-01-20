//Distinct data types can be assigned to variables
var character = 'mario';
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
//arrays
var ninjas = [];
ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);
//union types
//This creates an array with any of the three types of data types
var mixed = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);
//Now any type of data can be added to the array
var uid;
//A variable of type string or number can be declared
//objects
var ninjaOne; //Declares variable 'ninjaOne' as an object
ninjaOne = { name: 'yoshi', age: 30, skills: ['Invisibilty', 'Super Speed'] }; //Now any attributes can be added to the object
var ninjaTwo;
ninjaTwo = { name: 'Ken', age: 25, beltColour: 'black' };
//This way of declaring an object restricts you to only change the attributes declared within the object
