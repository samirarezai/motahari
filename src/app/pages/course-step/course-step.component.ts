import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../modals/notification-modal/notification.service';
import {WorkBookService} from '../../modals/workbook-modal/work-book.service';
import {WorkbookModalComponent} from '../../modals/workbook-modal/workbook-modal.component';
import {AuthService} from '../../services/auth.service';
import {LoginModalService} from '../../modals/login-modal/login-modal.service';
import {LoginModalComponent} from '../../modals/login-modal/login-modal.component';
import {BuyModalService} from '../../modals/buy-modal/buy-modal.service';
import {BuyModalObject} from '../../modals/buy-modal/buyModalObject';
import {BuyModalComponent} from '../../modals/buy-modal/buy-modal.component';
import {StepDescriptionService} from '../../modals/step-description-modal/step-description.service';
import {StepDescriptionModalComponent} from '../../modals/step-description-modal/step-description-modal.component';

@Component({
  selector: 'app-course-step',
  templateUrl: './course-step.component.html',
  styleUrls: ['./course-step.component.scss']
})
export class CourseStepComponent implements OnInit {

  stepList: any;
  courseId: string;
  sub: any;
  course: any;
  isLogin = false;
  isCallService = false;
  buyModalObject: BuyModalObject = {
    id: null,
    price: null,
    type: null,
    title: null,
    bookId: null
  };

  constructor(private configService: ConfigurationService,
              private route: ActivatedRoute,
              private restService: RestService,
              private router: Router,
              private notificationService: NotificationService,
              private authService: AuthService,
              private loginModalService: LoginModalService,
              private loginService: LoginModalService,
              private buyModalService: BuyModalService,
              private stepDescriptionModalService: StepDescriptionService,
              private workbookService: WorkBookService) {
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId');
      this.callCourse();
      this.callStartCourse();
      this.isCallService = true;
    });
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        this.isLogin = true;
        if (!this.isCallService) {
          this.callCourse();
        }
      }
    });
  }

  callCourse() {
    let body = {
      courseId: this.courseId,
    };
    this.restService.makeRequest(this.configService.post, 'course/byId', body, true, response => {
      this.course = response.result;
      this.course.isOpen = false;
      this.callStepList();
    }, error => {
    });
  }

  callStartCourse() {
    let body = {
      courseId: this.courseId
    };
    this.restService.makeRequest(this.configService.post, 'api/user/course/start', body, true, resposne => {

    }, error => {
    });
  }

  callStepList() {
    let body = {
      courseId: this.courseId
    };
    this.restService.makeRequest(this.configService.post, 'step/list', body, true, response => {
      this.isCallService = false;
      this.stepList = response.result;
      this.stepList.forEach((item) => {
        item.isOpen = false;
        item.fileSize = 0;
        if ((item.text !== null && item.text !== undefined && item.text !== '') || item.book !== null) {
          item.fileSize = 1;
        }
        if (item.multimedias !== null && item.multimedias.length !== 0) {
          item.fileSize += item.multimedias.length;
        }
      });
    }, error => {
    });
  }

  public onDownload(url) {
    window.open(url, '_blank');
  }

  openStepDetail(step) {
    if (step.allowed) {
      step.isOpen = !step.isOpen;
    }
  }

  goToQuiz(step) {
    if (this.isLogin) {
      if (step.quizDelayDenied) {
        let message = 'برای آزمون ' + step.course.minDelayQuiz + '‌ روز دیگر مراجعه کنید';
        this.notificationService.showNotification(message, this.configService.notifyInfoType);
      } else {
        switch (step.quiz.quizState) {
          case 'NOTHING':
            let routerLink: string = '/quiz/' + step.course.id + '/' + step.id + '/' + step.quiz.id;
            this.router.navigateByUrl(routerLink);
            break;
          case 'NOT_STARTED':
            this.notificationService.showNotification('تا زمان شروع آزمون صبر کنید', this.configService.notifyInfoType);
            break;
          case 'EXPIRED':
            this.notificationService.showNotification('زمان آزمون به پایان رسیده است.', this.configService.notifyInfoType);
            break;
          case 'MAX_COUNT':
            this.notificationService.showNotification('شما به حد مجاز تعداد دفعات شرکت در آزمون رسیده‌اید',
              this.configService.notifyInfoType);
            break;
        }
      }
    } else {
      this.loginModalService.init(LoginModalComponent, null, null);
    }
  }

  openWorkbook() {
    let courseInput = {
      courseId: this.courseId
    };
    this.workbookService.init(WorkbookModalComponent, courseInput, courseInput);
  }

  openFinalCourse() {
    if (this.course.quizAllowed) {
      this.course.isOpen = !this.course.isOpen;
    }
  }

  goToCourseQuiz() {
    if (this.isLogin) {
      if (this.course.quizAllowed) {
        switch (this.course.quiz.quizState) {
          case 'NOTHING':
            let routerLink: string = '/quiz/' + this.course.id + '/' + 0 + '/' + this.course.quiz.id;
            this.router.navigateByUrl(routerLink);
            break;
          case 'NOT_STARTED':
            this.notificationService.showNotification('تا زمان شروع آزمون صبر کنید', this.configService.notifyInfoType);
            break;
          case 'EXPIRED':
            this.notificationService.showNotification('زمان آزمون به پایان رسیده است.', this.configService.notifyInfoType);
            break;
          case 'MAX_COUNT':
            this.notificationService.showNotification('شما به حد مجاز تعداد دفعات شرکت در آزمون رسیده‌اید',
              this.configService.notifyInfoType);
            break;
        }
      }
    }
  }

  callDoingService() {
    let body = {
      courseId: this.courseId
    };
    this.restService.makeRequest(this.configService.post, 'api/user/course/doing', body, true, response => {

    }, error => {
    });
  }

  openDescription(step) {
    if (step.allowed) {
      let obj = {
        description: step.description
      };
      this.stepDescriptionModalService.init(StepDescriptionModalComponent, obj, obj);
    }
  }

  buyCourse() {
    if (this.isLogin) {
      this.buyModalObject.price = this.course.price;
      this.buyModalObject.id = this.course.id;
      this.buyModalObject.title = this.course.title;
      this.buyModalObject.type = this.configService.buy_course_number;
      this.buyModalService.init(BuyModalComponent, this.buyModalObject, this.buyModalObject);
    } else {
      this.loginService.init(LoginModalComponent, null, null);
    }
  }
}
