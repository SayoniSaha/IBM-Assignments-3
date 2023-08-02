"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.getDetails = function () {
        return 'First name: ' + this.firstName + ', Last name: ' + this.lastName;
    };
    return Employee;
}());
exports.Employee = Employee;
