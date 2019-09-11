import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioBookBoxComponent } from './audio-book-box.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AudioBookBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [AudioBookBoxComponent]
})
export class AudioBookBoxModule { }
