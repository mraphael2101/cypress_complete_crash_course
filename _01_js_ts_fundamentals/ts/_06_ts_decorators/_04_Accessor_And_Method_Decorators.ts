// You can also add decorators to accessors i.e., getters and setters
// Decorators for which you can return something that TS will not ignore are of type methods and accessors
function Log2(target: any, propertyName: string , descriptor: PropertyDescriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}

// You can also add decorators to methods
function Log3(target: any, propertyName: string , descriptor: PropertyDescriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}

class Airplane {
    private _title: string;
    private _price: number;

    get price(): number {
        return this._price;
    }

    @Log2
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

    @Log3
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}