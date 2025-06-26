import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Embed, IReportEmbedConfiguration, service } from 'powerbi-client';
import * as pbi from 'powerbi-client';
import { PowerBIEmbedModule, PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import { IHttpPostMessageResponse } from 'http-post-message';
import 'powerbi-report-authoring';
import { Subscription } from 'rxjs';
import { PbiService } from 'src/services/pbi.service';
import { SesionWe8Service } from 'src/services/sesion-we8.service';
import { GeneralService } from 'src/services/general.service';
import { TimerService } from 'src/services/timer.service';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '@/layout/components/menu-item/menu-item.component';
import * as models from 'powerbi-models';
import { AppBreadcrumb } from '@/layout/components/app.breadcrumb';
import { BlockUIModule } from 'primeng/blockui';

export interface ConfigResponse {
  Id: string;
  EmbedUrl: string;
  EmbedToken: {
    Token: string;
  };
}
@Component({
  selector: 'app-power-bi',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, RouterModule, PowerBIEmbedModule, AppBreadcrumb,BlockUIModule],
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.css']
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
  private refreshTimer?: Subscription;
  private reportObj: pbi.Report | null = null;
  hasRole: boolean = false;
  public isLoading: boolean = false;
  expDate!: Date;
  reportData: any;
  MINUTES_BEFORE_EXPIRATION = 10;
  INTERVAL_TIME = 30000;
  private tokenCheckInterval?: any;
  eventHandlersMap = new Map ([
    ['loaded', () => {
      this.reportObj = this.powerBIReportComponent.getReport();
      this.reportObj?.setAccessToken(this.accessToken);
      console.log('Report has loaded', event);
      },
    ],
    ['rendered', () => {
      console.log('Report has rendered')
    }],
    ['error', (event?: service.ICustomEvent<any>) => {
        if (event) {
          console.error(event.detail);
        }
        if (event && event.detail && event.detail.message?.includes('TokenExpired')) {
          console.log("EXPIRO", event.detail)
        }
      },
    ],
    ['visualClicked', () => console.log('visual clicked')],
    ['pageChanged', (event) => console.log(event)],
  ]) as Map<string, (event?: service.ICustomEvent<any>, embeddedEntity?: Embed) => void | null>;


  constructor(
    private router: Router, private pbiService: PbiService, private sesionWE8: SesionWe8Service, private generalService: GeneralService,
     private activatedRoute: ActivatedRoute, private timerService: TimerService
  ) {}

ngOnDestroy(): void {
  if (this.tokenCheckInterval) {
    clearInterval(this.tokenCheckInterval);
    this.tokenCheckInterval = undefined;
  }
}
  async ngOnInit() {
    this.loadReport();
    this.timerService.refreshState$.subscribe(({ isPaused, interval }) => {
    this.refreshReport(isPaused, interval);
    });
  }
  

    
  loadReport() {
    this.isLoading = true;
    this.activatedRoute.params.subscribe(async params => {
        try {
        const id = params['idRep']
        const session =  this.sesionWE8.getDataUserM3SinHubM3()
        const idKatios = session.IDKATIOS.trim();
        const reportInfo = await this.generalService.getTemplateReport(idKatios, id) as any;
        this.reportData = JSON.parse(reportInfo.CodeHTML.trim())
        await this.loadInventoryReport();
        await this.loadAccessTokens();
        await this.validateRole();
        await this.loadToken();
        this.isLoading = false;
        this.embedReport();
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }) 
  }

  refreshReport(isPaused: boolean, interval: number) {
    if(!isPaused){
      this.timerService.start(() => {
        this.reportObj!.refresh()
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
            console.log(report)
            this.embedUrlApi = report.embedUrl;
            this.embedReportId = report.id;
            this.datasetWorkspaceId = report.datasetWorkspaceId;
            this.datasetId = report.datasetId;
            resolve(); 
          } else {
            console.error('Inventory report not found');
            reject('Inventory report not found'); 
          }
        },
        error: (error) => {
          console.error('Error fetching reports:', error);
          reject(error); 
        }
      });
    })
  }
  
  // Adjust loadAccessTokens to return a Promise
  loadAccessTokens(): Promise<void> {
    return new Promise((resolve, reject) => {
      var jparams = {clientId: this.reportData.clientId,clientSecret: this.reportData.clientSecret }
      this.pbiService.getToken(jparams).subscribe({
        next: (token) => {
          this.accessToken = token;
          resolve(); // Resolve the promise when the token is loaded
        },
        error: (error) => {
          console.error('Error fetching access token:', error);
          reject(error); // Reject the promise on error
        }
      });
    });
  }

  getJwtExpiration(token: string)  {

    const payloadBase64 = token.split('.')[1]; 
    const decodedPayload = JSON.parse(atob(payloadBase64)); 
    const expSeconds = decodedPayload.exp; 

    this.expDate = new Date(expSeconds * 1000); 
    //this.refreshToken();
    console.log("EXP DATE: ",this.expDate)
  }

  refreshToken(): void {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
      this.tokenCheckInterval = undefined;
    }
    this.tokenCheckInterval = setInterval(() => {
      const currentTime = Date.now();
      const timeUntilExpiration = this.expDate.getTime() - currentTime;
      const timeToUpdate = this.MINUTES_BEFORE_EXPIRATION * 60 * 1000;
      console.log("tiempo restante: ", timeToUpdate)
      if (timeUntilExpiration <= timeToUpdate) {
        console.log("Updating report access token");
        this.loadToken();
      }
    }, this.INTERVAL_TIME);
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
      jparams.role = 'BOS';
    }
    this.pbiService.generateToken(this.datasetWorkspaceId, this.embedReportId, jparams).subscribe({
      next: (token) => {
        this.accessToken = token;
        console.log("NUEVO TOKEN: ", this.accessToken)
        this.getJwtExpiration(this.accessToken);
        console.log("REPORT OBJ: ", this.reportObj)
        resolve();
      },
      error: (error) =>{
         console.error('Error fetching token:', error)
         reject(error);}
    });
  });
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
          }
        }
      }
    };
    this.isEmbedded = true;
  }

  private applyCompanyFilter(): void {
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
      filterType: pbi.models.FilterType.Basic,
      requireSingleSelection: true
    }
    this.reportObj.setFilters([filter])
    .then(() => console.log("Filtro aplicado correctamente"))
    .catch(error => console.error("Error al aplicar filtro: ", error))
  }


}