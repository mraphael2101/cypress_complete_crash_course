class Home {
    
    private name: string;
    private readonly tenants: string[] = [];

    constructor(name: string, tenants: string[]) {
        this.name = name;
        this.tenants = tenants;
    }

    public addTenant(name: string) : void {
        this.tenants.push(name);
        console.log(this.tenants);
    }

}

let myTenants: string[];
myTenants = ['Sarah', 'Alice']; 
let myHome = new Home('Kiln House', myTenants);
myHome.addTenant('Katie');