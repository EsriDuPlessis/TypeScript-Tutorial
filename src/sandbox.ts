// let greet: Function = () => {
//  console.log('hello, world');
// }

//greet = 'hello';

//greet = () => {
// console.log('hello darkness my old friend');
// }

const add = (a: number, b: number, c?: number | string): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, 'ninja');

const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(10,7);
console.log(result);