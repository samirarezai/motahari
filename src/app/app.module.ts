import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginModalComponent} from './modals/login-modal/login-modal.component';
import {VerificationModalComponent} from './modals/verification-modal/verification-modal.component';
import {SvgIconComponent} from './shared/svg-icon/svg-icon.component';
import {FormsModule} from '@angular/forms';
import {TopBackgroundModule} from './shared/top-background/top-background.module';
import {QuizResultComponent} from './modals/quiz-result-modal/quiz-result.component';
import {RightMenuComponent} from './pages/right-menu/right-menu.component';
import {NotificationModalComponent} from './modals/notification-modal/notification-modal.component';
import {InvitationCodeModalComponent} from './modals/invitation-code-modal/invitation-code-modal.component';
import {BuyModalComponent} from './modals/buy-modal/buy-modal.component';
import {WorkbookModalComponent} from './modals/workbook-modal/workbook-modal.component';
import {StepDescriptionModalComponent} from './modals/step-description-modal/step-description-modal.component';
import {LoadingModule} from './shared/loading/loading.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginModalComponent,
    VerificationModalComponent,
    SvgIconComponent,
    QuizResultComponent,
    RightMenuComponent,
    NotificationModalComponent,
    InvitationCodeModalComponent,
    BuyModalComponent,
    WorkbookModalComponent,
    StepDescriptionModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TopBackgroundModule,
    LoadingModule
  ],
  providers: [],
  entryComponents: [
    LoginModalComponent,
    VerificationModalComponent,
    QuizResultComponent,
    NotificationModalComponent,
    WorkbookModalComponent,
    BuyModalComponent,
    StepDescriptionModalComponent,
    InvitationCodeModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


// platformBrowserDynamic().bootstrapModule(AppModule);


