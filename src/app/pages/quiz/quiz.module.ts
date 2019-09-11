import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizComponent} from './quiz.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoadingModule} from '../../shared/loading/loading.module';
import {CountdownModule} from 'ngx-countdown';

const routes: Routes = [
  {
    path: ':courseId/:stepId/:quizId',
    component: QuizComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [QuizComponent],
  imports: [
    TopBackgroundModule,
    CommonModule,
    LoadingModule,
    CountdownModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
  ]
})
export class QuizModule {
}
