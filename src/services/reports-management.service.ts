import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { PBIReport, PBIReportResponse } from 'src/model/PBIReport';
import {HttpClient, HttpParams} from "@angular/common/http";

const API = environment.nbxApi;

@Injectable({
  providedIn: 'root'
})

export class ReportsManagementService {

  constructor(private http: HttpClient) { }

  public crearReportePBI(idKatios: string, data: PBIReport): Promise<PBIReportResponse | undefined> {
    
    return this.http.post<PBIReportResponse>(`${API}ReportManagement/crearReporte/${idKatios}`, data).toPromise();
  }

  public editarReportePBI(idKatios: string, data: PBIReport): Promise<PBIReportResponse | undefined> {
    
    return this.http.post<PBIReportResponse>(`${API}ReportManagement/editarReporte/${idKatios}`, data).toPromise();
  }

  public getReportsByFilter(idKatios: string, data: any,filtros:any): Promise<any> {
    let params = new HttpParams()
    .set('Filtros', JSON.stringify({ Filtros: filtros }))
    .set('ndoc', data.ndoc)
    .set('tdoc', data.tdoc)
    .set('inf', data.inf)
    .set('sup', data.sup);

    console.log(params)
    
    return this.http.get<any>(`${API}ReportManagement/getReportesByFiltro/${idKatios}`,{params}).toPromise();
  }
}
