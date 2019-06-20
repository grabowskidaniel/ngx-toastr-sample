import { Injectable } from '@angular/core';
import { NgxToastrService } from './ngx-toastr.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private ngxToastrService: NgxToastrService) {}

  show() {
    this.ngxToastrService.show();
  }
}
