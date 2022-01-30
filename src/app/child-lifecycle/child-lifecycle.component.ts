import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  DoCheck,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'app-child',
  template: `Here is the user name: {{ parentData  }}     
  <button (click)="changeFromChild()">Change from child</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, OnChanges {  
  @Input() parentData;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(' On CHANGES current value', changes.parentData.currentValue);  
    console.log(' On CHANGES Previous value', changes.parentData.previousValue); 
    console.log(' On CHANGES First value', changes.parentData.firstChange);     
  }
  ngOnInit() {}

  ngDoCheck() {
    console.log('DO CHECK');
  }
  changeFromChild() {    
    this.parentData -= 1;    
  }
}
