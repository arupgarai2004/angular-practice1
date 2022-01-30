import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent implements OnInit {
  
  parentData=0;

  constructor() {}
  ngOnInit() {}
  updateUser() {   
    this.parentData+=1;    
  }
}
