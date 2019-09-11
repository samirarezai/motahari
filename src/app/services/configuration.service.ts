import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public serverUrl = 'https://lms.motahari.ir/';
  // public serverUrl = 'http://localhost:8090/';
  public appListenUrl = 'myapp://motahariapp/payment';
  public get = 'get';
  public post = 'post';
  public token = 'token';
  public user = 'user';
  public mobile = 'mobile';
  public buy_audio_book_number = 0;
  public buy_course_number = 1;
  public buy_certificate_number = 2;
  public notifySuccessType = 0;
  public notifyErrorType = 1;
  public notifyInfoType = 2;
}
