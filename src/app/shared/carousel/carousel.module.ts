import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [CarouselComponent]
})
export class CarouselModule {
}
