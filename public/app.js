import { Invoices } from './classes/Invoice.js';
const myself = {
    names: "AAAAAAAAA",
    contact: 999999999,
    speak(text) {
        console.log(text);
    },
    spend(amountss) {
        console.log('I spent', amountss);
        return amountss;
    }
};
const someone = (person) => {
    console.log("Interface -2 ", person.names, person.contact, person.speak, person.spend);
};
someone(myself);
console.log(myself);
//const anchor = document.querySelector('a')!;  for no error
//const anchor = document.querySelector('a');
// if(anchor) {
//     console.log(anchor.href);
// } for no error
// or use ? with anchor before ? to remove error
//console.log(anchor?.href);
//const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);
// inputs
// const type = document.querySelector('#type') as HTMLSelectElement ;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement ;
// const details = document.querySelector('#details') as HTMLInputElement ;
// const amount = document.querySelector('#amount') as HTMLInputElement ;
// form.addEventListener('submit' , (e: Event) => {
//     e.preventDefault();
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         //amount.value //by default amount is in string but it is number
//         amount.valueAsNumber  //  will show number with blue colour  
//     )
// })
//classes
const invOne_1 = new Invoices('AFIW', 'Work on the AFIW Website', 900);
const invTwo_2 = new Invoices('DFIW', 'Work on the DFIW Website', 505);
console.log(invOne_1, invTwo_2);
let invoicess_1 = [];
invoicess_1.push(invOne_1);
invoicess_1.push(invTwo_2);
console.log(invoicess_1);
invoicess_1.forEach(inv => {
    // console.log(inv.clients, inv.detailss , inv.amounts , inv.format());
    console.log(inv.clients, inv.amounts, inv.format()); // private can be accessed through format() as it's under the class
});
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// //  inputs
// const type = document.querySelector('#type') as HTMLSelectElement ;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement ;
// const details = document.querySelector('#details') as HTMLInputElement ;
// const amount = document.querySelector('#amount') as HTMLInputElement ;
// form.addEventListener('submit' , (e: Event) => {
//     e.preventDefault();
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         //amount.value //by default amount is in string but it is number
//         amount.valueAsNumber  //  will show number with blue colour  
//     )
// })
// const invOne = new Invoice('AFIW' , 'Work on the AFIW Website' , 900);
// const invTwo = new Invoice('DFIW' , 'Work on the DFIW Website' , 505);
