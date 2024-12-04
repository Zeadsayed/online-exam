import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  showToast(message: string, type: string) {
    this.messageService.clear();
    this.messageService.add({
      severity: type,
      detail: message,
      life: 8000,
    });
  }
}
