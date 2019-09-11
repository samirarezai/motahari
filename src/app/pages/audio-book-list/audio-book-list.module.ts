import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioBookListComponent } from './audio-book-list.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {AudioBookBoxModule} from '../../shared/audio-book-box/audio-book-box.module';
import {LoadingModule} from '../../shared/loading/loading.module';
import {FormsModule} from '@angular/forms';
import {LocalSearchModule} from '../../shared/local-search/local-search.module';

const routes: Routes = [
  {
    path: '',
    component: AudioBookListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AudioBookListComponent],
  imports: [
    CommonModule,
    TopBackgroundModule,
    AudioBookBoxModule,
    InfiniteScrollModule,
    LoadingModule,
    FormsModule,
    LocalSearchModule,
    RouterModule.forChild(routes),
  ]
})
export class AudioBookListModule { }
