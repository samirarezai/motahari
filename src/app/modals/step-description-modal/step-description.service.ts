import {Injectable} from '@angular/core';
import {DomService} from '../../services/dom.service';

@Injectable({
  providedIn: 'root'
})
export class StepDescriptionService {

  constructor(private domService: DomService) {
  }

  private modalElementId = 'modal-container-step-description';
  private overlayElementId = 'overlay-step-description';

  init(component: any, inputs: object, outputs: object) {
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
