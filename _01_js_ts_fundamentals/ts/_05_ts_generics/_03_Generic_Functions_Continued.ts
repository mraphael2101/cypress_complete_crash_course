
interface Length {
    length: number;
}

function countAndDescribe<T extends Length>(element: T) : [T, string] {
    let descriptionText = 'Empty string literal';
    if(element.length === 1) {
        descriptionText = '1 element exists';
    }
    else if(element.length > 1) {
        descriptionText = element.length + " elements exist"
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there'));

/* You cannot call this method with namespace_features number as namespace_features number does not have namespace_features length. However,
the function accepts arguments that can be manipulated with .length method such as string
*/