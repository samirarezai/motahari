import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../modals/notification-modal/notification.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-step.component.html',
  styleUrls: ['./match-step.component.scss']
})
export class MatchStepComponent implements OnInit {
  stepList: any;
  matchId: string;
  match: any;
  sub: any;
  totalRate = 0;

  constructor(
    private configService: ConfigurationService,
    private route: ActivatedRoute,
    private restService: RestService,
    private router: Router,
    private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.matchId = params.get('matchId');
      this.callMatch();
    });
  }


  callMatch() {
    let body = {
      courseId: this.matchId
    };
    this.restService.makeRequest(this.configService.post, 'course/byId', body, true, response => {
      this.match = response.result;
      this.callStepList();
    }, error => {
    });
  }

  callStepList() {
    let body = {
      courseId: this.matchId
    };
    this.restService.makeRequest(this.configService.post, 'step/list', body, true, response => {
      this.stepList = response.result;
      this.stepList.forEach((item) => {
        item.isOpen = false;
        if (item.passed) {
          this.totalRate += item.rate;
        }
      });
    }, error => {
    });
  }

  goToQuiz(step) {
    if (this.match.starting) {
      if (step.quizDelayDenied) {
        let message = 'برای آزمون ' + step.course.minDelayQuiz + '‌ روز دیگر مراجعه کنید';
        this.notificationService.showNotification(message, this.configService.notifyInfoType);
      } else {
        let routerLink: string = '/quiz/' + step.course.id + '/' + step.id + '/' + step.quiz.id;
        this.router.navigateByUrl(routerLink);
      }
    } else {
      let message = 'لطفا اول متن درس را بخوانید';
      this.notificationService.showNotification(message, this.configService.notifyInfoType);
    }
  }
}
