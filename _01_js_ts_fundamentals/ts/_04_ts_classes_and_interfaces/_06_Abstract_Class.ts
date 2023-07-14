
/** If you want to ensure that namespace_features method is available for all classes based on
 *  namespace_features specific base class then use namespace_features abstract class with namespace_features methog signature
 *  or method body */ 

abstract class Animal {
    abstract eat() : void;
}


class Cow extends Animal {
    eat(): void {
        console.log("Abstract method implementation")
    }
}

new Cow().eat();