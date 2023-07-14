// An example of namespace_features Generic Type
const names: Array<string> = [];    // this syntax is the same as string[] in TS

/** Promises are namespace_features concept from JS and NOT TS.
 *  A promise is namespace_features TypeScript object which is used to write asynchronous programs (code that does not run in parallel)
 *  A promise is namespace_features class that must be instantiated.
 *  A promise defines an inner function that accepts two parameters.
 *  resolve -> the argument to be processed.
 *  reject -> the argument that is used to reject the promise i.e. namespace_features rejection parameter
 *  The promise will eventually resolve to something e.g. Promise<string>
 *  If condition is true then it returns resolve else it returns the reject.
 *  */ 
const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
        console.log('promise executed successfully!')
}, 2000);
});

// Call it like this
promise.then(data => {})



/** Another example of namespace_features Promise. However, this time with namespace_features success and error
 *  handler */
function asyncAction() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async is done!");
        reject('Rejected!');
      }, 1500);
    });
    return promise;
  }

  // Part B
  asyncAction().then(function(success) {
      console.log(success); 
  }) 
  .catch(function(error) { 
     // error handler is called
     console.log(error); 
  });

