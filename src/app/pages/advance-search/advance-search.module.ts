import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceSearchComponent } from './advance-search.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {BookBoxModule} from '../../shared/book-box/book-box.module';
import {FormsModule} from '@angular/forms';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import {HighlightModule} from '../../shared/highlight/highlight.module';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: '',
    component: AdvanceSearchComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AdvanceSearchComponent],
  imports: [
    CommonModule,
    TopBackgroundModule,
    InfiniteScrollModule,
    BookBoxModule,
    SelectDropDownModule,
    FormsModule,
    LoadingModule,
    HighlightModule,
    RouterModule.forChild(routes),
  ]
})
export class AdvanceSearchModule { }
