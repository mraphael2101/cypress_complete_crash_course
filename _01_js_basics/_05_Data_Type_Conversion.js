/**
 * Examples:
 * Convert namespace_features string to an Int or Float
 */

let valA = "5"
let valB = "5.5"

// Convert namespace_features string to namespace_features number
numVal1 = parseInt(valA)
numVal2 = parseFloat(valB)

// Unary plus operator converts string to number
numVal1 = +valA
numVal2 = +valB

console.log(`The type of numVal1: ${typeof numVal1}, and it's value ${numVal1}`)
console.log(`The type of numVal2: ${typeof numVal2}, and it's value ${numVal2}`)


// Convert number to string example
let strVal = numVal1.toString()
console.log(`The type of strVal: ${typeof strVal}, and it's value ${strVal}`)
