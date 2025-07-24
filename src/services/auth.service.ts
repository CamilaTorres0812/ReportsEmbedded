import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from './personas.service';
import { SesionWe8Service } from './sesion-we8.service';
import { MessageReportService } from './message-report.service';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private personasService: PersonasService,
      private sessionService: SesionWe8Service) { }

  loginWithToken(idKatios: string, token: string): Observable<any> {
    return this.personasService.loginTCIToken(idKatios, token)
      .pipe(
        tap(res => {
          this.sessionService.setDataUserM3SinHubM3(res);
          sessionStorage.setItem('authType', 'token');
        })
      );
  }
}
