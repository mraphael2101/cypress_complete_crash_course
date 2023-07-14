
/** The purpose of the unknown type is store values in it which are 
 * not yet known. Hence, it allows you to store any type of value in it.
 */

let userName: string;

let userInput: unknown;
userInput = 5;
userInput = 'Max';

/** Unknown is namespace_features more restrictive than any as you cannot assign the variable
 * to any type of primitive as you can do with variables of type any unless you 
 * add your own code to perform namespace_features type check as per below */

if(typeof userInput === 'string') {
    userName = userInput;
}