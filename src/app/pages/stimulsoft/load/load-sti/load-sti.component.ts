import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/services/general.service';
import { SesionWe8Service } from 'src/services/sesion-we8.service';
import { XmlToJsonTF } from 'src/services/utils/xmltojson';
import { StimulsoftComponent } from '../../stimulsoft/stimulsoft.component';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { Panel } from 'primeng/panel';
import { ValidacionesSTIComponent } from '../../validaciones/validaciones-sti/validaciones-sti.component';
import { BlockUIModule } from 'primeng/blockui';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-load-sti',
  imports: [StimulsoftComponent, CommonModule, Panel, ValidacionesSTIComponent, BlockUIModule,DialogModule],
  standalone: true,
  templateUrl: './load-sti.component.html',
  styleUrl: './load-sti.component.scss'
})
export class LoadSTIComponent implements OnInit{
  public dataInformacion: any;
  public idKatios: string = ''
  public loged_user: any;
   public dataFormat: string = "xml"
  public autoGenerar: boolean = false;
  public data: any;
  public displayStimulsoftDashboard: boolean = false;
  public displayStimulsoftReport: boolean = false;
  public displayValidaciones: boolean = false;
  public infoReporte: any;
  public isLoading: boolean = false;
  public jsonAtributos: any[] = [];
  public mrt: string = '';

  constructor(
    private generalService: GeneralService,
    private sesionWE8: SesionWe8Service,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDataReport()
  }

  getDataReport() {
    this.activatedRoute.params.subscribe(async param => {
        try {
          const id = param['idRep'];
          const session =  this.sesionWE8.getDataUserM3SinHubM3();
          this.loged_user = session;
          this.idKatios = session.IDKATIOS.trim();
          this.isLoading = true;
          let params = { tdocActivo: session.TDOC, ndocActivo: session.NDOC, tiporeporte: 'BI', idreporte: id }
          this.generalService.getReportesByTipo(this.idKatios, params)
            .then(res => {
              console.log("obtuvo reportes por tipo", res)
              this.infoReporte = res;
              this.callValidaciones(this.infoReporte);
            })
            .catch(err => {
              console.log(err)
            })
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }) 
  }

  callValidaciones(proceso: any) {
    var oXmlToJson = new XmlToJsonTF();
    if (!this.dataInformacion) {
      if (proceso.XMLATRIBUTO) {
        console.log(proceso.XMLATRIBUTO)
        let validaciones: any = oXmlToJson.convertXmlToJson(proceso.XMLATRIBUTO);
        console.log("VALIDACIONES", validaciones);
        if (validaciones?.VALIDACIONES?.VALIDACION?.length > 0) {
          this.jsonAtributos = validaciones.VALIDACIONES.VALIDACION;
          this.autoGenerar = validaciones?.VALIDACIONES?.AUTOGENERAR == '1' ? true : false;
          this.isLoading = false;
          this.displayValidaciones = true;
        }
      }
      if (!this.displayValidaciones) this.ejecutarSP(null);
    }
    else this.respOKExecSP(this.dataInformacion);
  }

  ejecutarSP(iAtributos_sp: any) {
    if (iAtributos_sp == null) iAtributos_sp = '{ DATOS: {} }';
    this.generalService.ejectuarStoreGenerico(this.idKatios, { stored_name: this.infoReporte.STOREDNAME, attributes: iAtributos_sp, Formato: this.dataFormat })
      .then(res => {
        console.log(res) 
        this.respOKExecSP(res)
      })
      .catch(err => console.log(err))
  }

  respOKExecSP(data: any) {
    this.data = typeof(data) == 'string' ? JSON.parse(data) : data;
    if (this.dataFormat === 'json') {
      this.data = {
        RESPUESTA: this.data.data
      };
    }
    console.log("DATA REPORT: ", data)
    this.getInfoReporte();
  }

  getInfoReporte() {
    this.displayValidaciones = false;
    this.generalService.getTemplateReport(this.idKatios, this.infoReporte.IDREP)
      .then(res => {
        console.log("RESPUESTA STIMULSOFT: ", res)
        this.mrt = res.CodeHTML;
        this.displayStimulsoftReport = true;
        this.isLoading = false;
        
      })
      .catch(err => {
        console.log(err)
        this.isLoading = false;
      })
  }

   crearProcesoEA(validaciones: any) {  
    console.log("crearProcesoEA")
    this.isLoading = true;
    let atributos_sp = this.armar_atributos_sp(validaciones);
    this.ejecutarSP(atributos_sp);
  }

  armar_atributos_sp(validaciones: any[]): string {
    var datos: any = {};
    if (validaciones) {
      datos["DATOS"] = {};
      for (let _i = 0; _i < validaciones.length; _i++) {
        let validacion = validaciones[_i];
        if (validacion.CAMPO == "DATE") datos["DATOS"][validacion.ID] = moment(validacion.VALOR).format('YYYY-MM-DD')
        else datos["DATOS"][validacion.ID] = validacion.VALOR
      }
    }
    return JSON.stringify(datos);
  }

}
