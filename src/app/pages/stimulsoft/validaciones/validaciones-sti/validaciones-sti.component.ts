import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import moment from 'moment';
import { Button, ButtonModule } from 'primeng/button';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { ParametrosComponent } from '../parametros/parametros.component';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-validaciones-sti',
  imports: [CommonModule, DropdownModule, ButtonModule, ParametrosComponent, FormsModule, DatePickerModule, DialogModule, InputTextModule, InputNumberModule, SelectModule, CardModule],
  standalone: true,
  templateUrl: './validaciones-sti.component.html',
  styleUrl: './validaciones-sti.component.css'
})
export class ValidacionesSTIComponent {
  public gsNombreComponent: string = "ExportarGenericoValidacionesComponent";
  public ID_HUB: string = ''
  public ID_UBICACION: string = ''
  @Input() validaciones: any[] = [];
  @Input() autoGenerar: boolean = false;
  @Input() loged_user: any = null;
  @Input() IDKatios: string = '';
  @Output() crearProcesoEA = new EventEmitter<any>();
  public fondeador: any;
  public clasificacionxperfil: any = {};
  public selectedComboPerfil: any;
  public ubicacionesPosibles: string[] = [];
  public zonasPosibles: any;
  public tiposPosibles: any;
  public conceptosPosibles: any;
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
    try {
      this.clasificacionxperfil = JSON.parse(localStorage.getItem("CLASIXPERF" + this.IDKatios) || '{}');
      this.traerComboPerfil();
    }
    catch (e) {
      console.warn("no hay clasificacion",e)
    }
    this.retomarValidacionesFijas();
    if (this.autoGenerar) this.autoGenerarReporte();
  }

  retomarValidacionesFijas() {
    this.validaciones.filter(x => x?.CAMPO == "FIJA").forEach(x => {
      switch (x.NOMBRE) {
        case "UBICACION": 
          x.VALOR = this.ID_UBICACION;
          break;
        case "HUB": 
          x.VALOR = this.ID_HUB;
          break;
        case "NDOC": 
          x.VALOR = this.loged_user.NDOC;
          break;
      }
    });
    this.validaciones.filter(x => x?.CAMPO == "DATE").forEach(x => {
      x.VALOR = moment(new Date()).format("YYYY-MM-DD")
    });
  }

  generar() {
    for (let i in this.validaciones) {
      if (this.validaciones[i].GRUPO == "FONDEADOR") this.validaciones[i].VALOR = this.fondeador.TNDoc;
    } 
    this.visible = false;
    this.crearProcesoEA.emit(this.validaciones);
  }

  cambioFondeador(iFondeador: any) {
    this.fondeador = iFondeador;
  }

  seleccionoCombo(e: any, val: any) {
    val.VALOR = e.Descripcion;
  }

  seleccionoComboPerfil(e: any, val: any) {
    let ubicacionesSeleccionadas = e;
    let ubicConcat = "";
    ubicacionesSeleccionadas.forEach((ubicacion: any) => {
      ubicConcat = ubicConcat + "'" + ubicacion + "',";
    });
    ubicConcat = ubicConcat.substring(1, ubicConcat.length - 2)
    val.VALOR = ubicConcat;
  }

  autoGenerarReporte() {
    this.validaciones.forEach(x => {
      switch (x.DEFAULT) {
        case "MESMENOS": {
          let date = new Date();
          x.VALOR = moment(new Date(date.setMonth(date.getMonth() - 1))).format("YYYY-MM-DD");
          break;
        }
        case "HOY": {
          x.VALOR = moment(new Date()).format("YYYY-MM-DD");
          break;
        }
        case "PRIMERDIAMES": {
          x.VALOR = moment(new Date()).startOf('month').format("YYYY-MM-DD");
          break;
        }
        case "USERLOGEADO": {
          x.VALOR = this.loged_user.NDOC;
          break;
        }
        case "HUBACTUAL": {
          x.VALOR = this.loged_user.IDHUB;
          break;
        }
        case "UBIACTUAL": {
          x.VALOR = this.loged_user.UBICACION;
          break;
        }
      }
    });
    this.generar();
  }

  traerComboPerfil() {
    let clasificacionxUbic;
    if (this.clasificacionxperfil.PXTA.length && this.clasificacionxperfil.PXTA.length > 1) {
      clasificacionxUbic = this.clasificacionxperfil.PXTA.find((x: any) => x.ATRIBUTO == 'IDUBICACION');
    }
    else       clasificacionxUbic = this.clasificacionxperfil.PXTA;
    if (clasificacionxUbic) {
      this.ubicacionesPosibles = clasificacionxUbic.IDUBICACIONES.includes(",") ? clasificacionxUbic.IDUBICACIONES.split(',') : [clasificacionxUbic.IDUBICACIONES];
    }
    else {
      let splittedTemp;
      let splittedArray: string[] = [];
      this.clasificacionxperfil.PXTA.forEach((clasi: any) => {
        splittedTemp = clasi.IDUBICACIONES.split(',');
        splittedTemp.forEach((ubicacion: string) => {
          if (!splittedArray.includes(ubicacion)) {
            splittedArray.push(ubicacion);
          }
        });
      });
      this.ubicacionesPosibles = splittedArray;
    }
  }
}
