import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {AuthService} from '../../services/auth.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {NotificationService} from '../../modals/notification-modal/notification.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  isMale: boolean;
  showLoading = true;
  organizationCode;
  myOrganizationList;

  constructor(
    private config: ConfigurationService,
    private restService: RestService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private localStorage: LocalStorageService) {
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        this.userInfo = data;
      }
    });
    this.callService();
    this.callMyOrg();
  }

  callService() {
    this.showLoading = true;
    this.restService.makeRequest(this.config.get, 'api/user/get', null, true, response => {
      this.userInfo = response.result;
      if (this.userInfo.gender === 'MALE') {
        this.isMale = true;
      } else if (this.userInfo.gender === 'FEMALE') {
        this.isMale = false;
      }
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }

  onChangeGender(isMale) {
    this.isMale = isMale;
  }

  updateInfo() {
    let body = {
      firstName: this.userInfo.firstName,
      lastName: this.userInfo.lastName,
      nationalCode: this.userInfo.nationalCode,
      fatherName: this.userInfo.fatherName,
      gender: null
    };
    if (this.isMale !== undefined && this.isMale !== null && this.isMale === true) {
      body.gender = 'MALE';
    }
    if (this.isMale !== undefined && this.isMale !== null && this.isMale === false) {
      body.gender = 'FEMALE';
    }

    this.restService.makeRequest(this.config.post, 'api/user/update', body, true, response => {
      this.userInfo.firstName = response.result.firstName;
      this.userInfo.lastName = response.result.lastName;
      this.userInfo.gender = response.result.gender;
      if (this.userInfo.gender === 'MALE') {
        this.isMale = true;
      } else if (this.userInfo.gender === 'FEMALE') {
        this.isMale = false;
      }
      this.userInfo.fatherName = response.result.fatherName;
      this.userInfo.nationalCode = response.result.nationalCode;
      this.localStorage.setItemToLocalStorage(this.config.user, this.userInfo);
      this.notificationService.showNotification(response.message, this.config.notifySuccessType);
    }, error => {
      this.notificationService.showNotification(error, this.config.notifyErrorType);
    });
  }

  callSubOrg() {
    if (this.organizationCode !== undefined && this.organizationCode.length > 0) {
      let body = {
        code: this.organizationCode
      };
      this.restService.makeRequest(this.config.post, 'api/organization/sub', body, true, response => {
        this.notificationService.showNotification(response.message, this.config.notifySuccessType);
        this.callMyOrg();
        this.organizationCode = '';
      }, error => {
        this.notificationService.showNotification(error, this.config.notifyErrorType);
      });
    }
  }

  callMyOrg() {
    this.restService.makeRequest(this.config.get, 'api/organization/list', null, true, response => {
      this.myOrganizationList = response.result;
    }, error => {

    });
  }

  callRemoveOrg(item) {
    let body = {
      organizationId: item.id
    };
    this.restService.makeRequest(this.config.post, 'api/organization/disable', body, true, response => {
      this.notificationService.showNotification(response.message, this.config.notifySuccessType);
      this.callMyOrg();
    }, error => {
      this.notificationService.showNotification(error, this.config.notifyErrorType);
    });
  }

}
