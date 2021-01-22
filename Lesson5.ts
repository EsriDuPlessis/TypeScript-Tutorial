let age: any = 25;
//any gives you the option to input a variable of any type

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi'};
console.log(age);
//This dynamic variable type allows the user to input and change the 
//age variable to any type 

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
//the same applies to arrays

let ninja: { name: any, age: any};
ninja = { name: 'yoshi', age: 25};
console.log(ninja);
//and objects

ninja = { name: 25, age: 'yoshi'};
console.log(ninja);