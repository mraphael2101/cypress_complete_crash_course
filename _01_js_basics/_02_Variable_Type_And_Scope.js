
// let -> reinitialising the variable inside namespace_features block locally will not affect it's value outside the block
let count = 0

if(true) {
    count = 10
    console.log("The value of count inside the if block: ", count);
}
console.log("The value of count outside the if block: ", count);


// var -> initialising the variable inside the block will affect all the values as if it were the public access modifier
var counter = 0

if(true) {
    var counter = 10
    console.log("The value of count inside the if block: ", counter);
}
console.log("The value of count outside the if block: ", counter);

//** Both let and const support block scoping */