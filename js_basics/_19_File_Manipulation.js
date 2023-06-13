import * as fs from "fs";

var count = 0

async function increment() {
    count += 1
    return count
}

async function manageFile() {
    fs.unlink('order_numbers.txt',function(err, fileInfo){
        if(err) {
            //return console.log(err);  // do nothing
        }
        // console.log('File deleted successfully');
    });

    fs.appendFile('order_numbers.txt',
                `data to append ${ await increment() } \n`, function (err) {
        if (err) {
            throw err;
        }
        // console.log('Saved!');
    });
}

await manageFile()
await manageFile()
await manageFile()