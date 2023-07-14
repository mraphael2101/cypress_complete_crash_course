// A1) The Spread operator continued
const superman = {
    name: 'Max',
    age: 33
};

// This line of code actually copies the object ref / pointer into memory
const copiedman = superman;
console.log(copiedman);

// A2) Copies the key value pairs from superman and appends them to copiedMan2
const copiedman2 = { ...superman }
console.log(copiedman2);



// B1) Rest Params Concept
const cumulatedFunc = (...numbers: number[]) : number => {
    return numbers.reduce((initialValue, currentValue) => {
        return initialValue + currentValue;
    });
};

// Pass into the arrow func an array of numbers and use the reduce func to 
// callback rucursively and add the current value to the initial value 
// for each iteration 
const myResult = cumulatedFunc(2, 7, 5, 23, 99.99);
console.log(myResult)