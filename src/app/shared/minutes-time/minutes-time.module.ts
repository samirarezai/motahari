import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MinutesTimePipe} from './minutes-time-pipe';

@NgModule({
  declarations: [
    MinutesTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [MinutesTimePipe]
})
export class MinutesTimeModule {
}
