//Distinct data types can be assigned to variables
let character: string = 'mario';
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;

//arrays
let ninjas: string[] = [];

ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);

//union types
//This creates an array with any of the three types of data types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);
//Now any type of data can be added to the array

let uid: string|number;
//A variable of type string or number can be declared

//objects
let ninjaOne: object; //Declares variable 'ninjaOne' as an object
ninjaOne = { name: 'yoshi', age: 30, skills: ['Invisibilty', 'Super Speed']}; //Now any attributes can be added to the object

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};
ninjaTwo = { name: 'Ken', age: 25, beltColour: 'black'};
//This way of declaring an object restricts you to only change the attributes declared within the object
