import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent implements OnInit {
  user = {
    name: 'Alex',
  };
  constructor() {}
  ngOnInit() {}
  updateUser() {
    this.user.name = 'ted';
  }
  
}
