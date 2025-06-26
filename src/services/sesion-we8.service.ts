import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

const servidorGenerales = environment.ServidorGenerales;
@Injectable({
  providedIn: 'root'
})
export class SesionWe8Service {
  constructor(private http: HttpClient) { }

  private getKeyM3SessionSinHub(idKatios: string) {
    return `SessionM3${idKatios.trim().toUpperCase()}`;
  }

  getConfigKatios(idKatios: string): Observable<any> {
    return this.http.get(`${servidorGenerales}General/getConfiguracionKatios/${idKatios}`)
  }

  setConfEntradaHub(idKatios: string, idUbicacion: string, idHub: string) {
    sessionStorage.setItem("EntradaHub", idKatios + "?" + idUbicacion + "?" + idHub);
  }

  setDataUserM3SinHubM3(usuario: any) {
    sessionStorage.setItem('SesionLVL1m3', JSON.stringify(usuario));
  }

  //Append a sessionM3 A partir del usuario que se insertara.
  getDataUserM3SinHubM3() {
    return JSON.parse(sessionStorage.getItem('SesionLVL1m3') || '{}');
  }

  ///Obtener data de usuario logueado
  //1. Se valida si hay información de usuario real logueado, si existe, se retona esa información
  //2. Se valida la información de usuario invitado. y se retorna
  public GetDataUserM3Logged(sIDKatios: string) {
    var sDataM3UserReal;
    var oDataM3UserReal;
    sDataM3UserReal = localStorage.getItem(this.GetKeyM3Session(sIDKatios));

    if (sDataM3UserReal !== undefined && sDataM3UserReal != null) {
      //Encontró informacion de data real.
      oDataM3UserReal = JSON.parse(sDataM3UserReal);
      return oDataM3UserReal;
    }
  }

  private GetKeyM3Session(sIDKatios: string) {
    var oLVL1 = this.GetLVL1FromSession();
    return "SessionM3" + sIDKatios.trim().toUpperCase() + oLVL1.UsuarioSistema.UBICACION.trim() + oLVL1.UsuarioSistema.IDHUB.trim();
  }

  ///Obtener la sesion de invitado.
  public GetLVL1FromSession() {
    var sSessionLVL1M3 = sessionStorage.getItem("SessionLVL1M3");
    var oSessionLVL1M3;
    if (sSessionLVL1M3 !== undefined && sSessionLVL1M3 != null) {
      oSessionLVL1M3 = JSON.parse(sSessionLVL1M3);
      if (oSessionLVL1M3.UsuarioSistema.UBICACION !== undefined && oSessionLVL1M3.UsuarioSistema.UBICACION != null) {
        return oSessionLVL1M3;
      }
    }
    return null;
  }

  public GetUbicacionLVL1FromSession() {
    var sSessionLVL1M3 = sessionStorage.getItem("SessionLVL1M3");
    var oSessionLVL1M3;
    if (sSessionLVL1M3 !== undefined && sSessionLVL1M3 != null) {
      oSessionLVL1M3 = JSON.parse(sSessionLVL1M3);
      if (oSessionLVL1M3.UsuarioSistema.UBICACION !== undefined && oSessionLVL1M3.UsuarioSistema.UBICACION != null) {
        return oSessionLVL1M3.UsuarioSistema.UBICACION;
      }
    }
    return null;
  }

  //OBTENER LA INFORMACION DE IDHUB
  public GetHubLVL1FromSession() {
    var sSessionLVL1M3 = sessionStorage.getItem("SessionLVL1M3");
    var oSessionLVL1M3;
    if (sSessionLVL1M3 !== undefined && sSessionLVL1M3 != null) {
      oSessionLVL1M3 = JSON.parse(sSessionLVL1M3);
      if (oSessionLVL1M3.UsuarioSistema.IDHUB !== undefined && oSessionLVL1M3.UsuarioSistema.IDHUB != null) {
        return oSessionLVL1M3.UsuarioSistema.IDHUB;
      }
    }
    return null;
  }

  validarSesion():boolean {
    let session = sessionStorage.getItem('SesionLVL1m3') || '';
    return session === '' ? false : true;
  }
}
