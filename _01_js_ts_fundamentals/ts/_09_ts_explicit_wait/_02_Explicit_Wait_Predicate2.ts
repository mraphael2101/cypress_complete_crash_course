/** This function works by repeatedly polling the condition function at a fixed interval until the condition
 * is met or the timeout is exceeded. The pollInterval variable controls how often the condition function
 * is called. The timeout variable specifies how long to wait for the condition to be met before giving
 * up and throwing an error.*/

async function getRandomInt(): Promise<number> {
    return Math.floor(Math.random() * 8) + 1;
}

function waitFor2(conditionFunction: () => boolean, timeout: number) {
    const pollInterval = 100; // ms
    return new Promise<void>((resolve, reject) => {
        const interval = setInterval(() => {
            if (conditionFunction()) {
                clearInterval(interval);
                // IMPORTANT resolve() function required to trigger promise to resolve and return a value
                resolve();
            } else if (timeout <= 0) {
                clearInterval(interval);
                reject(new Error('Timeout exceeded'));
            } else {
                timeout -= pollInterval;
            }
        }, pollInterval);
    });
}

// Replace return true; with your condition
async function example2() {
    console.log('Waiting...');
    await waitFor2(() => { return true }, 5000)
        .then(function (){
            console.log("Condition evaluated to true")
        })
}


example2().then(function () {});
