import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { Department } from './department';
import { Location } from './location';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  departmentList: Department[] = [
    new Department("Sales"),
    new Department("IT"),
    new Department("HR"),
    new Department("Finance")
  ]

  locationList: Location[] = [
    new Location("Kolkata"),
    new Location("Bangalore"),
    new Location("Pune"),
    new Location("Hyderabad")
  ]

  employeeList: Employee[] = [
    new Employee("Anup", "Kumar", "anup.kumar@email.com", this.departmentList[0], this.locationList[0]),
    new Employee("John", "Doe", "john.doe@email.com", this.departmentList[1], this.locationList[1]),
    new Employee("Claire", "Murphy", "claire.murphy@email.com", this.departmentList[2], this.locationList[2]),
    new Employee("Mai", "Truong", "mai.truong@email.com", this.departmentList[3], this.locationList[3])
  ];
}
