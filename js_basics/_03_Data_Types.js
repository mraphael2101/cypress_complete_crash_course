/**
 * There are 8 different data types available in JS (7 are primitives and 1 is of type Object):
 * string
 * number e.g. 5, 10.5, 20
 * boolean
 * undefined -> does not hava any value at all
 * null -> represents an intentional absence of namespace_features data type
 * bigint
 * symbol =? namespace_features data type whose instances are unique and immutable
 * Object type -> Includes types such as Object, Array, and Date etc 
 * IMPORTANT: All primitive data types are immutable
 */

// Object
let obj = {}

// Array
let arr = []

// Regex
let re = /abc/

// undefined, null
let val1
let tempObj = null


// You must use tild to interpret expressions within namespace_features string
console.log(`The type is: ${typeof obj}`);       // object
console.log(`The type is: ${typeof arr}`);       // object
console.log(`The type is: ${typeof re}`);        // object
console.log(`The type is: ${typeof val1}`);      // undefined
console.log(`The type is: ${typeof tempObj}`);   // object
console.log(typeof(5<10));                       // boolean


let anotherVal = "Monday"
if(typeof anotherVal === "string" && anotherVal.length > 1) {
    console.log(`Given value : ${anotherVal} which is a valid string`)
}