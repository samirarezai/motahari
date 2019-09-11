import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.scss']
})
export class LectureListComponent implements OnInit {
  lectureSubjects: any;
  myLectureList: any;
  searchLectureList: any = null;
  isLogin = false;
  lectureTab = 0;
  offset = 0;
  size = 10;
  lectureList: any;
  searchText;
  isLoggedIn$: Observable<boolean>;
  showLoading = true;

  constructor(private config: ConfigurationService, private restService: RestService, private authService: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLogin;
    this.callLectureSubjects();
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        this.isLogin = true;
      }
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


  callLectureSubjects() {
    this.restService.makeRequest(this.config.get, 'lecture/subjects', {}, null, response => {
      this.lectureSubjects = response.result;
      this.selectSubject(this.lectureSubjects[0]);
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }

  onTabClick(selected) {
    this.lectureTab = selected;
    if (this.lectureTab === 2) {
      this.callMyLectureService();
    }
    if (this.lectureTab === 0) {
      this.callLectureSubjects();
    }
  }

  selectSubject(lectureSubject) {
    this.lectureList = lectureSubject.lectures;
    for (let i = 0; i < this.lectureSubjects.length; i++) {
      this.lectureSubjects[i].isClick = lectureSubject.id === this.lectureSubjects[i].id;
    }
  }

  onDownloadClick(lecture) {
    if (this.isLogin === true) {
      let body = {
        lectureId: lecture.id
      };

      this.restService.makeRequest(this.config.post, 'api/lecture/download', body, true, response => {

      }, error => {
      });
    }
  }

  callSearchLecture() {
    if (this.searchText.length !== 0) {
      this.showLoading = true;
      this.searchLectureList = null;
      let body = {
        searchText: this.searchText
      };
      this.restService.makeRequest(this.config.post, 'lecture/search', body, false, response => {
        this.searchLectureList = response.result;
        this.showLoading = false;
      }, error => {
        this.showLoading = false;
      });
    }
  }
}
