import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MessageService, TreeNode } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { ReportCategory, RootCategory } from 'src/model/Reporte';
import { GeneralService } from 'src/services/general.service';
import { SesionWe8Service } from 'src/services/sesion-we8.service';
import { AddReportComponent } from './add-report/add-report.component';
import { DownloadDataComponent } from './download-data/download-data.component';
import { EditReportComponent } from './edit-report/edit-report.component';
import { DeleteReportComponent } from './delete-report/delete-report.component';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageReportService } from 'src/services/message-report.service';
import { Tag } from 'primeng/tag';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PaginationReportComponent } from './pagination-report/pagination-report.component';
import { PaginatorModule,PaginatorState } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { ReportsManagementService } from 'src/services/reports-management.service';
import { PanelModule } from 'primeng/panel';
interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}
@Component({
  selector: 'app-report-administration',
  standalone: true,
  imports: [CommonModule,DialogModule, ButtonModule, FormsModule, TreeModule,Tag, AddReportComponent, DownloadDataComponent,EditReportComponent,DeleteReportComponent,AutoCompleteModule,PaginatorModule, SelectModule,PanelModule],
  templateUrl: './report-administration.component.html',
  styleUrl: './report-administration.component.css',
  providers: [MessageReportService]
})
export class ReportAdministrationComponent {
  idKatios: string;
  display = false;
  oldAdicional: any;
  selectedDescription: any;
  NDOC: string = '';
  TDOC: string = '';
  selectedCategory: any;
  public oData: Array<TreeNode> = new Array<TreeNode>();
  selectedFile!: TreeNode;
  private Filtros!: Array<any>;
  enProceso = false;
  ListReportes: Array<any> = [];
  regularDistribution = 100 / 3 + '%';
  selectedReport: any;
  nodoSeleccionado: any;
  filteredReports: any[] = [];
  first2: number = 0;

  rows2: number = 6;

  totalRecords: number = 120;

  options = [
      { label: 6, value: 6 },
      { label: 12, value: 12 },
      { label: 24, value: 24 }
  ];

  constructor(private generalService: GeneralService,
    private sesionWE8: SesionWe8Service, private router: Router, private messageService: MessageReportService, private reportsManagement: ReportsManagementService) { 
    this.idKatios = this.sesionWE8.getDataUserM3SinHubM3().IDKATIOS.trim();
    this.NDOC = this.sesionWE8.getDataUserM3SinHubM3().NDOC;
    this.TDOC = this.sesionWE8.getDataUserM3SinHubM3().TDOC; 
    this.cargarReportes();
    
   }

   cargarReportes(){
    this.generalService.getReportsByClasification(this.idKatios, "REPORTES").then(x => {
      if(x){
        this.LoadDataFromService(x.CATEGORIA);
      }
    }).catch(r => this.messageService.error("Error","No se pudo cargar las categorías"));
   }

   public LoadDataFromService(oDataService: Array<RootCategory>) {
    if (oDataService.length > 0) {
      this.oData.push(this.AddTreeNode(oDataService[0]));
      this.selectedCategory = oDataService[0];
      if (oDataService[0].CATEGORIA) {
        this.GenerateTreeNode(oDataService[0].CATEGORIA, this.oData[0])
      }
      this.nodeSelect(this.oData[0]);
    }
  }

   public AddTreeNode(idataWO: any) {
    var oDataUno = {
      parent: idataWO.PADRE,
      data: idataWO.HIJO,
      label: idataWO.DESCRIPCION,
      children: idataWO.CATEGORIA,
      type: idataWO.ATRIBUTO,
      expandedIcon: "pi pi-folder-open",
      collapsedIcon: "pi pi-folder"
    }

    return oDataUno;
  }


  public GenerateTreeNode(dataWO: Array<any>, treeNodeParent: TreeNode) {
    if (dataWO.length > 0) {
      var ArroData = new Array<TreeNode>();
      for (var i = 0; i < dataWO.length; i++) {
        var oDataUno: TreeNode;
        oDataUno = this.AddTreeNode(dataWO[i]);
        console.log(dataWO[i]);
        if (dataWO[i].CATEGORIA.length && dataWO[i].CATEGORIA.length > 0) {
          this.GenerateTreeNode(dataWO[i].CATEGORIA, oDataUno);
        }
        ArroData.push(oDataUno);
      }
      treeNodeParent.children = ArroData;
    }

  }

  public nodeSelect = (e: any) => {
    this.nodoSeleccionado = e;
    this.Filtros = new Array<any>();
    this.CrearFiltros(e);
    this.aplicarFiltros();
  }

  public CrearFiltros(node: any) {
    if (node && node.type != "ROOT") {
      this.Filtros.push({ "Atributo": node.type, "Valor": node.label });
      if (node.parent) {
        this.CrearFiltros(node.parent);
      }
    }
  }

  /**
   * Aplicar filtros
   * @param iFiltros variable de Filtros a aplicar
   */
  public aplicarFiltros( ) {
    const limInf = this.first2 + 1;
    const limSup = this.first2 + this.rows2;
    var data = { "ndoc":this.NDOC, "tdoc": this.TDOC,"inf": limInf, "sup": limSup };
    this.reportsManagement.getReportsByFilter(this.idKatios, data,this.Filtros).then(resp => {
      if (resp && resp.Reportes) {
        console.log(resp)
        this.ListReportes = resp.Reportes;
      } else {
        this.ListReportes = [];
      }
    }).catch(r => this.messageService.error("Error","No se pudo cargar los reportes"));
  }

  refreshReports(){
    this.oData = new Array<TreeNode>();
    this.ListReportes = [];
    this.cargarReportes();
  }

  descargarMrtClick(reporte: any) {
    this.generalService.getTemplateReport(this.idKatios, reporte.IdRep).then(rep => {
      this.descargarArchivoMrt(rep.CodeHTML, "DataMrt")
    }).catch(r=>this.messageService.error("Error",'No se pudo descargar el reporte'));
  }

  descargarArchivoMrt(data:any, name: string) {
    var link = document.createElement('a');
    link.setAttribute("type", "hidden"); 
    link.download = name + ".mrt";
    var blob = new Blob([data], { type: 'text/plain' });
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  showReport(reporte:any){
    const idRep = reporte.IdRep;
    const tipoReporte = reporte.TipoReporte;
    if(tipoReporte !== "PBI"){
      this.router.navigateByUrl(`admin/STI/${idRep}`);
    }else{
      this.router.navigateByUrl(`admin/PBI/${idRep}`);
    }
  }

  filterReport(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query || '';
        if (!query.trim()) {
          this.filteredReports = [...this.ListReportes]; 
        } else{
            for (let i = 0; i < (this.ListReportes as any[]).length; i++) {
              let report = (this.ListReportes as any[])[i];
              if (report.Nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                  filtered.push(report);
              }
            }
            this.filteredReports = filtered;
        }
        
    }
    onPageChange2(event: PaginatorState) {
        this.first2 = event.first ?? 0;
        this.rows2 = event.rows ?? 6;
        console.log(this.first2,this.rows2,this.first2+this.rows2);
        this.aplicarFiltros();
    }
    cambiarPagina(){
      this.first2 = 0;
      console.log(this.Filtros)
      this.aplicarFiltros();
      console.log("cambio")
    }
 
}
