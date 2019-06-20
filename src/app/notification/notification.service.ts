import { Injectable } from '@angular/core';
import { NgxToastrService } from './ngx-toastr.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private ngxToastrService: NgxToastrService) {}

  success(message) {
    this.ngxToastrService.show(message, 'success');
  }

  error(message) {
    this.ngxToastrService.show(message, 'error');
  }

  warning(message) {
    this.ngxToastrService.show(message, 'warning');
  }

  info(message) {
    this.ngxToastrService.show(message, 'info');
  }
}
