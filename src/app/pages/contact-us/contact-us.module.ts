import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    TopBackgroundModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactUsModule { }
