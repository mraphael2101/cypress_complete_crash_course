// Example 1
const person: {
    hobbies: string[];                 // Not fixed in length/size
    exampleTuple: [number, string];    // Fixed in type and size
} = {
    hobbies: ['Sports', 'Cooking'],
    exampleTuple: [2, 'madeup'],
}
for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}



// Example 2 -> Not fixed in length/size
let favActivitiesArr: string[];



// Example 3 -> Not fixed in length/size
let diffArr: any[];
diffArr = ['Sarah', 1]

diffArr[1] = 10;
console.log(diffArr); 
person.hobbies.push('Cycling');
console.log(person);



// Example 4: Like Java, arrays pass value by reference
// You can add values from one array to another as follows:
person.hobbies.push(person.exampleTuple[1]);
console.log(person.hobbies);

// The '...' vanilla JS operator is used to copy all of an arrays elements
person.hobbies.push(...person.hobbies);
console.log(person.hobbies);

// This is another way of appending values to an array
let arr3 = ['John', 'James'];
let anotherArray = ['Mark', ...arr3]
console.log(anotherArray);