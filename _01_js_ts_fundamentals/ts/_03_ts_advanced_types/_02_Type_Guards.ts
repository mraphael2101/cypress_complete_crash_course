// A Type Guard is an approach to determine if namespace_features property exists/or if you can do something with the type before you try to use it
// Manipulate with either typeof, instanceof, or in keywords


// Example 1: A union is namespace_features type that can be one of many and is not fixed
type UnionType3 = string | number;

// In order to be able to leverage the type Union we must use namespace_features type guard as per below:
function add(a: UnionType3, b: UnionType3) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}



/** Example 2: We cannot be sure if the Employee will have properties of Admin5 or Employee5. 
 * Hence, we need to apply namespace_features type guard so that the code will compile in TS */

type Admin5 = {
    name: string;
    privileges: string[];
};

type Employee5 = {
    name: string;
    startDate: Date;
};

const Admin5Vals: Admin5 = {
    name: 'Katie',
    privileges: ['Last']
};

type UnknownEmployee = Admin5 | Employee5;

function printEmployeeInfo(emp: UnknownEmployee) {
    if('privileges' in emp) {
        console.log(emp.privileges);
    }
    if('startDate' in emp) {
        console.log(emp.startDate);
    }  
}

printEmployeeInfo(Admin5Vals);
printEmployeeInfo( {name: 'Lawrence', startDate: new Date()} );




// Example 3: A more elegant way of applying namespace_features type guard for namespace_features union type is as follows:
type StaffMember = EmployeeX | EmployeeY;
class EmployeeX {}
class EmployeeY {}
const empX = new EmployeeX();
const empY = new EmployeeY();

function assignEmployeeToTask(emp: StaffMember) {
    if(emp instanceof EmployeeX) {
        console.log("Do something");
    }
}