import {Component, OnInit} from '@angular/core';
import {StepDescriptionService} from './step-description.service';

@Component({
  selector: 'app-step-description-modal',
  templateUrl: './step-description-modal.component.html',
  styleUrls: ['./step-description-modal.component.scss']
})
export class StepDescriptionModalComponent implements OnInit {
  description;

  constructor(private stepDescriptionModal: StepDescriptionService) {
  }

  ngOnInit() {
  }

  onClose() {
    this.stepDescriptionModal.destroy();
  }
}
