import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchStepComponent} from './match-step.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {TimeToDateModule} from '../../shared/time-to-date/time-to-date.module';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: ':matchId',
    component: MatchStepComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [MatchStepComponent],
  imports: [
    TopBackgroundModule,
    CommonModule,
    TimeToDateModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class MatchStepModule {
}
