import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-my-match',
  templateUrl: './my-match.component.html',
  styleUrls: ['./my-match.component.scss']
})
export class MyMatchComponent implements OnInit {
  myMatchList: any = [];
  showLoading = true;

  constructor(private config: ConfigurationService, private restService: RestService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        this.callMyMatchService();
      }
    });
  }

  callMyMatchService() {
    this.showLoading = true;
    let body = {
      courseType: 'MATCH'
    };
    this.restService.makeRequest(this.config.post, 'api/user/course/history/type', body, true, response => {
      this.myMatchList = response.result;
      this.showLoading = false;
    }, error => {
      this.showLoading = false;
    });
  }

}
