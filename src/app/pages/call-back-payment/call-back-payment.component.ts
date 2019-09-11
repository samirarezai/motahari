import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-call-back-payment',
  templateUrl: './call-back-payment.component.html',
  styleUrls: ['./call-back-payment.component.scss']
})
export class CallBackPaymentComponent implements OnInit {
  status: any;
  authority: any;
  message: any;
  serverStatus: any;
  isCourse: any;
  showLoading = true;
  isSuccess;

  constructor(private route: ActivatedRoute, private configService: ConfigurationService,
              private restService: RestService, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    this.status = this.route.snapshot.queryParamMap.get('status');
    this.authority = this.route.snapshot.queryParamMap.get('authority');
    this.isCourse = this.route.snapshot.queryParamMap.get('isCourse');
    if (this.authority === null) {
      this.authority = this.route.snapshot.queryParamMap.get('Authority');
    }
    if (this.status === null) {
      this.status = this.route.snapshot.queryParamMap.get('Status');
    }
    this.callService();
    // this.callApp();
  }

  private callService() {
    let body = {
      payKey: this.authority,
    };
    this.restService.makeRequest('post', 'payment/stepTwo', body, false, response => {
      this.showLoading = false;
      this.isSuccess = true;
      this.message = response.message;
      this.serverStatus = response.result.paymentState;
      if (response.result.course !== null) {
        this.callApp(true);
      } else if (response.result.audioBook !== null) {
        this.callApp(false);
      }
    }, error => {
      this.showLoading = false;
      this.isSuccess = false;
      this.message = error;
      if (this.message === undefined) {
        this.message = 'درخواست با خطا مواجه شد';
      }
      this.serverStatus = 'ERROR';
      if (this.isCourse === 'true') {
        this.callApp(true);
      } else {
        this.callApp(false);
      }
    });
  }

  private callApp(isCourse) {
    let finalUrl;
    if (isCourse) {
      finalUrl = this.configService.appListenUrl + '/course' + '?authority=' + this.authority + '&status=' + this.serverStatus +
        '&message=' + this.message;
    } else {
      finalUrl = this.configService.appListenUrl + '/audiobook' + '?authority=' + this.authority + '&status=' + this.serverStatus +
        '&message=' + this.message;
    }
    // this.document.location.href = finalUrl;
    window.location = finalUrl;
  }


}
