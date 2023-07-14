function waitFor4(conditionFunction: () => boolean, timeout: number) {
    const pollingInterval = 100; // ms
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
                timeout -= pollingInterval;
            }
        }, pollingInterval);
    });
}

var count: number = 0;
function isRandomIntEqualTo8(): boolean {
    console.log("called " + (count += 1) + " time(s)");
    return Math.floor(Math.random() * 8) + 1 === 5;
}

async function example4() {
    console.log('Waiting...');
    await waitFor4(isRandomIntEqualTo8, 10000)
        .then(function (){
            console.log("Condition evaluated to true")
        })
}

example4().then(function () {});
