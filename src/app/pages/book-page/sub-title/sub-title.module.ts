import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubTitleComponent} from './sub-title.component';

@NgModule({
  declarations: [SubTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [SubTitleComponent]
})
export class SubTitleModule { }
