import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessageReportService {
  constructor(private messageService: MessageService) {}

  success(message: string, detail = '') {
    this.messageService.add({ severity: 'success', summary: message, detail });
  }

  error(message: string, detail = '') {
    this.messageService.add({ severity: 'error', summary: message, detail });
  }

  info(message: string, detail = '') {
    this.messageService.add({ severity: 'info', summary: message, detail });
  }

  warn(message: string, detail = '') {
    this.messageService.add({ severity: 'warn', summary: message, detail });
  }

  clear() {
    this.messageService.clear();
  }
}
