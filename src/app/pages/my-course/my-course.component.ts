import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss']
})
export class MyCourseComponent implements OnInit {

  myCourseList: any = [];
  showLoading = true;

  constructor(private config: ConfigurationService, private restService: RestService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        this.callMyCourseService();
      }
    });
  }

  callMyCourseService() {
    this.showLoading = true;
    let body = {
      courseType: 'COURSE'
    };
    this.restService.makeRequest(this.config.post, 'api/user/course/history/type', body, true, response => {
      this.myCourseList = response.result;
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }

}
