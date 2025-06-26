import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';



const servidorGenerales = environment.ServidorGenerales;


@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  constructor(private http: HttpClient, private router: Router) {}

  loginTCI(idKatios: string, data: any): Observable<any> {
    return this.http.get(`${servidorGenerales}Login/loginTCI/${idKatios}`, {
      params: data,
    });
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigateByUrl(`/auth/loginKatios`);
  }

   loginTCIToken(idKatios : string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
 
    return this.http.get(`${servidorGenerales}Login/loginTCIWithToken/${idKatios}`,
      { headers }
    );
  }

}
