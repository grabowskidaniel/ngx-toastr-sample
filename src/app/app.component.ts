import { Component, OnInit } from '@angular/core';
import { Notification } from './notification/notification.model';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  openToastrSuccess(): void {
    const notification: Notification = {
      message: 'Mensagem sucesso'
    };

    this.notificationService.success(notification);
    this.notificationService.success(notification);
  }

  openToastrError(): void {
    const notification: Notification = {
      message: 'Mensagem erro'
    };

    this.notificationService.error(notification);
    this.notificationService.error(notification);
  }

  openToastrWarning(): void {
    const notification: Notification = {
      message: 'Mensagem alerta'
    };

    this.notificationService.warning(notification);
    this.notificationService.warning(notification);
  }

  openToastrInfo(): void {
    const notification: Notification = {
      message: 'Mensagem informação'
    };

    this.notificationService.info(notification);
    this.notificationService.info(notification);
  }

  ngOnInit() {
    this.openToastrSuccess();
    this.openToastrSuccess();
  }
}
