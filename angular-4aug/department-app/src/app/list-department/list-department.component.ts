import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent {
  list: Department[] = [];

  constructor(private departmentService: DepartmentService, private router: Router) { }
  ngOnInit(): void {
    this.getDepartment();
  }
  private getDepartment() {
    this.departmentService.getDepartmentList().subscribe(data => {
      this.list = data;
    });
  }
}
