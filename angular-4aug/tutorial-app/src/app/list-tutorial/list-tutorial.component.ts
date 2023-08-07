import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-list-tutorial',
  templateUrl: './list-tutorial.component.html',
  styleUrls: ['./list-tutorial.component.css']
})

export class ListTutorialComponent {
  tutorials: Tutorial[] = [];

  constructor(private tutorialService: TutorialService,
    private router: Router) { }
  ngOnInit(): void {
    this.getTutorials();
  }
  
  private getTutorials() {
    this.tutorialService.getTutorialList().subscribe(data => {
      this.tutorials = data;
    });
  }
}
