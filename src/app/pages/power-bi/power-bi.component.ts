import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Embed, IReportEmbedConfiguration, service } from 'powerbi-client';
import * as powerbi from 'powerbi-client';
import { PowerBIEmbedModule, PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import 'powerbi-report-authoring';
import { PbiService } from 'src/services/pbi.service';
import { SesionWe8Service } from 'src/services/sesion-we8.service';
import { GeneralService } from 'src/services/general.service';
import { TimerService } from 'src/services/timer.service';
import { CommonModule } from '@angular/common';
import * as models from 'powerbi-models';
import { LoadingComponent } from '@/layout/components/loading/loading.component';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TimerComponent } from './timer/timer.component';
import { Tooltip } from 'primeng/tooltip';
import { MessageReportService } from 'src/services/message-report.service';
import { SelectButton } from 'primeng/selectbutton';


@Component({
  selector: 'app-power-bi',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PowerBIEmbedModule,LoadingComponent,TabsModule,PanelModule,TimerComponent,ButtonModule,Tooltip, SelectButton],
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.css'],
  providers: [MessageReportService]
})
export class PowerBIComponent implements OnInit, OnDestroy {
  @ViewChild(PowerBIReportEmbedComponent) powerBIReportComponent!: PowerBIReportEmbedComponent;
  public sales = false;
  public entidad: string = ""; 
  public perfil: string = ""; 
  accessToken: string = "";
  reportToken: string = "";
  embedUrlApi: string = "";
  embedReportId: string = "";
  datasetWorkspaceId: string = "";
  datasetId: string = "";
  entity: string = "";
  reportConfig: IReportEmbedConfiguration = {
    type: 'report',
    id: '',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: {
    }
  };
  isEmbedded = false;
  phasedEmbeddingFlag = false;
  reportClass = 'report-container';
  refreshIntervalId: any;
  reportObj: powerbi.Report | null = null;
  hasRole: boolean = false;
  public isLoading: boolean = false;
  expDate!: Date;
  reportData: any;
  MINUTES_BEFORE_EXPIRATION = 10;
  INTERVAL_TIME = 30000;
  private tokenCheckInterval?: any;
  reportId: string = "";
  isMobile: boolean = false;
  hasMobileView: boolean = false;
  pages: powerbi.Page[] = [];
  activeTabIndex: number = 0;
  reportInfo: any;
  state: boolean = false;
  lastDate: string = '';
  view: any = { icon: 'pi pi-desktop', view: 'Desktop' };
  views: any[] = [
        { icon: 'pi pi-mobile', view: 'Mobile' },
        { icon: 'pi pi-desktop', view: 'Desktop' }
    ];
  
  eventHandlersMap = new Map ([
    ['loaded', async () => {
        this.reportObj = this.powerBIReportComponent.getReport();
        this.reportObj?.setAccessToken(this.accessToken);
        this.pages = await this.reportObj?.getPages();
        await this.hasLayout(this.pages);
        console.log('Report has loaded') 
    }
   
    ],
    ['rendered', () => {
      console.log('Report has rendered')
    }],
    ['error', (event?: service.ICustomEvent<any>) => {
        if (event && event.detail && event.detail.message?.includes('mobileLayoutError')) {
          console.log("No hay plantilla de movil", event.detail)
          this.hasMobileView = false;
        }

        if (event && event.detail && event.detail.message?.includes('TokenExpired')) {
          console.log("EXPIRO", event.detail)
          this.loadToken();
        }
      },
    ],
    ['visualClicked', () => console.log('visual clicked')],
    ['pageChanged', (event) => {
        let page = event?.detail.newPage;
        let index = this.pages.findIndex(p => p.name === page.name);
        this.activeTabIndex = index < 0 ? 0 : index;
    }
       ]
  ]) as Map<string, (event?: service.ICustomEvent<any>, embeddedEntity?: Embed) => void | null>;


  constructor(
    private router: Router, private pbiService: PbiService, private sesionWE8: SesionWe8Service, private generalService: GeneralService,
     private activatedRoute: ActivatedRoute, private timerService: TimerService,private messageService: MessageReportService
  ) {}

ngOnDestroy(): void {
  if (this.tokenCheckInterval) {
    clearInterval(this.tokenCheckInterval);
    this.tokenCheckInterval = undefined;
  }
}
  async ngOnInit() {
    let navegador = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let size = window.matchMedia("(max-width: 767px)").matches;
    if(navegador || size){
      this.isMobile = true;
    }
    this.loadReport();
    this.timerService.lastDate$.subscribe(date => this.lastDate = date);
    this.timerService.refreshState$.subscribe(({ isPaused, interval }) => {
      this.refreshReport(isPaused, interval);
    });
    document.addEventListener("visibilitychange", () => {​​​​
      if (!document.hidden) {​​​​
          this.checkTokenAndUpdate()
      }​​​​
    }​​​​);
  }
  

    
  loadReport() {
    this.activatedRoute.params.subscribe(async params => {
      this.pages = [];
      this.isLoading = true;
      try {
        const id = params['idRep']
        const session =  this.sesionWE8.getDataUserM3SinHubM3()
        const idKatios = session.IDKATIOS.trim();
        
        const reportInfo = await this.generalService.getTemplateReport(idKatios, id) as any;
        this.reportInfo = reportInfo;
        this.reportData = JSON.parse(reportInfo.CodeHTML.trim())
        await this.loadInventoryReport();
        await this.validateRole();
        await this.loadToken();
        this.isLoading = false;
        this.embedReport();
      } catch (error) {
        this.messageService.error("Error","No se pudo cargar el reporte");
        console.error('An error occurred:', error);
      }
    }) 
  }

  refreshReport(isPaused: boolean, interval: number) {
    if(!isPaused){
      this.timerService.start(interval,() => {
        this.reportObj?.refresh()
      });
    }else{
      this.timerService.stop();
    } 
  }

  loadInventoryReport(): Promise<void> {
    return new Promise((resolve, reject) => {
      var jparams = {clientId: this.reportData.clientId
        , clientSecret: this.reportData.clientSecret , groupID: this.reportData.groupID}
      this.pbiService.getInventoryReport(jparams, this.reportData.reportId).subscribe({
        next: (report) => {
          if (report) {
            this.embedUrlApi = report.embedUrl;
            this.embedReportId = report.id;
            this.datasetWorkspaceId = report.datasetWorkspaceId;
            this.datasetId = report.datasetId;
            resolve(); 
          } else {
            this.messageService.error("Error","Reporte no encontrado");
            reject('Inventory report not found'); 
          }
        },
        error: (error) => {
          this.messageService.error("No se pudo cargar el reporte",error.message);
          reject(error); 
        }
      });
    })
  }
  

  getJwtExpiration(token: string)  {
    const payloadBase64 = token.split('.')[1]; 
    const decodedPayload = JSON.parse(atob(payloadBase64)); 
    const expSeconds = decodedPayload.exp; 
    this.expDate = new Date(expSeconds * 1000); 
    this.refreshToken();
  }

  checkTokenAndUpdate(){
    const currentTime = Date.now();
    const timeUntilExpiration = this.expDate.getTime() - currentTime;
    const timeToUpdate = this.MINUTES_BEFORE_EXPIRATION * 60 * 1000;
    console.log("EXPIRACION: ",this.expDate,currentTime)
    if (timeUntilExpiration <= timeToUpdate) {
      this.loadToken();
    }
  }

  refreshToken(): void {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
      this.tokenCheckInterval = undefined;
    }
    this.tokenCheckInterval = setInterval(() => this.checkTokenAndUpdate(), this.INTERVAL_TIME);
  }


  validateRole(): Promise<void> {
    return new Promise((resolve, reject) => {
    var jparams: any = {clientId: this.reportData.clientId,clientSecret: this.reportData.clientSecret};
    this.pbiService.getValidRole(this.reportData.groupID, this.datasetId, jparams).subscribe({
      next: (role) => {
        this.hasRole = role;
        resolve();
      },
      error: (error) =>{
          this.messageService.error("Error","Error al obtener reporte");
         console.error('Error fetching role:', error)
         reject(error);}
    });
  });
    
  }
  // Add to your existing component
  loadToken(): Promise<void> {
    const session =  this.sesionWE8.getDataUserM3SinHubM3(); 
    const perfil = session.PERFILTROS;
    const idKatios = session.IDKATIOS.trim();
    return new Promise((resolve, reject) => {
    var jparams: any = {clientId: this.reportData.clientId,clientSecret: this.reportData.clientSecret, datasetId: this.datasetId};
    if(this.hasRole){
      jparams.username = idKatios;
      jparams.role = perfil;
    }
    this.pbiService.generateToken(this.datasetWorkspaceId, this.embedReportId, jparams).subscribe({
      next: (token) => {
        this.accessToken = token;
        this.reportObj?.setAccessToken(this.accessToken);
        this.getJwtExpiration(this.accessToken);
        resolve();
        return this.accessToken;
      },
      error: (error) =>{
          this.messageService.error("Error","Error al obtener reporte");
         console.error('Error fetching token:', error)
         reject(error);}
    });
  });
  }

  async hasLayout(pages: any) {
    let mobileLayout;
    if(pages){
      mobileLayout = await pages[0].hasLayout(models.LayoutType.MobilePortrait);
      if(this.isMobile && mobileLayout){
        this.hasMobileView = true;
      }else{
        this.hasMobileView = false;
      }
    }
  }


  async embedReport(): Promise<void> {
     this.reportConfig = {
      ...this.reportConfig,
      id: this.embedReportId,
      embedUrl:this.embedUrlApi,
      accessToken: this.accessToken,
      settings: {
          panes: {
          filters: {
            visible: false
          },
          pageNavigation: {
            visible: false  
          }
        },
        layoutType: this.isMobile ? models.LayoutType.MobileLandscape : models.LayoutType.Custom
      }
    };
   
  }

  onTabChanged(event: any) {
    const currentPage = this.pages[event];
    if(currentPage){
      this.reportObj?.setPage(currentPage?.name);
    }

  }

  changeState(state: boolean){
    this.state = state;
  }
  changeView(event: any){
    let newSettings: models.ISettings;
    if(this.view.view === "Mobile" && this.hasMobileView){
      newSettings = {
          layoutType: models.LayoutType.MobilePortrait
      };
    }else{
      newSettings = {
          layoutType: models.LayoutType.MobileLandscape
      };
    }
    this.reportObj?.updateSettings(newSettings);
  
  }




  /*private applyCompanyFilter(): void {
    if(!this.reportObj) return;
    const company = 'VE'
    const filter: models.IBasicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: 'Log',
        column: 'company',
      },
      operator: 'In',
      values: [company],
      filterType: powerbi.models.FilterType.Basic,
      requireSingleSelection: true
    }
    this.reportObj.setFilters([filter])
    .then(() => console.log("Filtro aplicado correctamente"))
    .catch(error => console.error("Error al aplicar filtro: ", error))
  }*/





}