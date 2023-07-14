const fs = require('fs');

var count = 0

function increment() {
    count += 1
    return count
}

// Add code to clear file here

fs.appendFile('message.txt', `data to append ${ increment() } \n`, function (err) {
    if (err) throw err;
    console.log('Saved!');
});