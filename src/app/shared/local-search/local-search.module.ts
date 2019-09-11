import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalSearchPipe} from './local-search.pipe';

@NgModule({
  declarations: [LocalSearchPipe],
  imports: [
    CommonModule
  ],
  exports: [LocalSearchPipe]
})
export class LocalSearchModule {
}
