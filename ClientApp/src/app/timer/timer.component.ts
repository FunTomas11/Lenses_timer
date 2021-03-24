import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.styl']
})
export class TimerComponent implements OnInit {


  leftLens = {
    duration: 14,
    type: 'OS',
    remains: 5
  }


  rightLens = {
    duration: 30,
    type: 'OD',
    remains: 27
  }

  title = 'lenses-timer-angular';

  constructor() { }

  ngOnInit() {
  }

}
