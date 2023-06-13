
/*
    https://codyburleson.com/blog/a-javascript-implementation-of-java-util-map
*/

// Maps
const myMap = new Map([
    ["apples", "500"],
    ["bananas", "300"],
    ["oranges", "200"]
  ]);

myMap.set("pears", "200");
myMap.set("apples", "100"); // overwrites the existing value
myMap.delete("bananas");
console.log(myMap.get("apples"));
console.log("myMap size = " + myMap.size);


//myMap.put("myKey1", "Hello World!");
//myMap.put('myKey2',{'prop1':'How','prop2':' are you?'});
 
//console.log( myMap.get('myKey1') );
//console.log( myMap.get('myKey2').prop1 + myMap.get('myKey2').prop2);

//let testObj = {prop1:"Hello", prop2:" World!"};
//myMap.put('key2',testObj);  // Add a different kind of object



myMap.forEach (function(value, key) {   // Traverse all entries
    console.log(value);
  })


let text = "";
for (const x of myMap.entries()) {     // List all entries
  text += x;
}

text = "";
for (const x of myMap.keys()) {
  text += x;
}

text = "";
for (const x of myMap.values()) {       // List all values
  text += x;
}

myMap.clear();              // removes all elements from the map





// Sets
const set = new Set([1, 2, 3]);
const result = Array.from(set).map(element => element + 1);
console.log(result); // 👉️ [2, 3, 4]