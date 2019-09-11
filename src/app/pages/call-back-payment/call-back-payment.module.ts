import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CallBackPaymentComponent} from './call-back-payment.component';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {RouterModule, Routes} from '@angular/router';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: '',
    component: CallBackPaymentComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [CallBackPaymentComponent],
  imports: [
    TopBackgroundModule,
    CommonModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class CallBackPaymentModule {
}
