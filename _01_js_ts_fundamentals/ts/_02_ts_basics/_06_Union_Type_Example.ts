
// Union Types are defined in the method signature as multi types separated by |
function combine(input1: number | string, input2: number | string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 33);
const combinedNames = combine('Mc', "Donald");
console.log(combinedAges);
console.log(combinedNames);

// You can combine Union types with Literal types as per below
// This declaration allows these two srtings only
let resultConversion: 'as-number' | 'as-string'; 