export interface ParametroStored {
  Atributo: string;
  Tipo: string;
  Longitud: string;
  Entera: string;
  Decimal: string;
}

export interface StoredProcedure {
  Nombre: string;
  Descripcion: string;
  Parametros: ParametroStored[];
}

export interface RespuestaStored {
  RESPUESTA: {
    Stored: StoredProcedure[];
  };
}
