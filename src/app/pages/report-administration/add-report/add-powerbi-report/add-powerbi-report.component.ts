import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { group } from '@angular/animations';
import { GeneralService } from 'src/services/general.service';
import { MessageReportService } from 'src/services/message-report.service';
import { CategoryListComponent } from '../../category-list/category-list.component';
import { PBIReport, PBIReportResponse } from 'src/model/PBIReport';
import { ReportsManagementService } from 'src/services/reports-management.service';
import { LoadingComponent } from '@/layout/components/loading/loading.component';

@Component({
  selector: 'app-add-powerbi-report',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TextareaModule,  MessageModule, CategoryListComponent,LoadingComponent],
  templateUrl: './add-powerbi-report.component.html',
  styleUrl: './add-powerbi-report.component.scss',
  providers: [MessageReportService]
})
export class AddPowerbiReportComponent implements OnInit{
   nuevoReporte: PBIReport = {
    nombre: "",
    descripcion: "",
    adicionales: [],
    clientId: "",
    clientSecret: "",
    groupId: "",
    reportId: "",
    tipoReporte: "PBI"
  };

  idNotificacion: string = "";
  idReporte: string = "";
  
  @Input() idKatios: string = "";
  @Input() inputReporte: any;
  @Input() tipoReporte: string = "";
  @Output() addReport = new EventEmitter<any>();
  @Output() editReport = new EventEmitter<any>();
  isEdit: boolean = false;
  validations = {
    name: {error:false,message:""},
    description: {error:false,message:""},
    category: {error:false,message:""},
    groupId: {error:false,message:""},
    reportId: {error:false,message:""}
  }
  isValid: boolean = true;
  clasificacion: any;
  inputReporteAdicionales: Array<any> = [];
  isLoading: boolean = false;


  constructor(private generalService: GeneralService,  private messageService: MessageReportService, private reportManagement: ReportsManagementService) { 
    }

  ngOnInit(): void {
    if (this.inputReporte) {
      this.isEdit = true;
      this.cargarInputReporte();
    }
    this.getClasifications();
  }

  cargarInputReporte() {
    this.nuevoReporte.nombre = this.inputReporte["@Nombre"];
    this.nuevoReporte.descripcion = this.inputReporte["@Descripcion"];
    this.idNotificacion = this.inputReporte["@IdNotificacion"];
    this.idReporte = this.inputReporte["@IdRep"];
    this.nuevoReporte.tipoReporte = this.inputReporte["@TipoReporte"];   
    this.getAdicionalesFromReporte();
    this.getReportData();
  }

  getClasifications() {
    this.generalService.getReportsByClasification(this.idKatios, "REPORTES").then(x => {
      if(x){
        this.clasificacion = x.CATEGORIA[0].CATEGORIA
      }
    }).catch();
  }

  getListaCategorias(e:any) {
    this.nuevoReporte.adicionales = new Array<any>();
    if (e) {
      for (let _i = 0; _i < e.length; _i++) {
        this.nuevoReporte.adicionales.push({ atributo: e[_i].ATRIBUTO, valor: e[_i].DESCRIPCION });
      }
    }
  }
  

  validarCampos(): void{
    if(this.nuevoReporte.nombre && this.nuevoReporte.descripcion && (this.nuevoReporte.adicionales && this.nuevoReporte.adicionales.length>0) && this.nuevoReporte.groupId && this.nuevoReporte.reportId){
      this.isValid = true;
      return;
    }
    if (!this.nuevoReporte.nombre) {
      this.validations.name.error = true;
      this.validations.name.message = "Falta nombre del reporte";
      this.isValid = false;
    } if (!this.nuevoReporte.descripcion) {
      this.validations.description.error = true;
      this.validations.description.message =  "Por favor agregue una descripción";
      this.isValid = false;
    } 
    if (!(this.nuevoReporte.adicionales && this.nuevoReporte.adicionales.length>0)) {
      this.validations.category.error = true;
      this.validations.category.message =  "Por favor seleccione una categoría";
      this.isValid = false;
    }
    
     if (!this.nuevoReporte.groupId) {
      this.validations.groupId.error = true;
      this.validations.groupId.message =  "Por favor digite el groupId del reporte";
      this.isValid = false;
    }
    if (!this.nuevoReporte.reportId) {
      this.validations.reportId.error = true;
      this.validations.reportId.message =  "Por favor digite el reportId del reporte";
      this.isValid = false;
    }
  }

  getAdicionalesFromReporte() {
    let data = { idNotificacion: this.idNotificacion, idReporte: this.idReporte };
    this.generalService.getReporteAdicionalesById(this.idKatios, data).then(resp => {
      this.inputReporteAdicionales = resp;
    });
  }

  getReportData() {
    this.generalService.getTemplateReport(this.idKatios, this.idReporte).then(resp => {
          const reportData = JSON.parse(resp.CodeHTML.trim());
          this.nuevoReporte.groupId = reportData.groupID;
          this.nuevoReporte.reportId = reportData.reportId;
    }).catch();
  }

  crearReporteClick() {
    this.validarCampos();
    if (this.isValid) {
      this.isLoading = true;
      this.reportManagement.crearReportePBI(this.idKatios, this.nuevoReporte).then((r:PBIReportResponse | undefined) => {
        this.isLoading = false;
        this.addReport.emit();
        this.messageService.success("Exitoso",r?.message)
      }).catch(e => {
        this.isLoading = false;
        this.messageService.error("Error","No se pudo crear reporte")
      })
    }
  }

  editarReporteClick() {
    this.validarCampos();
    if (this.isValid) {
      this.isLoading = true;
      this.nuevoReporte["idNotificacion"] = this.idNotificacion;
      this.nuevoReporte["idReporte"] = this.idReporte;
      this.reportManagement.editarReportePBI(this.idKatios, this.nuevoReporte).then((r:PBIReportResponse | undefined) => {
        this.isLoading = false;
        this.editReport.emit();
        this.messageService.success("Exitoso",r?.message);
      }).catch(r=> {
        this.isLoading = false;
        this.messageService.error("Error","No se pudo modificar el reporte")
      });
    }
  }


  
}
