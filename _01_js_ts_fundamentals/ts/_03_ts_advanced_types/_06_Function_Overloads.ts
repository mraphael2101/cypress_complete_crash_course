type Combinable = string | number | boolean;

function addFunc1(a: boolean, b:boolean) : number       // In TS, this is how you do Method/Function Overloading
function addFunc1(a: number, b:number) : number         // In TS, this is how you do Method/Function Overloading
function addFunc1(a: string, b:string) : string         // In TS, this is how you do Method/Function Overloading
function addFunc1(a: Combinable, b: Combinable) {
    if(typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else if(typeof a === 'boolean' && typeof b === 'boolean') {
        return 5;
    }
    else if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }  
}

const result1 = addFunc1(true, false);
const result2 = addFunc1(1, 5);
const result3 = addFunc1('1', '2');