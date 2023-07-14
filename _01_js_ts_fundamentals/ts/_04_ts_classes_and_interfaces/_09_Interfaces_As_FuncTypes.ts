
interface AddFn {
    (a: number, b: number) : number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    console.log(n1 + n2);
    return n1 + n2;
};

add(2, 5);
