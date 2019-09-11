import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyIntroduceFriendComponent} from './my-introduce-friend.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: MyIntroduceFriendComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [MyIntroduceFriendComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class MyIntroduceFriendModule {
}
