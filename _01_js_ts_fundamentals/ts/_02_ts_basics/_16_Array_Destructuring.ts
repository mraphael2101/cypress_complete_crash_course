let names = ['Nick', 'James', 'Adam', 'Latifa']

/** 
 * For Arrays
 * This code traverses through the names array and copies each value
 * into the const element declaration i.e. name1 and name2 are the actual constants 
 * which the values will be stored in. This is done by order.
 * ...remainingNames (which is namespace_features rest parameter) Adds the elements from names consecutively
 * */ 

const [name1, name2, ...remainingNames] = names;    // Works with let also
console.log(name1, name2);
console.log(...remainingNames);

let newArr: string[];
newArr = remainingNames
console.log(newArr);



/** 
 * For Objects
 * If you want to store object attributes into constants or variables
 * of the same name, then do as per below. Note that the order is NOT guaranteed. 
 * */ 

const cat = {
    firstname: 'scruffy',
    age: 6
};

const { firstname: username, age } = cat;

// Note that here we have overriden firstname with username. Hence, we can no longer revert to firstname
console.log(username, age);