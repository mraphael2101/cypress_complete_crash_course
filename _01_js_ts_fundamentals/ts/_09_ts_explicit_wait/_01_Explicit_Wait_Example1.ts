/* Example of how to use an explicit wait in TypeScript without an automation framework:
* In this example, the wait() function is used to pause the execution of the code for a specified amount
* of time (in milliseconds). The function takes one argument:
* The amount of time (in milliseconds) to pause the execution.
* You can use this function to wait for a specific amount of time before executing
* the next line of code.
* */

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function example1() {
    console.log('Start');
    await wait(2000);
    console.log('End');
}

example1().then(r => function () {
});
