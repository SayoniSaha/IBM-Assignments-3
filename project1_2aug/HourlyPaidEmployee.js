"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyPaidEmployee = void 0;
var Department_1 = require("./Department");
var Employee_1 = require("./Employee");
var HourlyPaidEmployee = /** @class */ (function (_super) {
    __extends(HourlyPaidEmployee, _super);
    function HourlyPaidEmployee(_hourlyRate, _firstName, _lastName) {
        var _this = _super.call(this, _firstName, _lastName, new Department_1.Department(1, 'IT')) || this;
        _this.hourlyRate = _hourlyRate;
        return _this;
    }
    HourlyPaidEmployee.prototype.getDetails = function () {
        return _super.prototype.getDetails.call(this) + ', Hourly rate: ' + this.hourlyRate;
    };
    return HourlyPaidEmployee;
}(Employee_1.Employee));
exports.HourlyPaidEmployee = HourlyPaidEmployee;
