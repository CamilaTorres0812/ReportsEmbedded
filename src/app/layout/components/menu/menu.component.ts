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
      this.recursivaMenu(this.model);
      const lastItem = this.model[this.model.length-1];
      const categoria = Number(lastItem.Categoria2) + 1;
      const categoriaString = categoria <= 9 ? categoria.toString().padStart(2, '0') : categoria.toString();
      const id = lastItem.Categoria1 + categoriaString + lastItem.Categoria3 + lastItem.Categoria4 + lastItem.Categoria5;
      const idElemento = "CONFIGURACIÓN";
      const key = "CONFIGURACIÓN";
      const label = "CONFIGURACIÓN";
      const items = [{
        Categoria1: lastItem.Categoria1,
        Categoria2: "02",
        Categoria3: "01",
        Categoria4: "00",
        Categoria5: "00",
        ID: lastItem.Categoria1 + "02"+"01"+"00"+"00",
        IDElemento: "CONFIGURAR",
        KEY: "CONFIGURAR",
        LINK: "../SiteN/RedirectWE8.aspx?Componente=/admin/reports",
        icon: "pi pi-file-check",
        label: "CONFIGURAR REPORTES"
      }];
      this.model.push({
        Categoria1: lastItem.Categoria1,
        Categoria2: categoriaString,
        Categoria3: lastItem.Categoria3,
        Categoria4: lastItem.Categoria4,
        Categoria5: lastItem.Categoria5,
        ID: id,
        IDElemento: idElemento,
        KEY: key,
        LINK: "",
        icon: "pi pi-cog",
        items: items,
        label: label
      });
    });

   

  }

  recursivaMenu(opcion: any) {
    if (opcion !== undefined && opcion != null) {
      if (opcion.length === undefined && opcion.items !== undefined && opcion.items !== null && opcion.items.length === undefined) {
        opcion.items = new Array<any>(opcion.items);
      } else {
        if (opcion.length !== undefined) {
          for (let i = 0; i < opcion.length; i++) {
            this.recursivaMenu(opcion[i]);
          }
        } else {
          if (opcion.items !== undefined && opcion.items.length !== undefined) {
            for (let i = 0; i < opcion.items.length; i++) {
              this.recursivaMenu(opcion.items[i]);
            }
          }
        }
      }
    }
  }


  private buildMenuItem(opcionNode: any): any {
    const attrs = opcionNode['@attributes'] || {};
    const rawLink = attrs.LINK || '';
    const routerLink = rawLink.replace('../SiteN/RedirectWE8.aspx?Componente=/admin', '');

    const item: any = {
      label: attrs.DESCRIPCION || '(Sin descripción)',
      icon: attrs.icon || '',
      routerLink: routerLink.startsWith('/') ? routerLink : routerLink ? [routerLink] : []
    };

    const children = opcionNode.OPCION;
    if (children) {
      const childrenArray = Array.isArray(children) ? children : [children];
      item.items = childrenArray.map(child => this.buildMenuItem(child));
    }

    return item;
  }

  xmlToJson(xml: any): any {
    let obj: any = {};

    if (xml.nodeType === 1) { // element node
      if (xml.attributes && xml.attributes.length > 0) {
        obj['@attributes'] = {};
        for (let j = 0; j < xml.attributes.length; j++) {
          const attribute = xml.attributes.item(j);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) {
      obj = xml.nodeValue;
    }

    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;
        if (typeof (obj[nodeName]) === 'undefined') {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (!Array.isArray(obj[nodeName])) {
            const old = obj[nodeName];
            obj[nodeName] = [old];
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }
}
