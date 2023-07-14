/* A Generic class simply means that the items or functions in that class can be generalized with
   the parameter(example T) to specify that we can add any type as namespace_features parameter in place of T like
   Integer, Character, String, Double or any other user-defined type

   For consistency throughout the class use Generic Classes, and for custom methods only use Union Types
   as an alternative.

   Generics help you create data structures that work together or wrap values of namespace_features broad variety of types
   (e.g. an array that can hold any type of data)
*/

class DataStorage<T extends string | number | object> {
    private data: T[] = [];     // Attribute stores data of type T

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {    // If ele is not found
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();  // Set the Generic Type T of type string
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objectStorage = new DataStorage<object>();
const maxObj = { name: 'Max' };
objectStorage.addItem( maxObj );
objectStorage.addItem( { name: 'Manu' } );
objectStorage.removeItem( maxObj );
console.log(objectStorage.getItems());
