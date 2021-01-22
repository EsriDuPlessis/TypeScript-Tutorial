// classes 
export class Invoice {
    //readonly client: string;
    //readonly lets you only read the value of the variable
    //You cannot change the value inside or outside the class
    //private details: string;
    //private lets you change the value of the variable within the class
    //public amount: number;
    //public lets you change the variable within or outside of the class
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
