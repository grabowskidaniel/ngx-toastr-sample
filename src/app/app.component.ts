import { Component } from '@angular/core';
import { Message } from './notification/message.model';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {}

  openToastrSuccess(): void {
    const message: Message = {
      message: 'Mensagem sucesso'
    };

    this.notificationService.success(message);
  }

  openToastrError(): void {
    const message: Message = {
      message: 'Mensagem erro'
    };

    this.notificationService.error(message);
  }

  openToastrWarning(): void {
    const message: Message = {
      message: 'Mensagem alerta'
    };

    this.notificationService.warning(message);
  }

  openToastrInfo(): void {
    const message: Message = {
      message: 'Mensagem informação'
    };

    this.notificationService.info(message);
  }
}
