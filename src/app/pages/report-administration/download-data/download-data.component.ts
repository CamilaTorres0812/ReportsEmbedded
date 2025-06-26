import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { SPListComponent } from '../sp-list/sp-list.component';
import { GeneralService } from 'src/services/general.service';
import { StoresProcedureService } from 'src/services/stores-procedure.service';
import moment from 'moment';
import { ValidacionesSTIComponent } from '@/pages/stimulsoft/validaciones/validaciones-sti/validaciones-sti.component';
import { MessageReportService } from 'src/services/message-report.service';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-download-data',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DialogModule, ChipModule, BadgeModule,SPListComponent, ValidacionesSTIComponent,MessageModule],
  templateUrl: './download-data.component.html',
  styleUrl: './download-data.component.scss',
  providers: [MessageReportService]
  
})
export class DownloadDataComponent {
  public visible: boolean = false;
  @Input() idKatios: string = "";
  formatoArchivo: string = "json";
  selectedStored: any = [];
  public jsonAtributos: any;
  validations = {
    storeProcedure: {error: false, message: ""}
  }
  isValid: boolean = true;
  objectKeys = Object.keys;

  showAddDialog(){
    this.visible = true;
  }

  constructor(private generalService: GeneralService, private storeProcedureService: StoresProcedureService, private messageService: MessageReportService) { 
    }
  storedChange(e: any) {
    this.jsonAtributos = undefined;
    this.selectedStored = e;
    this.jsonAtributos= this.storeProcedureService.armarDataParametros(e,false);
  }

  ejecutarStored(validaciones:any) {
    var atributos_sp = this.armar_atributos_sp(validaciones);
    this.validarCampos();
    if (this.isValid) {
      this.EjecutarSP(atributos_sp);
    }
  }

   validarCampos() {
    if (this.selectedStored.length == 0) {
      this.validations.storeProcedure.error = true;
      this.validations.storeProcedure.message = "Seleccione un procedimiento almacenado";
      this.isValid = false
    }
  }
   armar_atributos_sp(validaciones: any[]): string {
      var datos: any = {};
      if (validaciones) {
        datos["DATOS"] = {};
        for (let _i = 0; _i < validaciones.length; _i++) {
          let validacion = validaciones[_i];
          if (validacion.CAMPO == "DATE") datos["DATOS"][validacion.NOMBRE] = moment(validacion.VALOR).format('YYYY-MM-DD')
          else datos["DATOS"][validacion.NOMBRE] = validacion.VALOR
        }
      }
      console.log("Validacion componente stimulsoft", datos)
      return JSON.stringify(datos);
    }
    public EjecutarSP(iAtributos_sp:any) {
    var atributos_sp: any;
    if (iAtributos_sp) {
      atributos_sp = iAtributos_sp;
    } else {
      atributos_sp = "{ DATOS: {} }";
    }

    let nombre = this.selectedStored.map((res:any) => {
      return res.Nombre;
    }).join();
    var data = { "stored_name": nombre, "attributes": atributos_sp, "format": this.formatoArchivo, "isFront": true };
    this.generalService.ejecutarStoredGenericoWithFormat(this.idKatios, data).then(r=>{
      this.messageService.success("Exitoso","Descarga exitosa")
      this.createDataFile(r);
    }).catch(r=> this.messageService.error("Error", r.message));
  }

  createDataFile(data:any) {
    var link = document.createElement('a');
    link.setAttribute("type", "hidden"); 
    link.download = 'data.' + this.formatoArchivo;
    var blob = new Blob([data], { type: 'text/plain' });
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
