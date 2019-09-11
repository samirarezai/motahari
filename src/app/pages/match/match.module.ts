import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchComponent} from './match.component';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {RouterModule, Routes} from '@angular/router';
import {TimeToDateModule} from '../../shared/time-to-date/time-to-date.module';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: '',
    component: MatchComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [MatchComponent],
  imports: [
    LoadingModule,
    TopBackgroundModule,
    CommonModule,
    TimeToDateModule,
    RouterModule.forChild(routes),
  ]
})
export class MatchModule {
}
