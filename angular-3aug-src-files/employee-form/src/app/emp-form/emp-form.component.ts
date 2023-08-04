import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {

  emp = new Employee(
    'First-Name',
    'Last-Name',
    'Email'
  );

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(
      JSON.stringify(this.emp)
    );
  }
}

