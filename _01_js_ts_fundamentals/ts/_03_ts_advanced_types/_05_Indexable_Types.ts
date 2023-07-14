// In TypeScript, interfaces can also describe indexible types i.e. types which can be accessed by indexes


//defining reusable indexable type
interface States {
    [state: string]: boolean;   //indexer
}


let s: States = {'enabled': true, 'maximized':false};   // Use when you want to accept values of namespace_features certain type but you do not know how many
console.log(s);
console.log(s['maximized']);