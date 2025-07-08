import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {StyleClassModule} from 'primeng/styleclass';
import {LayoutService} from '@/layout/service/layout.service';
import {Ripple} from 'primeng/ripple';
import {InputText} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {BadgeModule} from 'primeng/badge';
import {OverlayBadge} from 'primeng/overlaybadge';
import { PersonasService } from 'src/services/personas.service';
import { SesionWe8Service } from 'src/services/sesion-we8.service';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { PopoverModule } from 'primeng/popover';
import { ToastModule } from 'primeng/toast';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Avatar } from 'primeng/avatar';
@Component({
  selector: '[app-topbar]',
  standalone: true,
  imports: [
    RouterModule, 
    CommonModule, 
    StyleClassModule,
    FormsModule, 
    Ripple, 
    InputText, 
    ButtonModule, 
    BadgeModule, 
    OverlayBadge, 
    InputGroupModule,
    InputGroupAddonModule,
    InputNumberModule,
    PopoverModule,
    ToastModule,
    IconFieldModule,
    InputIconModule,
    IftaLabelModule, Avatar],
  template: `<div class="layout-topbar-start">
    <div class="layout-topbar-logo">
        <img id="app-logo" [src]="imageUrl" alt="ultima-layout" style="height: 2.25rem">
    </div>
    <a #menuButton class="layout-menu-button" (click)="onMenuButtonClick()">
        <i class="pi pi-chevron-right"></i>
    </a>

    <a #mobileMenuButton class="layout-topbar-mobile-button" (click)="onTopbarMenuToggle()">
        <i class="pi pi-ellipsis-v"></i>
    </a>
    </div>

    <div class="layout-topbar-end text-center">
    <p class="mx-auto">Versión: 25.07.08.0</p>
    <div class="layout-topbar-actions-end">
        <ul class="layout-topbar-items">
            <li>
                <a pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                    <p-avatar [label]="label" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" shape="circle" />
                </a>
                <div class="hidden" *ngIf="!isTokenLogin">
                    <ul class="list-none p-0 m-0">
                        <li (click) = "finSesion()">
                            <a class="cursor-pointer flex items-center hover:bg-emphasis duration-150 transition-all px-4 py-2" pRipple>
                                <i class="pi pi-power-off mr-2"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>`,
  styleUrl: './topbar.component.css',
  host: {
        class: 'layout-topbar'
    }
})
export class TopbarComponent {
  idKatios: string = '';
  imageUrl: string = '';
  timerValue: number = 120;
  usuarioSesion: any;
  activeItem: number;
  reproduce: boolean = false;
  message: string = '';
  isVisible: boolean = false;
  layoutService = inject(LayoutService);
  label: string = '';
  isTokenLogin: boolean = false;

    @ViewChild('menuButton') menuButton!: ElementRef<HTMLButtonElement>;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef<HTMLButtonElement>;

    constructor(private personasService: PersonasService,private sesionWE8: SesionWe8Service) {
    this.activeItem = -1;

  }

    ngOnInit(): void {
        this.usuarioSesion = this.sesionWE8.getDataUserM3SinHubM3();
        this.idKatios = this.usuarioSesion.IDKATIOS.trim();
        this.isTokenLogin = sessionStorage.getItem('authType') === 'token';
        this.imageUrl = `https://nukak.tecfinanzas.com/Storage/Images/${this.idKatios}/logo.png`;
        this.label = this.usuarioSesion.NDOC[0].toUpperCase();
    }

    finSesion(){
    this.personasService.cerrarSesion();
  }


  onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }


    onTopbarMenuToggle() {
        this.layoutService.layoutState.update((val) => ({ ...val, topbarMenuActive: !val.topbarMenuActive }));
    }


}


