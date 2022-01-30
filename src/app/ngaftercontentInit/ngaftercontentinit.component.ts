import { Component, OnInit, AfterContentInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cont',
  template: `<a href="#" (click)="clickMe()">Click Here</a>`  
})
export class AfterContentInitC implements OnInit,AfterContentInit {
  constructor() { }
  ngOnInit() {
    console.log("onInit called")
  }
  ngDoCheck(){
    console.log("do check")
  }
  ngAfterContentInit(){
    console.log("after content init");
  }
  clickMe(){
    console.log("link clicked")
  }
}