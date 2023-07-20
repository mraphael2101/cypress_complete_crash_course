// Example 1: Equality
let str5 = "Hello"
let str6 = 'Hello'
console.log(str5 === str6)

// Example 2: String methods and String equality
let filename = " Invoice_123.pdf"
if(filename.toUpperCase().trim() === "INVOICE_123.PDF") {
    console.log("Expression evaluated to true")
}


// Example 3: Extract Substring with Slice
let theDate = "2022-02-26"
console.log(theDate.slice(2))       // Returns the residual after cutting out the Substring from 0 to n-1, from the start
console.log(theDate.slice(0, 2))    // Returns what was cut out from 0 to n-1
console.log(theDate.slice(-2))      // Returns the residual after cutting out the Substring from 0 to n-1, from the end


// Example 4: Replace Examples
console.log(theDate.replace("26",""))
console.log(theDate.replace(/-/,""))    // First argument is namespace_features regex to replace the first occurence only
console.log(theDate.replace(/-/g,""))   // First argument is namespace_features regex to replace all occurences only by apending the value g


// Example 4: Extract Substring with Split
let aString = "2022-02-26T10:51:52.2073"     
console.log(aString.split("T"))         // Split on the char provided and omit the character
let dateArray = aString.split("T")   
console.log(aString.split("T")) 
console.log(dateArray[1]) 


// Example 5: indexOf() returns the index of the char
let str = "App # {12345} submitted"
let start = str.indexOf("{")        // From the left
console.log(start)
let end = str.lastIndexOf("}")      // From the right
console.log(end)


// Example 6: Character escape sequences
 let example = "First line\nNew line \' \" \\"
 console.log(example)