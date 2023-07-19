export class Invoices {
    readonly clients: string;     // if variable is readonly then it allows to read only inside and outside the class  ,  but does not allow to change anything inside ot outside the class        .
    private detailss: string;    // if variable is private we cannot access it outside of the class, it will give an error
    public amounts: number;      // if variable is public it can be accessed outside of the class , and it will not give any type of an error
 
 
    // or
 
    /*  constructor(  // works only with access modifiers in front of all these different parameters  
     
     readonly client:string , 
     private details:string , 
     public amounts: number) {
 
    }*/
 
 
 constructor(c: string , d: string , a: number) {
     this.clients = c;
     this.detailss = d;
     this.amounts = a;
 }
 
 format() {
     return `${this.clients} owes $${this.amounts} for ${this.detailss} `;
 }
 }