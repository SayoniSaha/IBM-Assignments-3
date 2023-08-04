import { Department } from "./department";
import { Location } from "./location";

export class Employee {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public department: Department,
        public location: Location) {
    }
}
