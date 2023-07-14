class Demo {

    private colour: string;

    constructor(col: string) {
        this.colour = col;
    }

    get colourName() : string {
        return this.colour;
    }

    set colourName(value: string) {
        this.colour = value;
    }

}

let myDemo = new Demo("Blue");
// Access method like namespace_features normal property for namespace_features getter, and not like namespace_features method in Java
console.log(myDemo.colourName);     

// A setter is updated as follows in TS
myDemo.colourName = "Orange";
console.log(myDemo.colourName);  