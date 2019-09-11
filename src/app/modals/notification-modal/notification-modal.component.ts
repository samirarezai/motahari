import {Component, OnInit} from '@angular/core';
import {NotificationService} from './notification.service';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent implements OnInit {
  message: any;
  type: any;

  constructor(private notificationService: NotificationService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  public close() {
    this.notificationService.destroy();
  }
}
