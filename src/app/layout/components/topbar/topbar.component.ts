import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {StyleClassModule} from 'primeng/styleclass';
import {LayoutService} from '@/layout/service/layout.service';
import {Ripple} from 'primeng/ripple';
import {InputText} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {MegaMenuModule} from 'primeng/megamenu';
import {BadgeModule} from 'primeng/badge';
import {OverlayBadge} from 'primeng/overlaybadge';
import { PersonasService } from 'src/services/personas.service';
import { SesionWe8Service } from 'src/services/sesion-we8.service';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { TimerService } from 'src/services/timer.service';
import { TooltipModule } from 'primeng/tooltip';
import { Popover, PopoverModule } from 'primeng/popover';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { IftaLabelModule } from 'primeng/iftalabel';
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
    IftaLabelModule],
  template: `<div class="layout-topbar-start">
    <a class="layout-topbar-logo" routerLink="/">
        <img id="app-logo" [src]="imageUrl" alt="ultima-layout" style="height: 2.25rem">
    </a>
    <a #menuButton class="layout-menu-button" (click)="onMenuButtonClick()">
        <i class="pi pi-chevron-right"></i>
    </a>

    <a #mobileMenuButton class="layout-topbar-mobile-button" (click)="onTopbarMenuToggle()">
        <i class="pi pi-ellipsis-v"></i>
    </a>
    </div>

    <div class="layout-topbar-end">
    <div class="layout-topbar-actions-start">
        <div class="flex flex-row items-center justify-between p-3 gap-1">
            <label for="timer">Tiempo (seg):</label>
            <input
            class="text-base text-color surface-overlay p-2 border-round appearance-none outline-none w-6rem"
            pInputText
            type="number"
            [(ngModel)]="timerValue"
            min="60"
        />
            <p-button  [icon]="reproduce ? 'pi pi-pause' : 'pi pi-play'" [severity]="reproduce ? 'danger' : 'success'" (click)="cambiarBoton()"/>
            <button  class="app-config-button" [ngStyle]="{ visibility: reproduce ? 'visible' : 'hidden' }" (click)="op.toggle($event)">
                    <i class="pi pi-clock"></i>
            </button>
            <p-popover #op>
                <span>{{message}}</span>
            </p-popover>
        </div>
    </div>
    <p>Versión: 25.06.12.0</p>
    <div class="layout-topbar-actions-end">
        <ul class="layout-topbar-items">
            <li>
                <a pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                    <img src="./images/avatar/icons8-male-user-48.png" alt="avatar" class="w-12 h-10" />
                </a>
                <div class="hidden">
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
  timerValue: number = 60;
  usuarioSesion: any;
  activeItem: number;
  reproduce: boolean = false;
  message: string = '';
  isVisible: boolean = false;
  layoutService = inject(LayoutService);

    @ViewChild('menuButton') menuButton!: ElementRef<HTMLButtonElement>;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef<HTMLButtonElement>;

    constructor(private personasService: PersonasService,private sesionWE8: SesionWe8Service,private timerService: TimerService, private messageService: MessageService) {
    this.activeItem = -1;

  }

    ngOnInit(): void {
        this.usuarioSesion = this.sesionWE8.getDataUserM3SinHubM3();
        this.idKatios = this.usuarioSesion.IDKATIOS.trim();
        this.imageUrl = `https://nukak.tecfinanzas.com/Storage/Images/${this.idKatios}/logo.png`;
        this.timerService.message$.subscribe(msg => this.message = msg);
    }

    cambiarBoton(){
        this.reproduce = !this.reproduce;
        if(this.reproduce){
        this.guardartimer();
        } else{
        this.pausartimer();
        }
    }

    guardartimer(){
        this.timerValue = this.timerValue < 60 ? 60 : this.timerValue;
        let time = this.timerValue * 1000;
        
        this.timerService.setRefreshInterval(false, time);
    
    }

    pausartimer(){
        let time = this.timerValue * 1000;
        this.timerService.setRefreshInterval(true, time);
    }


    finSesion(){
    this.personasService.cerrarSesion();
  }
  mostrarMensaje(event:any, op: Popover){
    const actual = this.timerService.getElapsedSeconds();
    this.message = `Han pasado ${actual} s`
    op.toggle(event);
  }

  onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }


    onTopbarMenuToggle() {
        this.layoutService.layoutState.update((val) => ({ ...val, topbarMenuActive: !val.topbarMenuActive }));
    }

}


