"use strict";
//When you define a variable in TypeScript, you must explicitly tell the type of variable. 
//For example, if you use string as the data type, 
//TypeScript understands that the variable can only have string values. 
//TypeScript will show an error if you try to assign a different type of value for the variable.
//Similarly, any is another data type available in TypeScript. 
//But it is unique from the rest since using any will tell TypeScript that the variable can have any value. 
//So, for example, if you define a variable using any type, you can assign numbers, strings, booleans or even objects to that variable without errors.
//When Should We Use any Type? 1. For Migrations  2. Working with third-party libraries  3.Handling type bugs
//What are the Alternatives?  1. Use unknown    2. Use an Interface  
let age1 = 24;
age1 = true;
console.log(age1);
age1 = { names12: 'AAAAAAAAA' };
console.log(age1);
let mixeds = [];
mixeds.push(6);
mixeds.push('AADDDDDDDD');
mixeds.push(false);
let datas;
datas = { names: 'ADDDDDD', contact: 24 };
console.log(datas);
datas = { names: 25, contact: 'ADDDDDD' };
console.log(datas);
//Using unknown is the best option when you don't know the type of a variable. 
//Unlike any, unknown ensures the type safety of the variable while allowing you to assign multiple types to the variable.
let age2 = false;
age2 = 19;
console.log(age2);
