import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AudioBookComponent} from './audio-book.component';
import {RouterModule, Routes} from '@angular/router';
import {TopBackgroundModule} from '../../shared/top-background/top-background.module';
import {MinutesTimeModule} from '../../shared/minutes-time/minutes-time.module';
import {LoadingModule} from '../../shared/loading/loading.module';

const routes: Routes = [
  {
    path: ':id',
    component: AudioBookComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AudioBookComponent],
  imports: [
    TopBackgroundModule,
    CommonModule,
    MinutesTimeModule,
    LoadingModule,
    RouterModule.forChild(routes)
  ]
})
export class AudioBookModule {
}
