export interface Clasification {
    CATEGORIA: RootCategory[];
}

export interface RootCategory {
    ATRIBUTO: string,
    CATEGORIA: ReportCategory[],
    DESCRIPCION: string,
    HIJO: string,
    PADRE: string,
    TIPO: string
}

export interface ReportCategory {
    PADRE: string,
    HIJO: string,
    DESCRIPCION: string,
    ATRIBUTO: string,
    TIPO: string
}