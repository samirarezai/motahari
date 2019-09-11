import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BuyModalComponent} from '../../modals/buy-modal/buy-modal.component';
import {LoginModalComponent} from '../../modals/login-modal/login-modal.component';
import {BuyModalObject} from '../../modals/buy-modal/buyModalObject';
import {AuthService} from '../../services/auth.service';
import {LoginModalService} from '../../modals/login-modal/login-modal.service';
import {BuyModalService} from '../../modals/buy-modal/buy-modal.service';
import {ConfigurationService} from '../../services/configuration.service';

@Component({
  selector: 'app-audio-book-box',
  templateUrl: './audio-book-box.component.html',
  styleUrls: ['./audio-book-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioBookBoxComponent implements OnInit {
  @Input() book: any;

  buyModalObject: BuyModalObject = {
    id: null,
    price: null,
    type: null,
    title: null,
    bookId: null
  };
  sub: any;
  isLogin = false;

  constructor(private authService: AuthService,
              private loginService: LoginModalService,
              private buyModalService: BuyModalService,
              private configService: ConfigurationService) {
  }

  ngOnInit() {
    this.authService.isLogin.subscribe(data => {
      if (data) {
        this.isLogin = true;
      }
    });
  }

  buyAudioBook() {
    if (this.isLogin) {
      this.buyModalObject.price = this.book.audio.price;
      this.buyModalObject.id = this.book.audio.id;
      this.buyModalObject.title = this.book.title;
      this.buyModalObject.type = this.configService.buy_audio_book_number;
      this.buyModalObject.bookId = this.book.id;
      this.buyModalService.init(BuyModalComponent, this.buyModalObject, this.buyModalObject);
    } else {
      this.loginService.init(LoginModalComponent, null, null);
    }
  }

 /* ngOnChanges(changes: SimpleChanges): void {
    if (changes['book']) {
      this.book = this.book;
    }
  }*/
}
