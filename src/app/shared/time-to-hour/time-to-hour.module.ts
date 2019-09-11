import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeToHourPipe } from './time-to-hour.pipe';

@NgModule({
  declarations: [TimeToHourPipe],
  imports: [
    CommonModule
  ],
  exports: [TimeToHourPipe]
})
export class TimeToHourModule { }
