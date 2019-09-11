import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookBoxComponent} from './book-box.component';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [BookBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [BookBoxComponent]
})
export class BookBoxModule {
}
