import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {ConfigurationService} from '../../services/configuration.service';
import {AuthService} from '../../services/auth.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  userInfo: any = null;
  isLoggedIn$: Observable<boolean>;
  isLogin = false;

  constructor(private localStorage: LocalStorageService,
              private authService: AuthService,
              private config: ConfigurationService) {
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        this.localStorage.getItem(this.config.user).subscribe(initData => {
          this.userInfo = initData;
        });
        this.localStorage.getItem(this.config.mobile).subscribe(initData => {
          this.userInfo.mobile = '0' + initData;
        });
      }
    });
    this.isLoggedIn$ = this.authService.isLogin;
  }


  openMenu() {
    this.localStorage.getItem(this.config.user).subscribe(data => {
      this.userInfo = data;
    });
    this.localStorage.getItem(this.config.mobile).subscribe(data => {
      this.userInfo.mobile = '0' + data;
    });
    document.getElementById('mySidenav').style.marginRight = '0px';
  }

  public closeMenu() {
    document.getElementById('mySidenav').style.marginRight = '-180px';
    // document.getElementsByClassName('margin-right: -220px;').style.marginRight = '-220px';
  }
  public onLogout() {
    this.authService.logout();
    document.getElementById('mySidenav').style.marginRight = '-180px';
  }
}
