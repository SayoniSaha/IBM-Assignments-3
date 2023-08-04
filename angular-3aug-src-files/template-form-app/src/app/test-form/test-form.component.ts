import { Component, OnInit } from '@angular/core';

import { TestData } from '../test-data';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  testData = new TestData(
    1,
    'Name',
    'Comments',
    'Blue', 
    'Spring',
    [true, false, false, false],
  );

  colors  = ['Blue', 'Yellow', 'Purple', 'White', 'Red', 'Green'];
  seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
  hobbies = ['Reading', 'Writing', 'Painting', 'Swimming'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(
      JSON.stringify(this.testData)
    );
  }

}
