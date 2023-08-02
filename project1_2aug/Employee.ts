import { Department } from "./Department";

export class Employee {
    constructor(private firstName: string, private lastName: string, department: Department) {
    }

    public getDetails(): string {
        return 'First name: ' + this.firstName + ', Last name: ' + this.lastName;
    }
}