import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyBookBoxComponent} from './my-book-box.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [MyBookBoxComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MyBookBoxComponent]
})
export class MyBookBoxModule {
}
