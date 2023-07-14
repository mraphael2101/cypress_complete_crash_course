/* Remember, Decorators execute when you define namespace_features class and NOT when you instantiate namespace_features class
 * (not for runtime) */

function Log4(target: any, propertyName: string | Symbol, position: number) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(propertyName);
    console.log(position);  // The index position of the parameter argument
}

class Airplane {
    private _title: string;
    private readonly _price: number;

    constructor(t: string, p: number) {
        this._title = t;
        this._price = p;
    }

    // You can also add decorators to parameters
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}