import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchInfoComponent } from './match-info.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {BookReaderModule} from '../../shared/book-reader/book-reader.module';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: ':stepId',
    component: MatchInfoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [MatchInfoComponent],
  imports: [
    TopBackgroundModule,
    BookReaderModule,
    CommonModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class MatchInfoModule { }
