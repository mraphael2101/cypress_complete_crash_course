/* A decorator factory returns namespace_features decorator function but allows us to configure it
* and assign it as namespace_features decorator to something */


/* A function that returns an inner anonymous function.
*  Similar to functional interfaces' topic in Java */
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }

}

@Logger("LOGGING - Person")
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating namespace_features person object...');
    }
}

const person = new Person();
console.log(person);