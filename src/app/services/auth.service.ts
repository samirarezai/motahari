import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {ConfigurationService} from './configuration.service';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private configService: ConfigurationService, private localStorageService: LocalStorageService) {
  }

  public get isLoggedIn() {
    return this.localStorageService.getItem(this.configService.token);
    /*this.localStorageService.getItem(this.configService.token).subscribe(data => {
      if (data === null) {
        this.loggedIn.next(false);
      } else {
        this.loggedIn.next(true);
      }
      return this.loggedIn.asObservable();
    });*/
  }

  public get isLogin() {
    this.localStorageService.getItem(this.configService.token).subscribe(data => {
      if (data === null) {
        this.loggedIn.next(false);
      } else {
        this.loggedIn.next(true);
      }
    });
    return this.loggedIn.asObservable();
  }

  login() {
    this.loggedIn.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.localStorageService.removeAll().subscribe(data => {
      this.loggedIn.next(false);
      this.router.navigate(['/']);
    });
  }
}
