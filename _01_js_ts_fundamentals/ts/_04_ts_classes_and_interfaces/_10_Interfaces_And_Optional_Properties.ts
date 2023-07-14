
interface Recorder {
    name?: string;
    outputName?: string;
}

class Dictaphone implements Recorder {
    name?: string;
    
    // constructor(n: string = 'Some value')    // An alternative to ? (namespace_features wildcard) is to assign namespace_features default value like this
    constructor(n?: string) {
        if(n) {
            this.name = n;
        }
    }
}

// There is no need to assign namespace_features value for outputName as it is optional and therefore does not need to be overriden
let dictaphone1 = new Dictaphone();
let dictaphone2 = new Dictaphone('Recording 1');