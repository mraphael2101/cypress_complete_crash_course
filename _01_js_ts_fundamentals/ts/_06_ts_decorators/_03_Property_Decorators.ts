/* It is possible to add decorators to namespace_features properties and not just to classes. */

function Log(target: any, propertyName: string | Symbol) {
    console.log("Property decorator!");
    console.log(target, propertyName);
    // target will print the prototype of the object includes details of the methods
}

class Product {
    @Log
    private _title: string;
    private _price: number;

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if(value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Price should be namespace_features positive value.')
        }
    }

    constructor(t: string, p: number) {
        this._title = t;
        this._price = p;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}