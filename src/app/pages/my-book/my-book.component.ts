import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.scss']
})
export class MyBookComponent implements OnInit {
  showLoading = true;
  tabState = 0;
  myBookSize = 1000;
  myBookOffset = 0;
  myAudioSize = 1000;
  myAudioOffset = 0;
  myBookList: any = [];
  myAudioBookList: any = [];
  myLectureList: any = [];

  constructor(private config: ConfigurationService, private restService: RestService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        this.callMyBookService();
      }
    });
  }

  callMyBookService() {
    this.showLoading = true;
    let body = {
      size: this.myBookSize,
      offset: this.myBookOffset
    };

    this.restService.makeRequest(this.config.post, 'api/book/download/history', body, true, response => {
      this.myBookList = response.result;
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }


  callMyAudioBookService() {
    this.showLoading = true;
    let body = {
      size: this.myAudioSize,
      offset: this.myAudioOffset
    };

    this.restService.makeRequest(this.config.post, 'api/audio/book/list', body, true, response => {
      this.myAudioBookList = response.result;
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }

  callMyLectureService() {
    this.showLoading = true;
    this.restService.makeRequest(this.config.get, 'api/lecture/download/history', null, true, response => {
      this.myLectureList = response.result;
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }

  onTabClick(tabState) {
    this.tabState = tabState;
    if (this.tabState === 0 && this.myBookList.length === 0) {
      this.callMyBookService();
    }
    if (this.tabState === 1 && this.myAudioBookList.length === 0) {
      this.callMyAudioBookService();
    }
    if (this.tabState === 2 && this.myLectureList.length === 0) {
      this.callMyLectureService();
    }
  }
}
