import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { AppConfigurator } from '@/layout/components/app.configurator';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { PersonasService } from 'src/services/personas.service';
import { SesionWe8Service } from 'src/services/sesion-we8.service';
import { environment } from 'src/enviroments/enviroment';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
import { LoadingComponent } from '@/layout/components/loading/loading.component';
import { MessageReportService } from 'src/services/message-report.service';
import { MessageService } from 'primeng/api';
import { LoadingLoginComponent } from '@/layout/components/loading-login/loading-login.component';
import { AuthService } from 'src/services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [
      ButtonModule, 
      InputTextModule, 
      FormsModule, 
      RouterModule, 
      InputIcon, 
      IconField, 
      AppConfigurator,
      ReactiveFormsModule,
      InputGroupModule,
      InputGroupAddonModule,
      FloatLabelModule,
      CardModule,
      CommonModule,
      MessageModule,
      LoadingLoginComponent],
    providers: [MessageReportService,MessageService]

})
export class Login {
  public loginKatiosForm: FormGroup;
  public showPass: boolean;
  public typePass: string;
  public typeTRX: number;
  public usuarioLogueadoBD: any;
  invalidCredentials: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private personasService: PersonasService,
    private sessionService: SesionWe8Service,
    private route: ActivatedRoute,
    private messageService: MessageReportService,
    private authService: AuthService
  ) {
    this.typeTRX = 1;
    this.showPass = false;
    this.typePass = 'password';
    this.loginKatiosForm = this.fb.group({
      idKatios: ['', Validators.required],
      User: ['', Validators.required],
      Pass: ['', Validators.required],
      TipoAuth: [this.typeTRX]
    });
  }
  loading: boolean = false;
  loadingWithToken: boolean = false;
  ngOnInit(): void {
    if(sessionStorage.getItem(('authType')) === 'token'){
      this.loadingWithToken = true;
      this.router.navigate(['/admin']);
    }
  }
  login() {
    this.loading = true;
    this.personasService.loginTCI(this.loginKatiosForm.value.idKatios, this.loginKatiosForm.value)
      .subscribe(res => {
        this.sessionService.setDataUserM3SinHubM3(res);
        sessionStorage.setItem('authType', 'manual');
        this.router.navigateByUrl('/admin');
      }, err => {
        if(err.status === 400){
          this.invalidCredentials = true;
        }else{
          this.messageService.error("Error","No se pudo iniciar sesión")
        }
        console.error(err);
        this.loading = false;
      });
  }
}
