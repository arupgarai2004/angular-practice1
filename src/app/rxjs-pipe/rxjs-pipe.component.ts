import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-pipe',
  templateUrl: './rxjs-pipe.component.html',
  styleUrls: ['./rxjs-pipe.component.css'],
})
export class RxjsPipeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let case1 = test1.pipe(
      filter((x) => x % 2 === 0),reduce((acc, one) => acc + one, 0)
    );
    case1.subscribe((x) => console.log('pipe......................=>', x));
  }
}
