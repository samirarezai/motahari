import {Component, OnInit} from '@angular/core';
import {BuyModalService} from './buy-modal.service';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {BuyModalObject} from './buyModalObject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss']
})
export class BuyModalComponent implements OnInit {

  price;
  title;
  id;
  bookId;
  type;
  paymentLink;
  showMessage = false;
  requestType;
  redirectUrl;
  message = 'در حال انتقال به سایت پرداخت ...';
  isSuccess = true;

  constructor(private buyModalService: BuyModalService,
              private restService: RestService,
              private router: Router,
              private configService: ConfigurationService) {
  }

  ngOnInit() {

  }

  callPaymentLinkService() {
    this.showMessage = true;
    this.message = 'در حال انتقال به سایت پرداخت ...';
    this.isSuccess = true;
    if (this.type === this.configService.buy_audio_book_number) {
      this.requestType = 'AUDIO';
      this.redirectUrl = '/audio-book/' + this.bookId;
    } else if (this.type === this.configService.buy_course_number) {
      this.requestType = 'COURSE';
      this.redirectUrl = '/course-step/' + this.id;
    } else {
      this.requestType = 'CERTIFICATE';
      this.redirectUrl = '/my-certificate';
    }
    let body = {
      id: this.id,
      type: this.requestType,
      redirectUrl: this.redirectUrl
    };
    this.restService.makeRequest(this.configService.post, 'api/payment/site/stepOne', body, true, response => {
      this.paymentLink = response.result.payUrl;
      window.location.href = this.paymentLink;
      this.isSuccess = true;
    }, error => {
      this.message = error.response;
      this.isSuccess = false;
      if (this.message === undefined) {
        this.message = 'خطا در انتقال ';
      }
    });
  }

  onBuyClick() {
    this.callPaymentLinkService();
  }

  onClose() {
    this.buyModalService.destroy();
  }

}
