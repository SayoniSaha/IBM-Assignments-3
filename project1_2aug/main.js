"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address_1 = require("./Address");
var HourlyPaidEmployee_1 = require("./HourlyPaidEmployee");
var Person_1 = require("./Person");
var RegularEmployee_1 = require("./RegularEmployee");
var person = new Person_1.Person('John', 'Doe', 'john@email.com', new Address_1.Address('India', 'Kolkata'));
var employee1 = new RegularEmployee_1.RegularEmployee(10000, 'John', 'Doe');
var employee2 = new HourlyPaidEmployee_1.HourlyPaidEmployee(200, 'ab', 'cd');
console.log(person);
console.log(employee1);
console.log(employee2);
