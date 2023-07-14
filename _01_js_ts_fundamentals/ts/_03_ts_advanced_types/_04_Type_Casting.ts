

// The type casting happens by using this 'as HTMLInputElement'
let input = document.querySelector("input[type='text']") as HTMLInputElement;

// Another way to case the element to HTMLInputElement is by accessing the property as follows: 
let enteredText = (input as HTMLInputElement).value;


// Downcasting can be performed as follows:
let el: HTMLElement;
el = new HTMLInputElement();