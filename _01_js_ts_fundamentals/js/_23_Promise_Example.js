
// the following code returns a Promise that is resolved with the value "hello":
const myMethod = function() {
    return Promise.resolve("hello");
};

myMethod().then(() => {
    console.log("done");
});

