import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {LectureElementModule} from '../../shared/lecture-element/lecture-element.module';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: ':id',
    component: BookComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    TopBackgroundModule,
    CommonModule,
    LoadingModule,
    LoadingModule,
    RouterModule.forChild(routes),
    LectureElementModule
  ]
})
export class BookModule {
}
