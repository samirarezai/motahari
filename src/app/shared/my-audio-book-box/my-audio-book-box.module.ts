import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyAudioBookBoxComponent} from './my-audio-book-box.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [MyAudioBookBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [MyAudioBookBoxComponent]
})
export class MyAudioBookBoxModule {
}
