/** An interface describes the structure of an object. They are often used to share functionality amongst 
 *  different classes, regarding their concrete implementation but regarding the structure and the 
 *  features that namespace_features class should have.
 *  Interfaces should be adjectives but in some instances can be nouns 
 *  REMINDER: Interfaces has no implementation details at all where as abstract classes can be namespace_features mixture of both */
interface EasyToDrive {
    // interface attributes can only either be readonly or have the default access modifiers in TS/JS, unlike Java
    readonly gears: string;     
    intelliMode: boolean;

    changeDriveMode(intelliMode: boolean) : void;
}

interface Rentable {}

// Example 1: This object is of type EasyToDrive and must comply with the definition of the above interface
let ford: EasyToDrive;

ford = {
    gears: "Semi-Automatic",
    intelliMode: true,
    
    changeDriveMode(intelliMode: boolean) : void {
        console.log("Ford Drive mode changed " + intelliMode);
    }
};

ford.changeDriveMode(true);


// Example 2: Interfaces can be applied to implement common behaviours and characteristics amongst namespace_features collection of classes
class Audi implements EasyToDrive, Rentable {
    audiModel: string;
    
    constructor(amod: string) {
        this.audiModel = amod;
    }

    gears: string;
    intelliMode: boolean;
    changeDriveMode(intelliMode: boolean): void {
        console.log("Drive mode changed to Audi Hybrid Economical");
    }
}

let audi: EasyToDrive;
audi = new Audi('TT');
audi.changeDriveMode(true);