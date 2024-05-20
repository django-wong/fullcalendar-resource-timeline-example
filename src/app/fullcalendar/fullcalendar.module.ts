import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, Route } from "@angular/router";
import { TimelineComponent} from "./timeline/timeline.component";
import {BrowserModule} from "@angular/platform-browser";
import {FullCalendarComponent, FullCalendarModule} from "@fullcalendar/angular";
import {EventComponent} from "./event.component";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzButtonModule} from "ng-zorro-antd/button";

const routes: Route[] = [
  {
    title: 'timeline',
    path: 'timeline',
    component: TimelineComponent
  }
];

@NgModule({
  declarations: [
    TimelineComponent,
    EventComponent
  ],
  imports: [
    FullCalendarModule,
    CommonModule,
    NzToolTipModule,
    NzButtonModule,
  ],
  exports: [
    EventComponent
  ],
  providers: [provideRouter(routes)]
})
export class FullcalendarModule { }
