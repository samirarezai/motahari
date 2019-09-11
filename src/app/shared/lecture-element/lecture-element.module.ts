import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LectureElementComponent} from './lecture-element.component';
import {MinutesTimeModule} from '../minutes-time/minutes-time.module';

@NgModule({
  declarations: [LectureElementComponent],
  imports: [
    CommonModule,
    MinutesTimeModule
  ],
  exports: [LectureElementComponent]
})
export class LectureElementModule {
}
