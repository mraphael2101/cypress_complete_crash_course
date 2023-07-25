/**
 * Only these six values will evaluate to false:
 * false
 * undefined
 * null
 * 0
 * NaN
 * "" 
 */

let val2 = undefined
if(val2) { console.log("Condition met"); } 
else { console.log(`Given ${val2} is a false value...`); }

val2 = NaN
if(val2) { console.log("Condition met"); } 
else { console.log(`Given ${val2} is a false value...`); }

val2 = ""
if(val2) { console.log("Condition met"); } 
else { console.log(`Given ${val2} is a false value...`); }


val2 = {}   // An empty object actually evaluates to true and not false
if(val2) { console.log("Condition met"); } 
else { console.log(`Given ${val2} is a false value...`); }

val2 = []   // An empty array object actually evaluates to true and not false
if(val2) { console.log("Condition met"); } 
else { console.log(`Given ${val2} is a false value...`); }

// Numerical context example:

let val3 = 5 + undefined
console.log(val3)   // A primitive plus undefined evaluates to NaN

console.log(val3 + null)    // A primitive plus null evaluates to NaN
