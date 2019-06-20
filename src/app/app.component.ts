import { Component } from '@angular/core';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {}

  openToastr(): void {
    this.notificationService.show();
  }
}
