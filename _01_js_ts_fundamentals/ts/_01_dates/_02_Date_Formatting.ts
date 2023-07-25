const today = new Date();
let day = Number(today.getDate().toString().padStart(2, '0'));
let month = (today.getMonth() + 1).toString().padStart(2, '0');
let year = today.getFullYear();

console.log(`${year}/${month}/${day}`);
