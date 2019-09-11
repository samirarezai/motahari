import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookPageComponent} from './book-page.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng5SliderModule} from 'ng5-slider';
import {SubTitleModule} from './sub-title/sub-title.module';
import {FormsModule} from '@angular/forms';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: ':bookId/:title',
    component: BookPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations:
    [
      BookPageComponent
    ],
  imports: [
    TopBackgroundModule,
    NgxPaginationModule,
    Ng5SliderModule,
    FormsModule,
    LoadingModule,
    CommonModule,
    SubTitleModule,
    RouterModule.forChild(routes),
  ]
})
export class BookPageModule {
}
