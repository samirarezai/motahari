import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {ConfigurationService} from '../../services/configuration.service';
import {WorkBookService} from './work-book.service';

@Component({
  selector: 'app-work-book-modal',
  templateUrl: './workbook-modal.component.html',
  styleUrls: ['./workbook-modal.component.scss']
})
export class WorkbookModalComponent implements OnInit {
  courseId;
  courseResult;

  constructor(private restService: RestService,
              private configService: ConfigurationService,
              private workBookService: WorkBookService) {
  }

  ngOnInit() {
    this.callWorkbookService();
  }

  callWorkbookService() {
    let body = {
      courseId: this.courseId
    };
    this.restService.makeRequest(this.configService.post, 'api/question/workbook', body, true, response => {
      this.courseResult = response.result;
    }, error => {
    });
  }

  onClose() {
    this.workBookService.destroy();
  }
}
