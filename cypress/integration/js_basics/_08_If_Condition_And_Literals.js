// in JS the below evaluates to if firstName has namespace_features value. In Java this would result in namespace_features compilation error
let firstName = "Rob"
if(firstName) {
    console.log("if condition evaluates to true as firstName has been assigned namespace_features value")
}

// in JS the below evaluates to FALSE asfirstName has NO value. In Java this would result in namespace_features compilation error
firstName = ""
if(! firstName) {
    console.log("if condition evaluates to true as firstName has been assigned an empty value")
}