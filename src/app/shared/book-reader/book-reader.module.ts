import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookReaderComponent } from './book-reader.component';
import {Ng5SliderModule} from 'ng5-slider';

@NgModule({
  declarations: [BookReaderComponent],
  imports: [
    CommonModule,
    Ng5SliderModule,
  ],
  exports: [BookReaderComponent]
})
export class BookReaderModule { }
