import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {BuyModalComponent} from '../../modals/buy-modal/buy-modal.component';
import {LoginModalComponent} from '../../modals/login-modal/login-modal.component';
import {BuyModalObject} from '../../modals/buy-modal/buyModalObject';
import {BuyModalService} from '../../modals/buy-modal/buy-modal.service';
import {LoginModalService} from '../../modals/login-modal/login-modal.service';
import {AuthService} from '../../services/auth.service';
import {NotificationService} from '../../modals/notification-modal/notification.service';

@Component({
  selector: 'app-my-certificate',
  templateUrl: './my-certificate.component.html',
  styleUrls: ['./my-certificate.component.scss']
})
export class MyCertificateComponent implements OnInit {
  certificateList: any;
  isLogin = false;
  showLoading = true;
  buyModalObject: BuyModalObject = {
    id: null,
    price: null,
    type: null,
    title: null,
    bookId: null
  };

  constructor(private configService: ConfigurationService,
              private restService: RestService,
              private loginService: LoginModalService,
              private authService: AuthService,
              private notificationService: NotificationService,
              private buyModalService: BuyModalService) {
  }

  ngOnInit() {
    this.callService();
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        this.isLogin = true;
      }
    });
  }

  callService() {
    this.showLoading = true;
    this.restService.makeRequest(this.configService.post, 'api/clients/certificate/history', null, true, response => {
      this.certificateList = response.result;
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }

  showBuyModal(course) {
    if (this.isLogin) {
      this.buyModalObject.price = course.price;
      this.buyModalObject.id = course.id;
      this.buyModalObject.title = course.title;
      this.buyModalObject.type = this.configService.buy_certificate_number;
      this.buyModalService.init(BuyModalComponent, this.buyModalObject, this.buyModalObject);
    } else {
      this.loginService.init(LoginModalComponent, null, null);
    }
  }

  getCertificate(item) {
    if (item.url === null) {
      let body = {
        courseId: item.course.id
      };
      this.restService.makeRequest(this.configService.post, 'api/certificate/build', body, true, response => {
        let certificateUrl = response.result;
        window.open(certificateUrl, '_blank');
      }, error => {
        let message = error;
        this.notificationService.showNotification(message, this.configService.notifyInfoType);
      });
    } else {
      window.open(item.url, '_blank');
    }
  }
}
