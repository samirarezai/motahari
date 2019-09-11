import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LectureListComponent} from './lecture-list.component';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {RouterModule, Routes} from '@angular/router';
import {LectureElementModule} from '../../shared/lecture-element/lecture-element.module';
import {LoadingModule} from '../../shared/loading/loading.module';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LectureListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [LectureListComponent],
  imports: [
    TopBackgroundModule,
    CommonModule,
    LectureElementModule,
    FormsModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class LectureListModule {
}
