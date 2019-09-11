import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginModalService} from '../login-modal/login-modal.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {RestService} from '../../services/rest.service';
import {AuthService} from '../../services/auth.service';
import {ConfigurationService} from '../../services/configuration.service';
import {Router} from '@angular/router';
import {InvitationCodeModalService} from '../invitation-code-modal/invitation-code-modal.service';
import {InvitationCodeModalComponent} from '../invitation-code-modal/invitation-code-modal.component';

@Component({
  selector: 'app-verification-modal',
  templateUrl: './verification-modal.component.html',
  styleUrls: ['./verification-modal.component.scss']
})
export class VerificationModalComponent implements OnInit {
  @ViewChild('inputEl') inputEl: ElementRef;
  @ViewChild('inputE2') inputE2: ElementRef;
  @ViewChild('inputE3') inputE3: ElementRef;
  @ViewChild('inputE4') inputE4: ElementRef;
  @ViewChild('inputE5') inputE5: ElementRef;
  errorMessage: string;
  phoneNumber: any;
  message: any;
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;

  constructor(private modalService: LoginModalService,
              private localStorage: LocalStorageService,
              private restService: RestService,
              private configService: ConfigurationService,
              private router: Router,
              private invitationCodeService: InvitationCodeModalService,
              private authService: AuthService) {

  }

  ngOnInit() {
    this.inputEl.nativeElement.focus();
    this.localStorage.getItem('mobile').subscribe(data => {
      this.phoneNumber = '0' + data;
      this.message = 'کد تایید به شماره ' + this.phoneNumber + ' ارسال گردید لطفا آن را وارد نمایید';
    });
    console.log(this.router.url);
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

  public close() {
    this.modalService.destroy();
  }

  public verify() {
    let verifyCode = this.code1.toString() + this.code2.toString() + this.code3.toString() + this.code4.toString() + this.code5.toString();
    if (verifyCode.length === 5) {
      let body = {
        mobile: '0098' + Number(this.phoneNumber).toString(),
        code: Number(verifyCode)
      };
      this.restService.makeRequest(this.configService.post, 'login/code', body, false, response => {
        this.localStorage.removeAll();
        this.localStorage.setItemToLocalStorage(this.configService.user, response.result.user);
        this.localStorage.setItemToLocalStorage(this.configService.token, response.result.token);
        this.authService.login();
        this.close();
        if (response.result.user.invited === true) {
          this.router.navigate([this.router.url]);
          this.router.navigateByUrl(this.router.url, {skipLocationChange: true}).then(() =>
            this.router.navigate([this.router.url]));
        } else {
          this.invitationCodeService.init(InvitationCodeModalComponent, {}, null);
        }
      }, error => {
        console.log('error' + error);
      });
    }
  }

}
