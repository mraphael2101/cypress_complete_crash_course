
let myValue1 = "1"
let myValue2 = 1

// JavaScript attempts to implicitly convert one type to the other
if(myValue1 == myValue2) {
    console.log("String value equality is true")
}

if(myValue1 !== myValue2) {
    console.log("String value equality is true. However, type equality is false which overall evaluates the expression to false")
}
