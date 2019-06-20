import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class NgxToastrService {
  constructor(private toastr: ToastrService) {}

  individualConfig: Partial<IndividualConfig> = {
    positionClass: 'toast-top-full-width',
    progressBar: true
  };

  show(message: Message, type: string) {
    /* this.toastr.show(message.message, '', this.individualConfig, type); */
    switch (type) {
      case 'success':
        this.toastr.success(message.message, '', this.individualConfig);
        break;
      case 'error':
        this.toastr.error(message.message, '', this.individualConfig);
        break;
      case 'warning':
        this.toastr.warning(message.message, '', this.individualConfig);
        break;
      case 'info':
        this.toastr.info(message.message, '', this.individualConfig);
        break;
    }
  }
}
