import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FileUpload } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TabsModule } from 'primeng/tabs';
import { TextareaModule } from 'primeng/textarea';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { CategoryListComponent } from '../category-list/category-list.component';
import { SPListComponent } from '../sp-list/sp-list.component';
import { GeneralService } from 'src/services/general.service';
import { StoresProcedureService } from 'src/services/stores-procedure.service';
import { MessageReportService } from 'src/services/message-report.service';
@Component({
  selector: 'app-basic-info-report',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TabsModule, DropdownModule, InputTextModule, TextareaModule, CardModule,  CategoryListComponent,SPListComponent, FileUpload,MessageModule, BadgeModule, ChipModule],
  templateUrl: './basic-info-report.component.html',
  styleUrl: './basic-info-report.component.scss'
})
export class BasicInfoReportComponent {
  nuevoReporte: {
      nombre: string;
      descripcion: string;
      storedProcedure: string;
      validaciones: any[];
      adicionales: { atributo: string; valor: string }[];
      Tipo: string;
      idNotificacion?: string;
      idReporte?: string;
    } = {
      nombre: "",
      descripcion: "",
      storedProcedure: "",
      validaciones: [],
      adicionales: [],
      Tipo: ""
    };
    clasificacion: any;
    @Input() idKatios: string = "";
    @Input() inputReporte: any;
    @Output() addReport = new EventEmitter<any>();
    @Output() editReport = new EventEmitter<any>();
    isEdit: boolean = false;
    idNotificacion: string = "";
    idReporte: string = "";
    tipoReporte: string = "";
    inputReporteAdicionales: Array<any> = [];
    validations = {
      name: {error:false,message:""},
      description: {error:false,message:""},
      storeProcedure: {error:false,message:""},
      category: {error:false,message:""},
    }
    isValid: boolean = true;
    constructor(private generalService: GeneralService, private storeProcedureService: StoresProcedureService, private messageService: MessageReportService) { 
    }
    lastModified: string = "";
  
    ngOnInit(){
       if (this.inputReporte) {
        this.isEdit = true;
        this.cargarInputReporte();
      }
      this.getClasifications();
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
  
    storedChange(e:any) {
      this.nuevoReporte.storedProcedure = e.map((res: { Nombre: string }) => { return res.Nombre; }).join();
      this.nuevoReporte.validaciones = this.storeProcedureService.armarDataParametros(e,true);
    }
  
  
    validarCampos(): void{
      if (this.nuevoReporte.nombre == "") {
        this.validations.name.error = true;
        this.validations.name.message = "Falta nombre del reporte";
        this.isValid = false;
      } if (this.nuevoReporte.descripcion == "") {
        this.validations.description.error = true;
        this.validations.description.message =  "Por favor agregue una descripción";
        this.isValid = false;
      } if (this.nuevoReporte.storedProcedure == "") {
        this.validations.storeProcedure.error = true;
        this.validations.storeProcedure.message =  "Seleccione una fuente de datos";
        this.isValid = false;
      } if (!(this.nuevoReporte.adicionales && this.nuevoReporte.adicionales.length>0)) {
        this.validations.category.error = true;
        this.validations.category.message =  "Por favor seleccione una categoría";
        this.isValid = false;
      }
    }
  
  
    cargarInputReporte() {
      this.nuevoReporte.nombre = this.inputReporte["@Nombre"];
      this.nuevoReporte.descripcion = this.inputReporte["@Descripcion"];
      this.nuevoReporte.storedProcedure = this.inputReporte["@Data"];
      this.idNotificacion = this.inputReporte["@IdNotificacion"];
      this.idReporte = this.inputReporte["@IdRep"];
      this.tipoReporte = this.inputReporte["@TipoReporte"]
      this.getAdicionalesFromReporte();
    }
  
    getAdicionalesFromReporte() {
      let data = { idNotificacion: this.idNotificacion, idReporte: this.idReporte };
      this.generalService.getReporteAdicionalesById(this.idKatios, data).then(resp => {
        this.inputReporteAdicionales = resp;
      });
    }
  
}
