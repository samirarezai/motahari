import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteCallBackPaymentComponent} from './site-call-back-payment.component';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {RouterModule, Routes} from '@angular/router';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: '',
    component: SiteCallBackPaymentComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [SiteCallBackPaymentComponent],
  imports: [
    TopBackgroundModule,
    CommonModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class SiteCallBackPaymentModule {
}
