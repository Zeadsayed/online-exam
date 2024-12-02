import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  showToast(message: string, type: string) {
    this.messageService.add({
      severity: type,
      summary: 'Success',
      detail: message,
    });
  }
}
