import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseInfoComponent} from './course-info.component';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {RouterModule, Routes} from '@angular/router';
import {BookReaderModule} from '../../shared/book-reader/book-reader.module';

const routes: Routes = [
  {
    path: ':courseId',
    component: CourseInfoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [CourseInfoComponent],
  imports: [
    TopBackgroundModule,
    BookReaderModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CourseInfoModule {
}
