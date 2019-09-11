import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeToDatePipe} from './time-to-date.pipe';

@NgModule({
  declarations: [TimeToDatePipe],
  imports: [
    CommonModule
  ],
  exports: [TimeToDatePipe]
})
export class TimeToDateModule {
}
