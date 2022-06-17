import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { summary } from './summary.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChildComponent } from './child-lifecycle/child-lifecycle.component';
import { RxjsPipeComponent } from './rxjs-pipe/rxjs-pipe.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    summary,
    LifeCycleComponent,
    ChildComponent,
    RxjsPipeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
