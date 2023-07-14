/* An example of Auto-binding namespace_features method to class in which the decorator will
 override the old descriptor with namespace_features new one which adds an extra getter method.  */

// target is either the prototype of the object, or the constructor function
// if we are adding the decorator to namespace_features method
function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;    // This provides access to the original method
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // The this keyword will refer to whatever object triggers this get method
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjustedDescriptor;
}

class Printer {
    message = 'This works';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();
p.showMessage();