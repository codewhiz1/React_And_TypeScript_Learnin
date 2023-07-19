"use strict";
const character = 'marioss';
let age = 24;
let names = "AAAAAA";
let isBlackkBelt = false;
names = "ADADADAD";
console.log(character);
console.log(age);
console.log(names);
console.log(isBlackkBelt);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
// checking type
const square = (len) => {
    return len * Math.SQRT2;
};
console.log(square(9));
// String type array
let admins = ['AAAAAA', 'BBBBBBBB', 'CCCCCCCCCC'];
admins.push('6');
// number type array
let numbers = [10, 25, 33, 66];
numbers.push(6);
// numbers.push('hi');
// numbers[2] = 'hi';
// numbers[2] = 6;
// mixed type array
let mixed = ['AAAAAAAAA', 6, 'BBBBBBBBBB', 7, 'CCCCCCCCCCCCCCC'];
mixed.push('ryu');
mixed.push(28);
mixed[0] = 6666666666;
//objects
let object_tst = {
    names: "AAAAAAAAAA",
    belt: "blue",
    contact: 666666
};
// if changing the values of the objects a properties we need to have the same number and same name of the properties or it will show a error in code        
object_tst = {
    names: "BBBBBBBBB",
    belt: "white",
    contact: 22222222,
};
console.log(object_tst);
object_tst.names = "FFFFFFFFFFFFFFFFFFFFFF";
object_tst.contact = 222222222;
// object_tst.contact = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF'  We cannot chage the type once we have defined the variable with a certain type in the object  
// object.tst.id = 2222222222  We cannot add / define  /  create another property with different name once the object is defined it should have the same structures                                      
console.log(object_tst);
console.log(object_tst.contact);
console.log(object_tst.belt);
console.log(admins);
console.log(numbers);
console.log(mixed);
// explicit types  
let characters;
let ages;
let isLoggedIN;
// let ages = "AAAAAAAAA";  Not allowed due to type of the data mismatchin is
ages = 24; // correct
// isLoggedIN = 24;  Not allowed as data type is mismatchin 
isLoggedIN = true; // correct
let char2 = [];
char2.push("AAAAAAAAAA");
console.log(char2);
let mixedExplicitArray = [];
mixedExplicitArray.push(24);
mixedExplicitArray.push("hl");
//mixedExplicitArray.push(true);
console.log(mixedExplicitArray);
let uid;
uid = 12;
uid = "hl";
// uid = true;  Not allowed 
let char6;
char6 = {
    names1: "hl",
    contacts: 9999999999
};
console.log(char6);
let char9;
char9 = {
    names2: "hi",
    contacts2: 9999999999,
    ud: "Wr"
};
console.log(char9);
