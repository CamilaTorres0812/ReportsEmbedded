import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeneralService } from 'src/services/general.service';
import { SPListComponent } from '../../sp-list/sp-list.component';
import { CategoryListComponent } from '../../category-list/category-list.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FileUpload } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TabsModule } from 'primeng/tabs';
import { TextareaModule } from 'primeng/textarea';
import { StoresProcedureService } from 'src/services/stores-procedure.service';
import { MessageReportService } from 'src/services/message-report.service';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-add-stimulsfot-report',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TabsModule, DropdownModule, InputTextModule, TextareaModule, CardModule,  CategoryListComponent,SPListComponent, FileUpload,MessageModule, BadgeModule, ChipModule],
  templateUrl: './add-stimulsfot-report.component.html',
  styleUrl: './add-stimulsfot-report.component.scss',
  providers: [MessageReportService]
})
export class AddStimulsfotReportComponent implements OnInit {
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
    Tipo: "STI"
  };
  fileMrt!: File;
  fileUploaded!: File;
  clasificacion: any;
  @Input() idKatios: string = "";
  @Input() inputReporte: any;
  @Output() addReport = new EventEmitter<any>();
  @Output() editReport = new EventEmitter<any>();
  isEdit: boolean = false;
  idNotificacion: string = "";
  idReporte: string = "";
  inputReporteAdicionales: Array<any> = [];
  validations = {
    name: {error:false,message:""},
    description: {error:false,message:""},
    storeProcedure: {error:false,message:""},
    category: {error:false,message:""},
    file: {error:false,message:""}
  }
  isValid: boolean = true;
  jsonMrt: any;
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
        console.log(x)
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
    } if (!this.fileMrt && !this.isEdit) {
      this.validations.file.error = true;
      this.validations.file.message =  "Por favor seleccione un archivo .mrt";
      this.isValid = false;
    }if (!(this.nuevoReporte.adicionales && this.nuevoReporte.adicionales.length>0)) {
      this.validations.category.error = true;
      this.validations.category.message =  "Por favor seleccione una categoría";
      this.isValid = false;
    }
  }

    //Evento click del boton "crearRepClick"
  crearReporteClick() {
    this.validarCampos();
    console.log(this.nuevoReporte)
    if (this.isValid) {
      this.generalService.crearReporteNotificacionKatios(this.idKatios, this.nuevoReporte, this.fileMrt).then(r => {

        console.log("Reporte Creado")
        this.addReport.emit();
        this.messageService.success("Exitoso","Reporte Creado Exitosamente")
      }).catch(e => this.messageService.error("Error","No se pudo crear reporte"))
    }
  }

  cargarInputReporte() {
    console.log("INPUT: ", this.inputReporte)
    this.nuevoReporte.nombre = this.inputReporte["@Nombre"];
    this.nuevoReporte.descripcion = this.inputReporte["@Descripcion"];
    this.nuevoReporte.storedProcedure = this.inputReporte["@Data"];
    this.idNotificacion = this.inputReporte["@IdNotificacion"];
    this.idReporte = this.inputReporte["@IdRep"];
    this.getAdicionalesFromReporte();
    this.getMrt();
  }

  getAdicionalesFromReporte() {
    let data = { idNotificacion: this.idNotificacion, idReporte: this.idReporte };
    this.generalService.getReporteAdicionalesById(this.idKatios, data).then(resp => {
      this.inputReporteAdicionales = resp;
    });
  }

  editarReporteClick() {
    this.validarCampos();
    if (this.isValid) {
      this.nuevoReporte["idNotificacion"] = this.idNotificacion;
      this.nuevoReporte["idReporte"] = this.idReporte;
      this.generalService.editarReporteNotificacionKatios(this.idKatios, this.nuevoReporte, this.fileMrt).then(r => {
      this.editReport.emit();
      this.messageService.success("Exitoso","Reporte modificado correctamente");
      }).catch(r=> this.messageService.error("Error","No se pudo modificar el reporte"));
    }
  }

  onUpload(event:any) {
    this.fileMrt = event.files[0];
    this.getFile(this.fileMrt);
  }

  getFile(file: File){
    this.lastModified = new Date(file.lastModified).toLocaleString();
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        this.jsonMrt = JSON.stringify(parsed, null, 2);
      } catch (error) {
        console.error('Error al parsear el JSON del archivo .mrt', error);
      }
  };
  reader.readAsText(file);
  }

    getMrt() {
    this.generalService.getTemplateReport(this.idKatios, this.inputReporte["@IdRep"]).then(rep => {
      const jsonString = rep.CodeHTML;
      const blob = new Blob([jsonString], { type: 'application/json' });
      const file = new File([blob], 'demo.mrt', { type: 'application/json' });
      this.fileMrt = file;
      this.getFile(this.fileMrt);
    });
  }
    
  
}
