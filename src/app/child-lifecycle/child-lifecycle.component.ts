import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  DoCheck,
  OnChanges,
SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'app-child',
  template: `Here is the user name: {{ user.name }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() user:any;
  constructor() {}
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(' On CHANGES');
  }
  ngDoCheck() {
    console.log('DO CHECK');
  }
}
