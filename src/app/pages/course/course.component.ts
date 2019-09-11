import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginModalService} from '../../modals/login-modal/login-modal.service';
import {AuthService} from '../../services/auth.service';
import {LoginModalComponent} from '../../modals/login-modal/login-modal.component';
import {NotificationService} from '../../modals/notification-modal/notification.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course: any;
  sub: any;
  courseId: string;
  isLogin = false;
  isLoggedIn$: Observable<boolean>;
  loading = true;

  constructor(private config: ConfigurationService,
              private restService: RestService,
              private router: Router,
              private loginModalService: LoginModalService,
              private authService: AuthService,
              private notificationService: NotificationService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId');
      this.callCourseService();
    });
    this.authService.isLogin.subscribe(data => {
      if (data) {
        this.isLogin = true;
      }
    });
  }

  callCourseService() {
    let body = {
      courseId: this.courseId,
    };
    this.restService.makeRequest(this.config.post, 'course/byId', body, true, response => {
      this.course = response.result;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.notificationService.showNotification(error, this.config.notifyErrorType);
    });
  }

  joinToCourse() {
    if (this.isLogin) {
      if (this.course.preCourse === null || this.course.preCourse.passed) {
        let routerLink: string = '/course-step/' + this.course.id;
        this.router.navigateByUrl(routerLink);
      } else {
        let message = 'شما هنوز پیش نیاز این دوره را نگذرانده‌اید';
        this.notificationService.showNotification(message, this.config.notifyInfoType);
      }
    } else {
      this.loginModalService.init(LoginModalComponent, null, null);
    }
  }
}
