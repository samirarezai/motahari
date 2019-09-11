import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LoginModalService} from './login-modal.service';
import {RestService} from '../../services/rest.service';
import {isNullOrUndefined} from 'util';
import {VerificationModalComponent} from '../verification-modal/verification-modal.component';
import {LocalStorageService} from '../../services/local-storage.service';
import {ConfigurationService} from '../../services/configuration.service';
import {Router} from '@angular/router';
import {InvitationCodeModalService} from '../invitation-code-modal/invitation-code-modal.service';
import {AuthService} from '../../services/auth.service';
import {InvitationCodeModalComponent} from '../invitation-code-modal/invitation-code-modal.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit, OnDestroy {

  phoneNumber: string;
  errorMessage: string;
  isShowPhoneInput = true;
  isShowLoading = false;
  @ViewChild('inputEl') inputEl: ElementRef;
  @ViewChild('inputE2') inputE2: ElementRef;
  @ViewChild('inputE3') inputE3: ElementRef;
  @ViewChild('inputE4') inputE4: ElementRef;
  @ViewChild('inputE5') inputE5: ElementRef;
  message: any;
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;

  constructor(private modalService: LoginModalService,
              private restService: RestService,
              private localStorage: LocalStorageService,
              private configService: ConfigurationService,
              private router: Router,
              private invitationCodeService: InvitationCodeModalService,
              private authService: AuthService) {
  }

  public login() {
    if (this.phoneNumber !== null && !isNullOrUndefined(this.phoneNumber)) {
      let finalPhoneNumber;
      if (this.phoneNumber.startsWith('0')) {
        finalPhoneNumber = this.phoneNumber.substr(1, 10);
      } else {
        finalPhoneNumber = this.phoneNumber;
      }
      this.errorMessage = '';
      this.isShowLoading = true;
      let body = {
        mobile: '0098' + finalPhoneNumber
      };
      this.restService.makeRequest('post', 'login/mobile', body, false, response => {
        this.isShowLoading = false;
        this.localStorage.setItemToLocalStorage('mobile', finalPhoneNumber);
        this.message = 'کد تایید به شماره ' + this.phoneNumber + ' ارسال گردید لطفا آن را وارد نمایید';
        this.isShowPhoneInput = false;
        this.inputEl.nativeElement.focus();
      }, error => {
        console.log('error' + error);
        this.isShowLoading = false;
      });
    } else {
      this.errorMessage = 'لطفا شماره موبایل خود را صحیح وارد نمایید';
    }
  }

  public close() {
    this.modalService.destroy();
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  public checkCode1() {
    this.inputE2.nativeElement.focus();
  }

  public checkCode2() {
    this.inputE3.nativeElement.focus();
  }

  public checkCode3() {
    this.inputE4.nativeElement.focus();
  }

  public checkCode4() {
    this.inputE5.nativeElement.focus();
  }

  public verify() {
    let verifyCode = this.code1.toString() + this.code2.toString() + this.code3.toString() + this.code4.toString() + this.code5.toString();
    if (verifyCode.length === 5) {
      this.isShowLoading = true;
      let body = {
        mobile: '0098' + Number(this.phoneNumber).toString(),
        code: Number(verifyCode)
      };
      this.restService.makeRequest(this.configService.post, 'login/code', body, false, response => {
        this.localStorage.removeAll();
        this.localStorage.setItemToLocalStorage(this.configService.user, response.result.user);
        this.localStorage.setItemToLocalStorage(this.configService.token, response.result.token);
        this.authService.login();
        this.isShowLoading = false;
        this.close();
        if (response.result.user.invited === true) {
          this.router.navigate([this.router.url]);
          this.router.navigateByUrl(this.router.url, {skipLocationChange: true}).then(() =>
            this.router.navigate([this.router.url]));
        } else {
          this.invitationCodeService.init(InvitationCodeModalComponent, {}, null);
        }
      }, error => {
        this.isShowLoading = false;
        this.errorMessage = error;
        console.log('error' + error);
      });
    }
  }

  onEnter(event) {
    if (event.which === 13 || event.keyCode === 13) {
      this.verify();
    }
  }

  backPhone() {
    this.code1 = '';
    this.code2 = '';
    this.code3 = '';
    this.code4 = '';
    this.code5 = '';
    this.isShowPhoneInput = true;

  }

}
