import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {LoginModalService} from '../modals/login-modal/login-modal.service';
import {LoginModalComponent} from '../modals/login-modal/login-modal.component';
import {VerificationModalComponent} from '../modals/verification-modal/verification-modal.component';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {RightMenuComponent} from '../pages/right-menu/right-menu.component';
import {InvitationCodeModalService} from '../modals/invitation-code-modal/invitation-code-modal.service';
import {InvitationCodeModalComponent} from '../modals/invitation-code-modal/invitation-code-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLogin = false;
  @Output() menuClick = new EventEmitter();

  constructor(private modalService: LoginModalService,
              private authService: AuthService,
              private invitationCodeModalService: InvitationCodeModalService) {
    /*authService.isLoggedIn.subscribe(data => {
      this.isLogin = data;
    });*/
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLogin;
  }

  public testModal() {
    this.modalService.init(VerificationModalComponent, {}, {});
  }

  public onLogout() {
    this.authService.logout();
  }
  public openModal() {
    let inputs = {
      isMobile: false
    };
    this.modalService.init(LoginModalComponent, inputs, {});
  }

  openMenu() {
    this.menuClick.emit(true);
  }


}
