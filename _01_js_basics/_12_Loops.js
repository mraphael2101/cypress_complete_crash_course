// Standard For Loop
let arr = ["Apple", 10, "Orange", 20, "Grapes", 30]
 let sum = 0;
for(let i = 0; i < arr.length; i++) {
    let arrEle = arr[i]
    if(typeof arrEle === "number") 
        sum += arrEle
}
console.log(sum);



// forEach Loop
let browsers = ["Chrome", "Firefox", "Safari"]
browsers.forEach((val, index, arr) => {
    console.log(val);
    console.log(index);
    console.log(arr);
})



// while loop
let count = 1;
let isDataReturned = false;
while (isDataReturned === false && count <= 10) {
    console.log(count);
    if(count == 5) {
        isDataReturned = true;
    }
    count++;
}



// for... in Loop
let myObj = {
    a : 10,
    b : 20,
    c : 30
}

for(let key in myObj) {
    console.log(key);         // Prints the key
    console.log(myObj[key]);  // Prints the value of the key
}



// for... of Loop
for(let ele of browsers) {
    console.log(ele)
}