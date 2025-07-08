import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { GeneralService } from 'src/services/general.service';
import { MessageReportService } from 'src/services/message-report.service';

@Component({
  selector: 'app-delete-report',
  standalone: true,
  imports: [Dialog, ButtonModule,FormsModule,InputTextModule,CommonModule],
  templateUrl: './delete-report.component.html',
  styleUrl: './delete-report.component.scss',
  providers: [MessageReportService]
})
export class DeleteReportComponent {
  @Input() idKatios: string = "";
  @Input() reporte: any;
  @Output() deleteReport= new EventEmitter<any>();
  openConfirmation: boolean = false;
  confirmationName: string ='';
  isCopy: boolean = false;
  constructor(private messageService: MessageReportService, private generalService: GeneralService) {}
  
  openDialogConfirmation(){
    this.openConfirmation = true;
  }
  closeConfirmation(){
    this.openConfirmation = false;
  }
  deleteAReport(){
    this.generalService.eliminarReporte(this.idKatios, this.reporte).then(r =>{
      this.messageService.success("Exitoso",'Reporte eliminado exitosamente');
      this.deleteReport.emit();
    }).catch();
  }

  copyReportName(nombre: string): void {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(nombre)
      .then(() => {
        this.isCopy = true;
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
      });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = nombre;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      this.isCopy = true;
    } catch (err) {
      console.error('Fallback: error al copiar:', err);
    }
    document.body.removeChild(textarea);
  }
}




}
