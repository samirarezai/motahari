import {Injectable} from '@angular/core';
import {DomService} from '../../services/dom.service';
import {NotificationModalComponent} from './notification-modal.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private domService: DomService) {
  }

  private modalElementId = 'notification-container';

  showNotification(message, type) {
    let input = {
      message: message,
      type: type
    };
    this.init(NotificationModalComponent, input, input);
  }

  private init(component: any, inputs: object, outputs: object) {
    let componentConfig = {
      inputs: inputs,
      outputs: outputs
    };
    if (!this.checkExist()) {
      this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
      document.getElementById(this.modalElementId).className = 'd-block';
    }
  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'd-none';
  }

  checkExist() {
    return this.domService.checkExistElementInDom(this.modalElementId);
  }
}
