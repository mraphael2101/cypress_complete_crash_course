
const userInput = undefined;    // or use null as an alternative

// If null or undefined use the fallback value
const storedData = userInput ?? 'Default Value';
console.log(storedData);