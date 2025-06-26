import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/enviroments/enviroment';

const servidorGenerales = environment.ServidorGenerales;
const apiInventory = environment.ServidorM3;
// const URL = environment.inventory;
const urlLocalHost = 'http://localhost:5152/Inventory/';
//const urlProd = 'https://apiplataforma.azurewebsites.net/Inventory/';
const urlProd = 'https://apiinventory-aqcwgjh8cma7eteh.eastus2-01.azurewebsites.net/Inventory/';
const finalUrl = apiInventory

export interface UpdateDepartmentStatusRequest {
  IdKatios: string;
  IdInventory: number;
  IdDeparment: number;
  NewStatus: string;
}
export interface UpdateInventoryStatusRequest {
  IdKatios: string;
  IdInventory: number;
  NewStatus: string;
}

export interface GetSKUNombreRequest {
  IdKatios: string;
  SKUs: string[];
}



@Injectable({
  providedIn: 'root',
})

export class InventoryService {
  constructor(private http: HttpClient, private router: Router) {}

  getM3Ubicaciones(idKatios: string): Observable<any> {
    return this.http.get(`${finalUrl}getM3Ubicaciones/${idKatios}`);
  }

  getUsuariosSistema(idKatios: string): Observable<any> {
    return this.http.get(`${finalUrl}getUsuariosSistema/${idKatios}`);
  }

  getInventory(idKatios: string): Observable<any> {
    return this.http.get(`${finalUrl}getInventory/${idKatios}`);
  }

  getDeparment(idKatios: string, idInventory: number): Observable<any> {
    return this.http.get(`${finalUrl}getDeparment/${idKatios}/${idInventory}`);
  }

  addUpdateInventory(idKatios: string, data: any): Observable<any> {
    return this.http.post(`${finalUrl}addUpdateInventory`, data, {
      params: new HttpParams().set('idKatios', idKatios),
    });
  }

  deleteFromInventory(idKatios: string, idInventory: number): Observable<any> {
    return this.http.delete(`${finalUrl}deleteFromInventory/${idKatios}`, {
      params: new HttpParams().set('idInventory', idInventory.toString()),
    });
  }

  addUpdateDepartment(idKatios: string, data: any): Observable<any> {
    return this.http.post(`${finalUrl}addUpdateDepartment`, data, {
      params: new HttpParams().set('idKatios', idKatios),
    });
  }

  deleteFromDepartment(idKatios: string, idInventory: number, idDepartment: number): Observable<any> {
    return this.http.delete(`${finalUrl}deleteFromDepartment/${idKatios}`, {
      params: new HttpParams()
        .set('idInventory', idInventory.toString())
        .set('idDepartment', idDepartment.toString()),
    });
  }

  getProduct(idKatios: string, ndoc: string, idUbicacion: number): Observable<any> {
    return this.http.get(`${finalUrl}getProduct/${idKatios}/${ndoc}/${idUbicacion}`);
  }

  addUpdateProduct(idKatios: string, data: any): Observable<any> {
    return this.http.post(`${finalUrl}addUpdateProduct`, data, {
      params: new HttpParams().set('idKatios', idKatios),
    });
  }

  deleteFromProduct(idKatios: string, idInventory: number, idDepartment: number): Observable<any> {
    return this.http.delete(`${finalUrl}deleteFromProduct/${idKatios}`, {
      params: new HttpParams()
        .set('idInventory', idInventory.toString())
        .set('idDepartment', idDepartment.toString()),
    });
  }

  exportInventoryToCSV(idKatios: string, idInventory: number, nDoc: string): Observable<any> {
    return this.http.get(`${finalUrl}ExportInventoryToCSV/${idKatios}/${idInventory}/${nDoc}`);
  }

  getInventoryAjuste(idKatios: string, date: string, ubic: number, atributo:string, valor:string): Observable<any> {
    const params = new HttpParams()
      .set('IDKATIOS', idKatios)
      .set('Date', date)
      .set('Ubic', ubic.toString())
      .set('Atributo', atributo)
      .set('Valor', valor);

    return this.http.get(finalUrl, { params });
  }

  getProductsByInventory(idKatios: string, idInventory: number): Observable<any> {
    const params = new HttpParams()
      .set('idKatios', idKatios)
      .set('idInventory', idInventory);
    return this.http.get(`${finalUrl}GetProductsByInventory`, { params});
  }

  checkAuditInventory(idKatios: string, idInventory: number): Observable<any> {
    const params = new HttpParams()
      .set('idKatios', idKatios)
      .set('idInventory', idInventory.toString());
    return this.http.get(`${finalUrl}CheckAuditInventory`, { params });
  }

  updateDepartmentStatus(request: UpdateDepartmentStatusRequest): Observable<any> {
    return this.http.post(`${finalUrl}UpdateDepartmentStatus`, request);
  }

  updateInventoryStatus(request: UpdateInventoryStatusRequest): Observable<any> {
    return this.http.post(`${finalUrl}UpdateInventoryStatus`, request);
  }

  getSKUNombre(request: GetSKUNombreRequest): Observable<any> {
    return this.http.post(`${finalUrl}GetSKUNombre`, request);
  }

  getProductDetails(params: HttpParams): Observable<any> {
    return this.http.get(`${finalUrl}GetProductDetails`, { params });
}

getTemplateReporte(idKatios: string, idRep: string): Observable<any> {
  const params = new HttpParams()
    .set('IDKATIOS', idKatios)
    .set('IDREP', idRep);
  return this.http.get(`${finalUrl}templateReporte`, { params });
}
reiniciarZona(idKatios: string, idInventory: number, idDepartment: number): Observable<any> {
  const params = new HttpParams()
    .set('idInventory', idInventory.toString())
    .set('idDepartment', idDepartment.toString());
  return this.http.post(`${finalUrl}reiniciarZona/${idKatios}`, null, { params });
}


deleteProductsByDepartment(request: any): Observable<any> {
  return this.http.delete(`${finalUrl}DeleteProductsByDepartment`, {
    body: request
  });
}

setNdocDep(data: any): Observable<any> {
  return this.http.post(`${finalUrl}setNdocDep`, data);
}
getOpcionesMenu(idKatios: string, idAplicacion: string, nomPerfil: string): Observable<any> {
  const params = new HttpParams()
    .set('idAplicacion', idAplicacion)
    .set('nomPerfil', nomPerfil);
  return this.http.get(`${finalUrl}getOpcionesMenu/${idKatios}`, { params });
}

updateDepartmentQuantity(data: any): Observable<any> {
  return this.http.post(`${finalUrl}UpdateDepartmentQuantity`, data);
}

getDistinctAtributo(idKatios: string): Observable<any> {
  const params = new HttpParams().set('idKatios', idKatios);
  return this.http.get(`${finalUrl}GetDistinctAtributo`, { params });
}

}
