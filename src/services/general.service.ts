import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { MenuItem } from 'primeng/api';
import { environment } from 'src/enviroments/enviroment';
import { Clasification } from 'src/model/Reporte';
import { RespuestaStored } from 'src/model/SPReportes';

const API = environment.ServidorGenerales;

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient
  ) {

  }

  public generacionTRXInOut(idKatios:string, oData:any) {
    return this.http.post(`${API}InOutPersonal/GenerarTRX/${idKatios}`, oData)
      .toPromise()
  }
  async getTemplateReport(idkatios: string, idRep: string) {
    return this.http.get(`${API}ReporteBI/get_template_reporte/${idkatios}`, { params: { id_rep: idRep } })
      .toPromise()
      .then((res: any) => JSON.parse(res).RESPUESTA.RPTemplate)
      .then(data => { return data; })
  }
  public getMenu(idKatios: string, perfil: string) {
    return this.http.get(`${API}General/getMenuV2/${idKatios}/MTR/${perfil}`)
        .toPromise()
        .then((res: any) => {
            res = res.split("DESCRIPCION").join("label");
            res = res.split("OPCION").join("items");
            res = JSON.parse(res);
            this.prepararMenu(res.MENU);
            return res;
        })
        .then((res: any) => <MenuItem[]>res.MENU.items)
        .then(data => data);
}

    public prepararMenu(opcion: any): void {
    if (!opcion) return;

    if (Array.isArray(opcion)) {
        opcion.forEach(op => this.prepararMenu(op));
    } else {
        // Asignar routerLink si LINK tiene el parámetro Componente
        const link = opcion.LINK || '';
        const match = link.match(/Componente=([^&]+)/);
        if (match) {
            opcion.routerLink = decodeURIComponent(match[1]);
        }

        // Convertir ítems únicos a arreglo
        if (opcion.items && !Array.isArray(opcion.items)) {
            opcion.items = [opcion.items];
        }

        // Si items está vacío, eliminarlo para permitir navegación directa
        if (opcion.items && opcion.items.length === 0) {
            delete opcion.items;
        }

        // Recursividad en hijos
        if (opcion.items) {
            this.prepararMenu(opcion.items);
        }
    }
}
    

    async getReportesByTipo(idkatios: string, params: any) {
    return this.http.get(`${API}ReporteBI/GetReportesByTipo/${idkatios}`, { params })
      .toPromise()
      .then((res: any) => JSON.parse(res).RESPUESTA.expT)
      .then(data => { return data; })
    }

    async ejectuarStoreGenerico(idkatios: string, params: any) {
    return this.http.get(`${API}General/ejecutar_stored_generico/${idkatios}`, { params })
      .toPromise()
    }

      async getTblParametros(idkatios: string, tipo: string, grupo: string) {
    return this.http.get(`${API}Parametros/getParametros/${idkatios.trim()}/${grupo.trim()}/${tipo.trim()}`)
      .toPromise()
      .then((res: any) => JSON.parse(res))
      .then(data => { return data; })
  }

  public getReportsByClasification(idKatios: string, NDOC: string): Promise<Clasification | undefined> {
    return this.http.get<Clasification | undefined>(`${API}General/M3GetClasificacionByTipo/${idKatios}/${NDOC}`)
      .toPromise()
  }

  public getReportsByFilter(idKatios: string, sTipo: string, oData: any): Promise<any> {
    return this.http.get(`${API}ReporteBI/getReportesByFiltro/${idKatios}/${sTipo}`,{ params: oData })
      .toPromise()
  }

  public getSPReports(idKatios: string, data: any): Promise<RespuestaStored | undefined> {
    return this.http.get<RespuestaStored>(`${API}ReporteBI/getSPReportes/${idKatios}`,{ params: data })
      .toPromise()
      .then((res: any) => JSON.parse(res))
  }

  public crearReporteNotificacionKatios(idKatios: string, data: any, file: File | null) {
    const formdata: FormData = new FormData();
    formdata.append('reporte', JSON.stringify(data));
    if(file){
      formdata.append('uploadFile1', file); 
    }
    return this.http.post(`${API}ReporteBI/crearReporteNotificacionKatios/${idKatios}`, formdata).toPromise();
  }

  ejecutarStoredGenericoWithFormat(idKatios: string, data: any) {
    //var data = { "stored_name": "asdasdasd", "attributes": xml_atributos_sp, "format":sada };
    return this.http.get(`${API}General/ejecutarStoredGenericoWithFormat/${idKatios}`, {params: data}).toPromise();
  }

  public async getReporteAdicionalesById(idKatios: string, data: any) {
    let oJson = [];
    return this.http.get(`${API}ReporteBI/getReporteAdicionalesById/${idKatios}`, {params: data})
    .toPromise()
    .then((res: any) => {
      oJson = JSON.parse(res);
      if (oJson.RESPUESTA) {
        if (oJson.RESPUESTA.ReportesAdic.length) {
          return oJson.RESPUESTA.ReportesAdic;
        }
        else {
          return [oJson.RESPUESTA.ReportesAdic];
        }
      }
      return [];
    }).catch(() => {return []})
    
  }

  public editarReporteNotificacionKatios(idKatios: string, data: any, file: File | null) {
    const formdata: FormData = new FormData();
    formdata.append('reporte', JSON.stringify(data));
    if(file){
      formdata.append('uploadFile1', file); 
    }
    return this.http.post(`${API}ReporteBI/editarReporteNotificacionKatios/${idKatios}`, formdata).toPromise();
  }

  public eliminarReporte(idKatios: string, reporte: any) {
    let data = { 'reporte': JSON.stringify(reporte) };
    return this.http.post(`${API}ReporteBI/eliminarReporte/${idKatios}`, data).toPromise();
  }
}
