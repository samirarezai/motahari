import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {ActivatedRoute} from '@angular/router';
import {ConfigurationService} from '../../services/configuration.service';
import {AuthService} from '../../services/auth.service';
import {LoginModalService} from '../../modals/login-modal/login-modal.service';
import {LoginModalComponent} from '../../modals/login-modal/login-modal.component';
import {BuyModalService} from '../../modals/buy-modal/buy-modal.service';
import {BuyModalObject} from '../../modals/buy-modal/buyModalObject';
import {BuyModalComponent} from '../../modals/buy-modal/buy-modal.component';
import {NotificationService} from '../../modals/notification-modal/notification.service';

@Component({
  selector: 'app-audio-book',
  templateUrl: './audio-book.component.html',
  styleUrls: ['./audio-book.component.scss']
})
export class AudioBookComponent implements OnInit {
  bookId: string;
  book: any;
  sub: any;
  isLogin = false;
  buyModalObject: BuyModalObject = {
    id: null,
    price: null,
    type: null,
    title: null,
    bookId: null
  };

  constructor(private restService: RestService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private loginService: LoginModalService,
              private buyModalService: BuyModalService,
              private notificationService: NotificationService,
              private configService: ConfigurationService) {
  }

  ngOnInit() {
    // this.sub = this.route.paramMap.subscribe(params => {
    //   this.bookId = params.get('id');
    //
    // });
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.buyModalObject.bookId = this.bookId;
    this.authService.isLogin.subscribe(data => {
      if (data) {
        this.isLogin = true;
      }
      this.callService();
    });
  }

  private callService() {
    let body = {
      bookId: this.bookId
    };
    let url;
    if (this.isLogin) {
      url = 'api/book/info';
    } else {
      url = 'book/info';
    }
    this.restService.makeRequest(this.configService.post, url, body, this.isLogin, response => {
      this.book = response.result;
      if (this.book.audio !== null && this.book.audio !== undefined) {
        this.book.audio.finalMediaList = [];
        if (this.book.audio.demo !== null) {
          this.book.audio.demo.initBuy = true;
          this.book.audio.finalMediaList.push(this.book.audio.demo);
        }
        if (this.book.audio.multimediaList.length !== 0) {
          let totalSize = 0;
          let totalTime = 0;
          for (let i = 0; i < this.book.audio.multimediaList.length; i++) {
            let item = this.book.audio.multimediaList[i];
            item.initBuy = this.book.audio.buy;
            item.price = this.book.audio.price;
            this.book.audio.finalMediaList.push(item);
            let singleSize: number = Math.round(item.size);
            totalSize += singleSize;
            totalTime += item.duration;
          }
          this.book.totalSize = totalSize;
          this.book.totalTime = totalTime;
        }
      }
    }, error => {

    });
  }


  buyAudioBook() {
    if (this.isLogin) {
      this.buyModalObject.price = this.book.audio.price;
      this.buyModalObject.id = this.book.audio.id;
      this.buyModalObject.title = this.book.title;
      this.buyModalObject.type = this.configService.buy_audio_book_number;
      this.buyModalService.init(BuyModalComponent, this.buyModalObject, this.buyModalObject);
    } else {
      this.loginService.init(LoginModalComponent, null, null);
    }
  }


  downloadLink(item) {
    let body = {
      multimediaId: item.id,
      audioBookId: this.book.audio.id
    };
    this.restService.makeRequest(this.configService.post, 'multimedia/getUrl', body, true, response => {
      window.open(response.result, '_blank');
    }, error => {
      this.notificationService.showNotification(error, this.configService.notifyErrorType);
    });
  }
}
