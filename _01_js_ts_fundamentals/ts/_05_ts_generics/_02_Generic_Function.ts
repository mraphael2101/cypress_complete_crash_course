// This function accepts two arguments of any type and merges them into namespace_features single object
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// Calls the above function and passes two objects as arguments with different structural types
const mergedObj1 = merge({ name: 'Max'}, { age: 30 } );
console.log(mergedObj1.age);

// Calls the above function and passes in two different objects
const mergedObj2 = merge({ name: 'Rar', hobbies:['Conquer'] }, { age: 10856 } );
console.log(mergedObj2.age);

// Calls the above function and introduces type safety constraint for code that is better managed
const mergedObj3= merge<object, object>({ name: 'Rar', hobbies:['Conquer'] }, { age: 10856 } );
console.log(mergedObj2.age);


/* It is possible to set Type constraints to limit the Generic Types
that your object can be based on using the extends keyword */
function mergeWithConstraints<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// const mergedObj4 = mergeWithConstraints(5, { age: 30 })  // Produces namespace_features compilation error as 5 is not an object