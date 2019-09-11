import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoadingModule} from '../../shared/loading/loading.module';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
