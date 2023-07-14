
// In this instance, the return type is string
function demo2() : string {
    return 'sample'
}
console.log(demo2());


/** A function can only have the return type undefined in it's declaration
 * when you use the return keyword as per below - only */
function demo3() : undefined {
    return;
}
console.log(demo3()); 


function demo() : void {
}
console.log(demo());    // prints undefined