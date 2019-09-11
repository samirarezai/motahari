import {Component, OnDestroy, OnInit} from '@angular/core';
import {LabelType, Options} from 'ng5-slider';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../services/rest.service';
import {ConfigurationService} from '../../services/configuration.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.scss']
})
export class MatchInfoComponent implements OnInit, OnDestroy {
  stepId: string;
  text: any;
  sub: any;
  step: any;

  constructor(private route: ActivatedRoute, private router: Router,
              private restService: RestService, private configService: ConfigurationService) {
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.stepId = params.get('stepId');
      this.callService();
    });
  }

  callStartingMatch(courseId) {
    let body = {
      courseId: courseId
    };
    this.restService.makeRequest(this.configService.post, 'api/user/course/start', body, true, resposne => {

    }, error => {
    });
  }

  private callService() {
    let body = {
      stepId: this.stepId
    };
    this.restService.makeRequest(this.configService.post, 'step/getById', body, true, response => {
      this.text = response.result.text;
      this.step = response.result;
      this.callStartingMatch(this.step.course.id);
    }, error => {
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
