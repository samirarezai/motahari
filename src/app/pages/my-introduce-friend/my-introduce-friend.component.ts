import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {NotificationService} from '../../modals/notification-modal/notification.service';

@Component({
  selector: 'app-my-introduce-friend',
  templateUrl: './my-introduce-friend.component.html',
  styleUrls: ['./my-introduce-friend.component.scss']
})
export class MyIntroduceFriendComponent implements OnInit {
  userInfo;
  introCode;

  constructor(private localStorageService: LocalStorageService,
              private configService: ConfigurationService,
              private restService: RestService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.localStorageService.getItem(this.configService.user).subscribe(data => {
      this.userInfo = data;
    });
  }

  submitCode() {
    if (this.introCode === undefined || this.introCode === null) {
      this.notificationService.showNotification('کد معرف را وارد کنید', this.configService.notifyInfoType);
      return;
    }
    let body = {
      invitationCode: this.introCode
    };
    this.restService.makeRequest(this.configService.post, 'api/user/invite/code', body, true, response => {
      this.notificationService.showNotification(response.message, this.configService.notifySuccessType);
    }, error => {
      this.notificationService.showNotification(error, this.configService.notifyErrorType);
    });
  }

}
