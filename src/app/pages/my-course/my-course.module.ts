import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCourseComponent } from './my-course.component';
import {RouterModule, Routes} from '@angular/router';
import {TimeToDateModule} from '../../shared/time-to-date/time-to-date.module';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: '',
    component: MyCourseComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [MyCourseComponent],
  imports: [
    CommonModule,
    TimeToDateModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class MyCourseModule { }
