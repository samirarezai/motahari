import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../services/rest.service';
import {ConfigurationService} from '../../services/configuration.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit, OnDestroy {
  stepId: string;
  text: any;
  sub: any;
  step: any;

  constructor(private route: ActivatedRoute, private router: Router,
              private restService: RestService, private configService: ConfigurationService) {
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.stepId = params.get('courseId');
      this.callService();
    });
  }

  private callService() {
    let body = {
      stepId: this.stepId
    };
    this.restService.makeRequest(this.configService.post, 'step/getById', body, true, response => {
      this.text = response.result.text;
      this.step = response.result;
    }, error => {
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
