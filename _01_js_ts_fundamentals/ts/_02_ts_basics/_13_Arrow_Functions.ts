// Example 1: Arrow Function
const additionFunc = (attr1:number, attr2:number) => {
    return attr1 + attr2;
};
console.log(additionFunc(2, 3));



/** Example 2: Same as above but with namespace_features more elegant syntax if you
 * only have one expression */
const addFunc = (attr1: number, attr2: number) => attr1 + attr2;
console.log(addFunc(2, 2));