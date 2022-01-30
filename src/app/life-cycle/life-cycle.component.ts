import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent implements OnInit {
  user = {
    name: 'Alex',
  };
  parentData = 0;
  constructor() {}
  ngOnInit() {}
  update() {
    this.parentData += 1;
  }
  updateUser() {
    this.user.name = 'Arup';
  }
  ngAfterContentInit() {
    console.log('after content init call');
  }
}
