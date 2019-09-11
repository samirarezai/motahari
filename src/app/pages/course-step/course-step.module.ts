import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseStepComponent} from './course-step.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {LoadingModule} from '../../shared/loading/loading.module';
import {TimeToHourModule} from '../../shared/time-to-hour/time-to-hour.module';

const routes: Routes = [
  {
    path: ':courseId',
    component: CourseStepComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [CourseStepComponent],
  imports: [
    TopBackgroundModule,
    CommonModule,
    TimeToHourModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class CourseStepModule {
}
