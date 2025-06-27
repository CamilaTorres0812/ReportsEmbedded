import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AddStimulsfotReportComponent } from '../add-report/add-stimulsfot-report/add-stimulsfot-report.component';
import { AddPowerbiReportComponent } from '../add-report/add-powerbi-report/add-powerbi-report.component';

@Component({
  selector: 'app-edit-report',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DialogModule,AddStimulsfotReportComponent, AddPowerbiReportComponent],
  templateUrl: './edit-report.component.html',
  styleUrl: './edit-report.component.scss'
})
export class EditReportComponent {
  @Input() reporte: any;
  public visible: boolean = false; 
  @Input() idKatios: string = "";
  @Output() editReport = new EventEmitter<any>();
  public tipoReporte: string = "";
  showFormPBI: boolean = false;
  showFormSTI: boolean = false;
  constructor() { 
  }
  showEditDialog(){
    this.visible = true;
    this.tipoReporte = this.reporte.TipoReporte;
    switch(this.tipoReporte){
      case 'PBI':
        this.showFormPBI = true;
        break;
      default:
        this.showFormSTI = true;
        break;
  }
    
  }
  editAReport(){
    this.visible = false;
    this.editReport.emit();
  }

}
