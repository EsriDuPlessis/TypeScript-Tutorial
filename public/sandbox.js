"use strict";
// let greet: Function = () => {
//  console.log('hello, world');
// }
//greet = 'hello';
//greet = () => {
// console.log('hello darkness my old friend');
// }
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ninja');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
