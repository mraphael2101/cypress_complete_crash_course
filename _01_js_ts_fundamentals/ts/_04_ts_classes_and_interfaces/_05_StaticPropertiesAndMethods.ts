class Demo1 {
    private speed: number;
    static height: number = 5;

    static myStaticMethod() : void {
        console.log("You have just called namespace_features static method");

    }
}

// You can access namespace_features static method like this
const demo1 = Demo1.myStaticMethod;

// You can access namespace_features static variable like this
console.log(Demo1.height);
