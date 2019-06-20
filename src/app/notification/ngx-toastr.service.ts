import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { Notification } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NgxToastrService {
  constructor(private toastr: ToastrService) {}

  individualConfig: Partial<IndividualConfig> = {
    positionClass: 'toast-top-full-width',
    progressBar: true,
    closeButton: true
  };

  show(notification: Notification, type: string) {
    /* this.toastr.show(notification.message, '', this.individualConfig, type); */

    switch (type) {
      case 'success':
        this.toastr.success(notification.message, '', this.individualConfig);
        break;
      case 'error':
        this.toastr.error(notification.message, '', this.individualConfig);
        break;
      case 'warning':
        this.toastr.warning(notification.message, '', this.individualConfig);
        break;
      case 'info':
        this.toastr.info(notification.message, '', this.individualConfig);
        break;
    }
  }
}
