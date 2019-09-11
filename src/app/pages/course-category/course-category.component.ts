import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.scss']
})
export class CourseCategoryComponent implements OnInit {

  courseCategoryList: any;
  lastCourseList: any;

  constructor(private configService: ConfigurationService, private restService: RestService) {
  }

  ngOnInit() {
    this.callService();
    // this.callLastCourse();
  }

  callLastCourse() {
    let body = {
      type: 'COURSE'
    };

    this.restService.makeRequest(this.configService.post, 'course/category/listCategoryByType', body, true, response => {

    }, error => {
    });
  }


  callService() {
    let body = {
      type: 'COURSE'
    };

    this.restService.makeRequest(this.configService.post, 'course/category/listCategoryByType', body, true, response => {
      this.lastCourseList = response.result[0].courseList;
      this.courseCategoryList = response.result;
    }, error => {

    });
  }

}
