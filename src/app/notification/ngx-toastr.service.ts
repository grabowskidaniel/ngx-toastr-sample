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
    closeButton: true,
    disableTimeOut: true,
    enableHtml: true
  };

  show(notification: Notification, type: string) {
    this.toastr.show(
      notification.message + ' <b>negrito</b> sem negrito.',
      '',
      this.individualConfig,
      type
    );
    this.toastr.show(
      notification.message +
        ' <b>negrito</b> sem negrito. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      '',
      this.individualConfig,
      type
    );
  }
}
