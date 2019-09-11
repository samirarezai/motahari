import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCategoryComponent } from './course-category.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {CarouselModule} from '../../shared/carousel/carousel.module';
import {TimeToDateModule} from '../../shared/time-to-date/time-to-date.module';
import {LoadingModule} from '../../shared/loading/loading.module';


const routes: Routes = [
  {
    path: '',
    component: CourseCategoryComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [CourseCategoryComponent],
  imports: [
    TopBackgroundModule,
    CommonModule,
    CarouselModule,
    TimeToDateModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class CourseCategoryModule { }
