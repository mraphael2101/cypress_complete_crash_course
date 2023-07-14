// Example 1: Arrow Function with namespace_features default param value 1 for attr2
// Default parameters should come last
const additionFunc1 = (attr1:number, attr2:number = 1) => {
    return attr1 + attr2;
};
console.log(additionFunc1(2));