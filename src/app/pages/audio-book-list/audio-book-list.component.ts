import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-audio-book-list',
  templateUrl: './audio-book-list.component.html',
  styleUrls: ['./audio-book-list.component.scss']
})
export class AudioBookListComponent implements OnInit {
  showLoading = true;
  isLogin = false;
  isMyBookTab = false;
  books: any;
  myBooks: any;
  finalBooks: any = [];
  finalMyBooks: any = [];
  myBookOffset = 0;
  myBookSize = 5;
  offset = 0;
  size = 1000;
  throttle = 1150;
  scrollDistance = 0;
  callFirst;
  isLoggedIn$: Observable<boolean>;
  searchText;

  constructor(private config: ConfigurationService, private restService: RestService, private authService: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLogin;
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        this.isLogin = true;
      }
      this.callAudioBookService();
    });
  }


  callMyAudioBookService() {
    this.showLoading = true;
    this.isMyBookTab = true;
    let body = {
      offset: this.myBookOffset,
      size: this.myBookSize
    };
    this.restService.makeRequest(this.config.post, 'api/purchase/audio/history', body, true, response => {
      this.myBooks = response.result;
      this.addMyBookItems();
      this.callFirst = false;
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }

  callAudioBookService() {
    this.showLoading = true;
    let body = {
      offset: this.offset,
      size: this.size
    };
    let url = 'audio/book/list';
    if (this.isLogin) {
      url = 'api/audio/book/list';
    }
    this.books = [];
    this.restService.makeRequest(this.config.post, url, body, this.isLogin, response => {
      this.books = response.result;
      this.addItems();
      this.callFirst = false;
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }

  addMyBookItems() {
    for (let i = 0; i < this.myBooks.length; i++) {
      let item = this.myBooks[i];
      let index = this.finalMyBooks.findIndex(x => x.id === item.id);
      if (index < 0) {
        this.finalMyBooks.push(this.myBooks[i]);
      }
    }
  }

  addItems() {
    for (let i = 0; i < this.books.length; i++) {
      let item = this.books[i];
      let index = this.finalBooks.findIndex(x => x.id === item.id);
      if (index < 0) {
        this.finalBooks.push(this.books[i]);
      }
    }
  }

  onScrollDown() {
    if (this.isMyBookTab === false && this.books.length !== 0 && this.callFirst === false) {
      this.callFirst = true;
      this.offset = this.size + this.offset;
      this.callAudioBookService();
    }
  }

  onScrollDownMyBook() {
    if (this.isMyBookTab === true && this.myBooks.length !== 0 && this.callFirst === false) {
      this.callFirst = true;
      this.myBookOffset = this.myBookSize + this.myBookOffset;
      this.callMyAudioBookService();
    }
  }

  onTabClick(myBookTab) {
    this.isMyBookTab = myBookTab;
    if (this.isMyBookTab === true) {
      this.callMyAudioBookService();
    } else {
      this.callAudioBookService();
    }
  }

  onSearchClick() {

  }
}
