import { Department } from "./Department";
import { Employee } from "./Employee";

export class RegularEmployee extends Employee {
    private salary: number;

    constructor(_salary: number, _firstName: string, _lastName: string) {
        super(_firstName, _lastName, new Department(1, 'Sales'));
        this.salary = _salary;
    }

    public getDetails(): string {
        return super.getDetails() + ' salary: ' + this.salary;
    }

}