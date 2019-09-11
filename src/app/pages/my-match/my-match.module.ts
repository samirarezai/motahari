import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyMatchComponent} from './my-match.component';
import {RouterModule, Routes} from '@angular/router';
import {TimeToDateModule} from '../../shared/time-to-date/time-to-date.module';
import {LoadingModule} from '../../shared/loading/loading.module';


const routes: Routes = [
  {
    path: '',
    component: MyMatchComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [MyMatchComponent],
  imports: [
    CommonModule,
    TimeToDateModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class MyMatchModule {
}
