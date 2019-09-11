import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/course-category', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  {path: 'book', loadChildren: '../app/pages/book/book.module#BookModule'},
  {path: 'book-page', loadChildren: '../app/pages/book-page/book-page.module#BookPageModule'},
  {path: 'book-list', loadChildren: '../app/pages/book-list/book-list.module#BookListModule'},
  {path: 'lectures', loadChildren: '../app/pages/lecture-list/lecture-list.module#LectureListModule'},
  {path: 'course-category', loadChildren: '../app/pages/course-category/course-category.module#CourseCategoryModule'},
  {path: 'course', loadChildren: '../app/pages/course/course.module#CourseModule'},
  {path: 'course-info', loadChildren: '../app/pages/course-info/course-info.module#CourseInfoModule'},
  {path: 'course-step', loadChildren: '../app/pages/course-step/course-step.module#CourseStepModule'},
  {path: 'quiz', loadChildren: '../app/pages/quiz/quiz.module#QuizModule'},
  {path: 'match-step', loadChildren: '../app/pages/match-step/match-step.module#MatchStepModule'},
  {path: 'match', loadChildren: '../app/pages/match/match.module#MatchModule'},
  {path: 'match-info', loadChildren: '../app/pages/match-info/match-info.module#MatchInfoModule'},
  {path: 'payment/call-back', loadChildren: '../app/pages/call-back-payment/call-back-payment.module#CallBackPaymentModule'},
  {path: 'audio-book-list', loadChildren: '../app/pages/audio-book-list/audio-book-list.module#AudioBookListModule'},
  {path: 'audio-book', loadChildren: '../app/pages/audio-book/audio-book.module#AudioBookModule'},
  {path: 'advance-search', loadChildren: '../app/pages/advance-search/advance-search.module#AdvanceSearchModule'},
  {path: 'my-book', loadChildren: '../app/pages/my-book/my-book.module#MyBookModule'},
  {path: 'my-course', loadChildren: '../app/pages/my-course/my-course.module#MyCourseModule'},
  {path: 'my-match', loadChildren: '../app/pages/my-match/my-match.module#MyMatchModule'},
  {path: 'profile', loadChildren: '../app/pages/profile/profile.module#ProfileModule'},
  {path: 'my-rate', loadChildren: '../app/pages/my-rate/my-rate.module#MyRateModule'},
  {path: 'my-introduce', loadChildren: '../app/pages/my-introduce-friend/my-introduce-friend.module#MyIntroduceFriendModule'},
  {path: 'my-certificate', loadChildren: '../app/pages/my-certificate/my-certificate.module#MyCertificateModule'},
  {
    path: 'payment/site-call-back',
    loadChildren: '../app/pages/site-call-back-payment/site-call-back-payment.module#SiteCallBackPaymentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
