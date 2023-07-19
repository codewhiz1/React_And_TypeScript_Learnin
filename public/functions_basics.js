"use strict";
let greet = () => {
    console.log("Hello , World !!!");
};
greet();
// Function keyword
let greets_1;
greet = () => {
    console.log("Hello Again");
};
// ? represents optional argument
//const add = (a:number , b:number, c: number | string = 10) => {
//const add = (a:number , b:number, c?: number | string ): void => { 
//  or
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(6, 7, "ADDDDDDDD");
const minus = (a, b) => {
    return a - b;
};
let result = minus(15, 7);
console.log(result);
