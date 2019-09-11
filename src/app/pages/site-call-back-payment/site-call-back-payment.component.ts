import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-site-call-back-payment',
  templateUrl: './site-call-back-payment.component.html',
  styleUrls: ['./site-call-back-payment.component.scss']
})
export class SiteCallBackPaymentComponent implements OnInit {
  status: any;
  authority: any;
  isCourse: any;
  redirectUrl: any;
  message = 'در حال انتقاله به صفحه مورد نظر.....';

  constructor(private route: ActivatedRoute, private restService: RestService, private router: Router) {
  }

  ngOnInit() {
    this.status = this.route.snapshot.queryParamMap.get('status');
    this.authority = this.route.snapshot.queryParamMap.get('authority');
    this.isCourse = this.route.snapshot.queryParamMap.get('isCourse');
    this.redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl');
    if (this.authority === null) {
      this.authority = this.route.snapshot.queryParamMap.get('Authority');
    }
    if (this.status === null) {
      this.status = this.route.snapshot.queryParamMap.get('Status');
    }
    this.callService();
  }

  callService() {
    let body = {
      payKey: this.authority,
    };
    this.restService.makeRequest('post', 'payment/stepTwo', body, false, response => {
      this.message = response.message;
      this.router.navigateByUrl(this.redirectUrl);
    }, error => {
      this.message = error;
      this.router.navigateByUrl(this.redirectUrl);
    });
  }

}
