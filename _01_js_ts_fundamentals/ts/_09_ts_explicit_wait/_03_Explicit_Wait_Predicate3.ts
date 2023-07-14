/**
 * In this example, we define a function called waitFor() that takes a condition function and a timeout as arguments.
 * The function returns a promise that resolves when the condition function returns true or rejects when the timeout
 * is exceeded. The waitFor() function uses a loop to check the condition function at regular intervals (100ms in this case).
 * You can replace the return true; line in the example() function with your own condition that you are waiting for.
 * */

function waitFor3(conditionFunction: () => boolean, timeout: number) {
    const pollInterval = 100; // ms
    return new Promise<void>((resolve, reject) => {
        const startTime = Date.now();
        const interval = setInterval(() => {
            if (conditionFunction()) {
                clearInterval(interval);
                // IMPORTANT resolve() function required to trigger promise to resolve and return a value
                resolve()
            } else if (Date.now() - startTime > timeout) {
                clearInterval(interval);
                reject(new Error('Timeout exceeded'));
            }
        }, pollInterval);
    });
}

// Replace return true; with your condition
async function example3() {
    console.log('Waiting...');
    await waitFor3(() => { return true; }, 5000)
        .then(function (){
            console.log("Condition evaluated to true")
        })



}

example3().then(function () {});
