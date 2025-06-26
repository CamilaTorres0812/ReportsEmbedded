import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresProcedureService {
  constructor() { }
  armarDataParametros(storeds: Array<any>,isAdd: boolean) {
    let dataParametros = new Array<any>();
    let parametrosStored = new Array<any>();

    for (const stored of storeds) {
      if (parametrosStored.length == 0) {
        if (stored.Parametros.length) {
          parametrosStored = stored.Parametros;
        }
        else {
          parametrosStored = [stored.Parametros];
        }
      }
      else {
        if (stored.Parametros.length) {
          stored.Parametros.forEach((element:any) => {
            parametrosStored.push(element);
          });
        }
        else {
          parametrosStored.push(stored.Parametros);
        }
      }
    }
    parametrosStored = this.quitarParametrosRepetidos(parametrosStored);
    
    for (let _i = 0; _i < parametrosStored.length; _i++) {
      let atributo = parametrosStored[_i];
      if (atributo.Atributo.toUpperCase() != "IDKATIOS") {
        let tipo = this.obtenerTipoParametro(atributo.Tipo);
        if (atributo.Atributo == "UACTIVO") {
          tipo = "FIJA"
        }
        if(isAdd){
          dataParametros.push({ atributo: atributo.Atributo, tipo: tipo });
        }else{
          dataParametros.push({ NOMBRE: atributo.Atributo, CAMPO: tipo });
        }
        
      }
    }

    return dataParametros
  }

  quitarParametrosRepetidos(parametrosIn: Array<any>): Array<any> {
    let parametrosOut: any = [];
    for (const parametro of parametrosIn) {
      if (!parametrosOut.find((x:any) => x.Atributo == parametro.Atributo)) {
        parametrosOut.push(parametro);
      }
    }
    return parametrosOut;
  }


  obtenerTipoParametro(tipo: string): string {
    switch (tipo.toUpperCase()) {
      case "INT":
      case "NUMERIC":
      case "DECIMAL": {
        return "NUMERIC"
      }
      case "VARCHAR": {
        return "TEXT"
      }
      default: {
        return tipo.toUpperCase();
      }
    }
  }
}
