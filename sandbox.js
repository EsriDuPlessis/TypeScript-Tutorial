//arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//the push command adds new data to the array
//Because the array is declared of type string, only strings can be added
//The same applies for arrays of type string, numbers or boolean
//An array of mixed data type can also be declared
//TS recognises that the array can be of type string or integer
var mixed = ['Shaun', 5, 'Devin', 6, 8];
mixed.push('Esri'); //Adds a string to the array
mixed.push(10); //Adds an integer to the string
mixed[0] = 1; //You can also replace the string in position 0 to an integer
//objects
var ninja = {
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
