import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustimizedstyleDirective } from './custimizedstyle.directive';
import { RendercustomizedstyleDirective } from './rendercustomizedstyle.directive';
import { MyeventDirective } from './myevent.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CustimizedstyleDirective,
    RendercustomizedstyleDirective,
    MyeventDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
