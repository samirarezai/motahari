import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './book-list.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {BookBoxModule} from '../../shared/book-box/book-box.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {LoadingModule} from '../../shared/loading/loading.module';
import {FormsModule} from '@angular/forms';
import {LocalSearchModule} from '../../shared/local-search/local-search.module';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    TopBackgroundModule,
    BookBoxModule,
    InfiniteScrollModule,
    LoadingModule,
    FormsModule,
    LocalSearchModule,
    RouterModule.forChild(routes),
  ]
})
export class BookListModule {
}
