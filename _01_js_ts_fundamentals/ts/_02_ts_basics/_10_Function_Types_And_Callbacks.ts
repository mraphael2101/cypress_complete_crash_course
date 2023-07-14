
/** Note that the callBack function has to meet the reqs in the condition 
 *  Declaring void for the return type in the callback function means that 
 *  the compilor should return any result that is returned if the developer
 *  was to return something in the end */ 

function addAndHandle(n1:number, n2:number, callBack:(num: number) => void) {
    const result = n1 + n2;
    callBack(result);
}

// An anonymous function
addAndHandle(10, 20, (result) => {
    console.log(result);
});