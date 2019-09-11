import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyRateComponent} from './my-rate.component';
import {RouterModule, Routes} from '@angular/router';
import {LoadingModule} from '../../shared/loading/loading.module';


const routes: Routes = [
  {
    path: '',
    component: MyRateComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [MyRateComponent],
  imports: [
    CommonModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class MyRateModule {
}
