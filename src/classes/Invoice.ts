import { HasFormatter } from '../interfaces/HasFormatter.js';

// classes 
export class Invoice implements HasFormatter {
    //readonly client: string;
    //readonly lets you only read the value of the variable
    //You cannot change the value inside or outside the class

    //private details: string;
    //private lets you change the value of the variable within the class

    //public amount: number;
    //public lets you change the variable within or outside of the class

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}