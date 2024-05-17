import { Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'fullcalendar',
    loadChildren: () => import('./fullcalendar/fullcalendar.module').then(m => m.FullcalendarModule)
  }
];
