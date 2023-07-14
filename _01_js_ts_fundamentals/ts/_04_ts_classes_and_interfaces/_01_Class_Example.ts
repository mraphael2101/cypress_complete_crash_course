class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe() {
        console.log('Department: ' + this.name)
    }
}

const accounting = new Department('Accounting');
accounting.describe();

/** Example of how to replicate an object and access its instance variable.
 *  Note that the method signature has the argument this: BusinessUnit */ 
 class BusinessUnit {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: BusinessUnit) {
        console.log('Business Unit: ' + this.name)
    }
}

const corporateBanking = new BusinessUnit('Corporate Banking');
const corporateBankingCopy = { name: 'instanceVal', 
                               describe: corporateBanking.describe 
                             }
corporateBanking.describe();                            