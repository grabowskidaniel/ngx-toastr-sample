import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NgxToastrService {
  constructor(private toastr: ToastrService) {}

  show() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
