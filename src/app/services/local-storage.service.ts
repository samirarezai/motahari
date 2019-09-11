import {Injectable} from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(protected localStorage: LocalStorage) {
  }


  setItemToLocalStorage<T>(key: string, value: T) {
    this.localStorage.setItem(key, value).subscribe((isSave) => {
      console.log('isSave' + isSave);
    }, error => {
      console.log('error' + error);
    });
  }

  removeItem(key: string) {
    this.localStorage.removeItemSubscribe(key);
  }

  removeAll() {
    return this.localStorage.clear();
  }

  getItem(key: string) {
    return this.localStorage.getItem(key);
  }


}

