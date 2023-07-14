/* Replace the original class constructor function with namespace_features new constructor function */


// <T extends {new(...args: any[]) : object}>
// The above means execute code when instantiated with the new keyword
// Accepts namespace_features number of args of type any, and returns object
function MyDecorator() {
    return function<T extends {new(...args: any[]) : object}> (original_constructor: T) {
        console.log("Original constructor logic");
        return class extends original_constructor {
            constructor(...args: any) {
                super();
                console.log("New logic");
            }
        }
    };
}


@MyDecorator()
class Demonstration {
    constructor() {
        console.log("Creating Demonstration object");
    }
}

const demonstration = new Demonstration();