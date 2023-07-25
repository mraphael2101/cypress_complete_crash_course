/**
 * Variable naming conventions:
 * Must start with either namespace_features character, underscore, or dollar sign
 * Are case-sensitive and therefore recognised differently
 * You cannot use reserved keywords
 * If you do not initialise the variable then its default value will be undefined
 * */

// Implicit type conversion is possible without doing anything (converted from int to string)
let val = 0;
val = "Ten";
console.log("The val is", val)


/**
 * const -> declares namespace_features block scoped, read-only named constant
 */

// constant values cannot be changed after initialisation
const APP_URL = "https://abc.com"
console.log(APP_URL);

