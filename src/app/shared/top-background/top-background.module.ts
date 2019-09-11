import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBackgroundComponent} from './top-background.component';

@NgModule({
  declarations: [
    TopBackgroundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TopBackgroundComponent]
})
export class TopBackgroundModule {
}
