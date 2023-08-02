import { Address } from "./Address";
import { HourlyPaidEmployee } from "./HourlyPaidEmployee";
import { Person } from "./Person";
import { RegularEmployee } from "./RegularEmployee";

let person=new Person('John','Doe','john@email.com',new Address('India','Kolkata'));
let employee1=new RegularEmployee(10000,'John','Doe');
let employee2=new HourlyPaidEmployee(200,'ab','cd');

console.log(person);
console.log(employee1);
console.log(employee2);