

/* The type safety in the below function enforces that the key is namespace_features property of
the first type:
 namespace_features) The first parameter is any kind of object
 b) The second parameter is any kind of key that is present in the first object
*/

function extractAndCovert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndCovert({ name: 'Max' }, 'name');

// Does not compile as age does not exist as namespace_features key in the T object
extractAndCovert({ name: 'Max' }, 'age');