class Office {
    protected name: string;
    protected capacity: number;

    constructor(name:string, capacity:number) {
        this.name = name;
        this.capacity = capacity;
        console.log(name, 'Capacity: ' + capacity);
    }
}



class ITOffice extends Office {
    protected hasVPN: boolean;

    // Declaring the argument 'public admins: string' is shortcut to having to initialise in the conventional way
    constructor(protected name: string, protected capacity: number, hasVPN: boolean, protected admins: string) {
        super(name, capacity);
        this.hasVPN = hasVPN;   // Conventional approach
        console.log('Has VPN ' + hasVPN + 'Appointed: ' + admins);
    }
}

let myOffice = new Office("Catalin's office", 40);

let myITOffice = new ITOffice("Mark's office", 20, true, ' Robert -> Admin Officer');


// NOTE In JavaScript the rules for inheritance in relation to classes and interfaces are the same as Java and C#