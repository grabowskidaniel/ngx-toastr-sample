import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { NgxToastrService } from './ngx-toastr.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private ngxToastrService: NgxToastrService) {}

  success(message: Message) {
    this.ngxToastrService.show(message, 'success');
  }

  error(message: Message) {
    this.ngxToastrService.show(message, 'error');
  }

  warning(message: Message) {
    this.ngxToastrService.show(message, 'warning');
  }

  info(message: Message) {
    this.ngxToastrService.show(message, 'info');
  }
}
