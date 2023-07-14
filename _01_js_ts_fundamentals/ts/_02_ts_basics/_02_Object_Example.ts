// Example 1 is best practice
const person1 = {
    name: 'Maximus',
    age: 39
};
console.log(person1.name);   // Prints Maximus

// Example 2
const person2: {
    name: string
    age: number
} = {
    name: 'Maximus',
    age: 35
};
console.log(person2.name);   // Prints Maximus


// Example 3
const person3: object = {
    name: 'Maximus',
    age: 39
};
console.log(person3);       // Prints { name: 'Maximus', age: 39 }


// Nested Object Example
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }
  console.log(product);       // Prints the object's instance values