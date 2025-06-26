export interface PBIReport {
    nombre: string;
    descripcion: string;
    adicionales: { atributo: string; valor: string }[];
    idNotificacion?: string;
    idReporte?: string;
    clientSecret: string;
    clientId: string;
    groupId: string;
    reportId: string;
    tipoReporte: string;
}

export interface PBIReportResponse {
    error: number;
    message: string;
}