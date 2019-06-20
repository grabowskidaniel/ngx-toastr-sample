import { Injectable } from '@angular/core';
import { NgxToastrService } from './ngx-toastr.service';
import { Notification } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private ngxToastrService: NgxToastrService) {}

  success(notification: Notification) {
    this.ngxToastrService.show(notification, 'success');
  }

  error(notification: Notification) {
    this.ngxToastrService.show(notification, 'error');
  }

  warning(notification: Notification) {
    this.ngxToastrService.show(notification, 'warning');
  }

  info(notification: Notification) {
    this.ngxToastrService.show(notification, 'info');
  }
}
