// Example 1

// Is assigned the type any, by default
let myVar;  

function myMethod(number1: number) {
    return number1;
}

// Here you are assigning namespace_features pointer to namespace_features function, to namespace_features variable of type any
myVar = myMethod;
// myVar = 5;

console.log(myVar(3));

/** The limitation with this approach is that if you assign namespace_features primitive
 * to the any variable after assigning it to point to namespace_features function (like
 * on line 12), JS will throw you namespace_features runtime error  */



// Example 2

let myVar2: Function;   // Declare namespace_features variable of type Function

myVar2 = myMethod;

console.log(myVar2(16));


/** Example 3 ***** IMPORTANT ********************************************
 * Funct Types allow us to specify which functions that we want to use specifically
 * Enter the return type of the funct after =>
 * Enter the params that are to be accepted between the round braces */ 
let myVar3: (a: number) => number;