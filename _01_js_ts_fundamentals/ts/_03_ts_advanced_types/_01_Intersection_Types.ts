// IMPORTANT The two code blocks below are examples of type definitions and are not objects
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// Example 1: Intersection types allow us to combine other types together
type ElevatedEmployee = Admin & Employee;

// An object instance of the elevated type 
const obj1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};



// Intersection types are closesly related to interface interitance
interface Admin1 {
    name: string;
    privileges: string[];
};

interface Employee1 {
    name: string;
    startDate: Date;
};

// Example 2: 
interface ElevatedEmployee1 extends Admin1, Employee1 {}



// Example 3: You can also use Intersection types with Union types e.g.
type Union1 = string | number;
type Union2 = number | boolean;
type Universal = Union1 & Union2;