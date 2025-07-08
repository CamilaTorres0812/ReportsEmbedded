import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneralService } from 'src/services/general.service';
import { SesionWe8Service } from 'src/services/sesion-we8.service';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu, [app-menu]',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  el: ElementRef = inject(ElementRef);
  @ViewChild('menuContainer') menuContainer!: ElementRef;
  model: any[] = [];
  usuarioSesion: any;
  idKatios: string = '';
  perfil: string = '';
  menuOptions: any;

  constructor(
    private sesionWE8: SesionWe8Service,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {
    this.usuarioSesion = this.sesionWE8.getDataUserM3SinHubM3();
    this.idKatios = this.usuarioSesion.IDKATIOS.trim();
    this.perfil = this.usuarioSesion.PERMENU;

    this.generalService.getMenu(this.idKatios, this.perfil).then((data: any) => {
      this.model = data;
    });


  }
}
