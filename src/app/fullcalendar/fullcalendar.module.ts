import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, Route } from "@angular/router";
import { TimelineComponent} from "./timeline/timeline.component";
import {BrowserModule} from "@angular/platform-browser";
import {FullCalendarModule} from "@fullcalendar/angular";

const routes: Route[] = [
  {
    title: 'timeline',
    path: 'timeline',
    component: TimelineComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [provideRouter(routes)]
})
export class FullcalendarModule { }
