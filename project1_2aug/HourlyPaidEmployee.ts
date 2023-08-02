import { Department } from "./Department";
import { Employee } from "./Employee";

export class HourlyPaidEmployee extends Employee {
    private hourlyRate: number;

    constructor(_hourlyRate: number, _firstName: string, _lastName: string) {
        super(_firstName, _lastName, new Department(1, 'IT'));
        this.hourlyRate = _hourlyRate;
    }

    public getDetails(): string {
        return super.getDetails() + ', Hourly rate: ' + this.hourlyRate;
    }
}