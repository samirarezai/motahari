import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {LoginModalService} from '../../modals/login-modal/login-modal.service';
import {LoginModalComponent} from '../../modals/login-modal/login-modal.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  matchList: any;
  expireMatchList = [];
  liveMatch: any;
  isLogin = false;

  constructor(private configService: ConfigurationService,
              private restService: RestService,
              private router: Router,
              private loginModalService: LoginModalService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.callMatchListService();
    this.authService.isLogin.subscribe(data => {
      if (data) {
        this.isLogin = true;
      }
    });
  }

  private callMatchListService() {
    let body = {
      courseType: 'MATCH',
      offset: 0,
      size: 100
    };

    this.restService.makeRequest(this.configService.post, 'course/list/type', body, true, response => {
      this.matchList = response.result;
      for (let match of this.matchList) {
        if (match.expired === true) {
          this.expireMatchList.push(match);
        } else {
          this.liveMatch = match;
        }
      }
    }, error => {

    });
  }

  goToMatch(match) {
    if (this.isLogin) {
      let routerLink: string = '/match-step/' + match.id;
      this.router.navigateByUrl(routerLink);
    } else {
      this.loginModalService.init(LoginModalComponent, null, null);
    }
  }
}
