import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor() {}

  show() {
    alert('isso vai virar um toaster');
  }
}
