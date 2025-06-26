import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class PbiService {

  constructor(private http: HttpClient) { }


  getToken(jparams: any): Observable<string> {
    return this.http.post<{ token: string }>(environment.nbxApi+"PbiEmbedded/tokenPost", {  }, { params: jparams })
      .pipe(
        map(response => response.token)  
      );
  }
  
  
  getReports(jparams: any): Observable<any> {
    return this.http.get(environment.nbxApi+"PbiEmbedded/reports",{ params: jparams });
  }
  
  getInventoryReport(jparams: any, idReport: string): Observable<any> {
    return this.getReports(jparams).pipe(
      map(reports => reports.value.find((report:any) => report.id === idReport))
    );
  }
  
  generateToken(groupId: string, reportId: string, jparams: any): Observable<string> {
    return this.http.post<any>(environment.nbxApi+`PbiEmbedded/generateToken/${groupId}/${reportId}`, { }, { params: jparams })
      .pipe(
        map(response => response.token)  
      );
  }

  getValidRole(groupId: string, datasetId: string, jparams: any): Observable<boolean> {
    return this.http.get<boolean>(environment.nbxApi+`PbiEmbedded/checkRole/${groupId}/${datasetId}`, { params: jparams });
  }
}