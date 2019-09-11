import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {LocalStorageService} from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  self = this;
  lastRequest: any;

  constructor(private http: HttpClient, private configuration: ConfigurationService,
              private localStorageService: LocalStorageService) {
  }


  public makeRequest(method: string, url: string, body?: Object, checkToken?: boolean, successCallBack?: any, errorCallBack?: any) {
    const finalUrl = this.configuration.serverUrl + url;

    let newRequest = JSON.stringify({
      method: method,
      url: url,
      body: body,
    });

    if (this.lastRequest !== undefined) {
      if (this.lastRequest === newRequest) {
        return;
      }
    }
    const innerSuccessCallBack = function (response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        return innerErrorCallBack(response);
      } else {
        successCallBack(response);
      }
    };

    const innerErrorCallBack = function (error: Response | any) {
      let errMsg: string;
      if (error.status === 401) {
        throw new Error('401');
      }
      if (error instanceof Response) {
        const test = error.json();
        errMsg = `${error.status} - ${error.statusText || ''}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      errorCallBack(errMsg);
    };


    const callService = function (token, self) {
      let header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'token': ''
      };
      if (checkToken === true) {
        if (token !== null && token !== undefined && typeof token === 'string') {
          header.token = 'Bearer ' + token;
        }
      }
      let httpOptions = {
        headers: new HttpHeaders(header)
      };
      if (method.toLowerCase() === self.configuration.get) {
        self.http.get(finalUrl, httpOptions).subscribe(innerSuccessCallBack, innerErrorCallBack);
      }
      if (method.toLowerCase() === self.configuration.post) {
        self.http.post(finalUrl, JSON.stringify(body), httpOptions).subscribe(innerSuccessCallBack, innerErrorCallBack);
      }
    };
    this.localStorageService.getItem('token').subscribe(token => {
      callService(token, this);
    });
  }
}
