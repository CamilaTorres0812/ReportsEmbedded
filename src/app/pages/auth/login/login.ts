import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { AppConfigurator } from '@/layout/components/app.configurator';
import { MessageService } from 'primeng/api';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { PersonasService } from 'src/services/personas.service';
import { SesionWe8Service } from 'src/services/sesion-we8.service';
import { environment } from 'src/enviroments/enviroment';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [MessageService],
    imports: [
      ButtonModule, 
      CheckboxModule, 
      InputTextModule, 
      FormsModule, 
      RouterModule, 
      RippleModule, 
      InputIcon, 
      IconField, 
      AppConfigurator,
      ReactiveFormsModule,
      InputGroupModule,
      InputGroupAddonModule,
      FloatLabelModule,
      CardModule,
      CommonModule,
    MessageModule]

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
    private route: ActivatedRoute
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

  ngOnInit(): void {
    const idKatiosUrl = this.route.snapshot.paramMap.get('idKatios');
    const tokenUrl = this.route.snapshot.paramMap.get('token');
    if(idKatiosUrl && tokenUrl){
      this.loginWithToken(idKatiosUrl,tokenUrl);
    } 
  }

  login() {
    this.loading = true;
    this.personasService.loginTCI(this.loginKatiosForm.value.idKatios, this.loginKatiosForm.value)
      .subscribe(res => {
        this.sessionService.setDataUserM3SinHubM3(res);
        this.router.navigateByUrl('/admin');
        this.cargaInicial();
      }, err => {
        if(err.status === 400){
          this.invalidCredentials = true;
        }
        console.error(err);
        this.loading = false;
      });
  }

  public cargaInicial() {
    let json = environment;
    let sConfigJSON = sessionStorage.getItem("ConfigJSON");
    if (sConfigJSON) {
        let jConfigJSON = JSON.parse(sConfigJSON);
        if (jConfigJSON.ServidorPersonas) json = jConfigJSON;
    } else sessionStorage.setItem("ConfigJSON", JSON.stringify(json))
  }

  loginWithToken(idKatios: string, token: string){
    this.personasService.loginTCIToken(idKatios, token)
      .subscribe(
        res => {
          this.sessionService.setDataUserM3SinHubM3(res);
          this.router.navigateByUrl('/admin');
        },
        err => {
          console.error(err);
        }
      );
  }
}
