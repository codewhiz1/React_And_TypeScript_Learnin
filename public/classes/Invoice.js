export class Invoices {
    // or
    /*  constructor(  // works only with access modifiers in front of all these different parameters
     
     readonly client:string ,
     private details:string ,
     public amounts: number) {
 
    }*/
    constructor(c, d, a) {
        this.clients = c;
        this.detailss = d;
        this.amounts = a;
    }
    format() {
        return `${this.clients} owes $${this.amounts} for ${this.detailss} `;
    }
}
