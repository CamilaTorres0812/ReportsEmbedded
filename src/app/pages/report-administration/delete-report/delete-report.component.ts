import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { GeneralService } from 'src/services/general.service';
import { MessageReportService } from 'src/services/message-report.service';

@Component({
  selector: 'app-delete-report',
  standalone: true,
  imports: [ConfirmDialog, ButtonModule],
  templateUrl: './delete-report.component.html',
  styleUrl: './delete-report.component.scss',
  providers: [ConfirmationService, MessageReportService]
})
export class DeleteReportComponent {
  @Input() idKatios: string = "";
  @Input() reporte: any;
  @Output() deleteReport= new EventEmitter<any>();
  constructor(private confirmationService: ConfirmationService, private messageService: MessageReportService, private generalService: GeneralService) {}
  confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Eliminar este reporte?',
            header: 'Eliminar Reporte',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Cancel',
            rejectButtonProps: {
                label: 'Cancelar',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Eliminar',
                severity: 'danger',
            },

            accept: () => {
                this.deleteAReport();
            },
            reject: () => {
                this.messageService.info("Cancelado","Has cancelado");
            },
        });
  }

  deleteAReport(){
    this.generalService.eliminarReporte(this.idKatios, this.reporte).then(r =>{
      this.messageService.success("Exitoso",'Reporte eliminado exitosamente');
      this.deleteReport.emit();
    }).catch();
  }



}
