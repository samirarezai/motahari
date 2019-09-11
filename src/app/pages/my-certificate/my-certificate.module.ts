import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCertificateComponent } from './my-certificate.component';
import {RouterModule, Routes} from '@angular/router';
import {TimeToDateModule} from '../../shared/time-to-date/time-to-date.module';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: '',
    component: MyCertificateComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [MyCertificateComponent],
  imports: [
    CommonModule,
    TimeToDateModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class MyCertificateModule { }
