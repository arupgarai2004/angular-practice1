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
  template: `Here is the user name:{{user.name}} {{ parentData  }}     
  <button (click)="changeFromChild()">Change from child</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() parentData;
  @Input() user;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(' On CHANGES current value', changes.parentData.currentValue);
    console.log(' On CHANGES Previous value', changes.parentData.previousValue);
    console.log(' On CHANGES First value', changes.parentData.firstChange);
  }
  ngOnInit() {
    console.log('Ng On Init', this.parentData);
  }

  ngDoCheck() {
    console.log('DO CHECK', this.user);
  }
  //ngAfterContentInit() is called only once Use ngAfterContentInit to call something once after all of the content has been initialized.
  ngAfterContentInit() {
    console.log('after content init call');
  }
  //ngAfterContentChecked can be useful if you want to implement additional initialization tasks after Angular has fully initialized the component/directive's content.
  ngAfterContentChecked() {
    console.log('after content checked');
  }

  //ngAfterViewInit is useful when you want to call a lifecycle hook after all child components have been initialized and checked
  ngAfterViewInit() {
    console.log('after view init');
  }

  //ngAfterViewChecked is useful when you want to call a lifecycle hook after all child components have been initialized and checked.
  ngAfterViewChecked() {
    console.log('after view checked');
  }

  //ngOnDestroy can be helpful when you need to unsubscribe from observables or perform any other clean up when destroying a component.
  ngOnDestroy() {
    console.log('destroying child...');
  }

  changeFromChild() {
    this.parentData -= 1;
  }
}
