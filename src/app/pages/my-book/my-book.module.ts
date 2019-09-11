import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyBookComponent} from './my-book.component';
import {RouterModule, Routes} from '@angular/router';
import {TimeToDateModule} from '../../shared/time-to-date/time-to-date.module';
import {LectureElementModule} from '../../shared/lecture-element/lecture-element.module';
import {MyAudioBookBoxModule} from '../../shared/my-audio-book-box/my-audio-book-box.module';
import {MyBookBoxModule} from '../../shared/my-book-box/my-book-box.module';
import {LoadingModule} from '../../shared/loading/loading.module';


const routes: Routes = [
  {
    path: '',
    component: MyBookComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [MyBookComponent],
  imports: [
    CommonModule,
    TimeToDateModule,
    MyBookBoxModule,
    LectureElementModule,
    MyAudioBookBoxModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class MyBookModule {
}
