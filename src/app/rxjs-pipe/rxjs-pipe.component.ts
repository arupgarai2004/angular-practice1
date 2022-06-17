import { Component, OnInit } from '@angular/core';
import { forkJoin, merge, of } from 'rxjs';
import { map, reduce, filter, concat } from 'rxjs/operators';

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
    let list1 = of(2, 3, 4, 5, 6);
    let list2 = of(4, 9, 16, 25, 36)
    let final_val = list1.pipe(concat(list2));
    final_val.subscribe(y => console.log("concat=>",y));
    let final_valFjoin = forkJoin([list1, list2]);
    final_valFjoin.subscribe(z => console.log("forkJoin=>",z));

    let final_valMerge = merge(list1, list2);
    final_valMerge.subscribe(x => console.log("merge=>",x));


  }
}
