import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { PBIReport, PBIReportResponse } from 'src/model/PBIReport';
import {HttpClient} from "@angular/common/http";

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
}
