import { Injectable } from '@angular/core';
import {DomService} from '../../services/dom.service';

@Injectable({
  providedIn: 'root'
})
export class InvitationCodeModalService {

  constructor(private domService: DomService) {
  }

  private modalElementId = 'modal-container-invitation-code';
  private overlayElementId = 'overlay-step-invitation-code';

  init(component: any, inputs: object, outputs: object) {
    window.scroll(0, 0);
    let componentConfig = {
      inputs: inputs,
      outputs: outputs
    };
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'd-block';
    document.getElementById(this.overlayElementId).className = 'd-block';
  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'd-none';
    document.getElementById(this.overlayElementId).className = 'd-none';
  }
}
