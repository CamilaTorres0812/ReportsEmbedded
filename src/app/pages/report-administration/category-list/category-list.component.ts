import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,FormsModule,SelectModule, CategoryListComponent,MessageModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnChanges {
  @Input() hijos: Array<any> =[];
  @Input() showError: any;
  @Input() inputSeleccionados: Array<any> = [];
  @Output() emitirListaCategorias = new EventEmitter<Array<any>>();
  hijoSeleccionado: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const hijosListos = this.hijos && Array.isArray(this.hijos) && this.hijos.length > 0;
    const seleccionadosListos = this.inputSeleccionados && this.inputSeleccionados.length > 0;

    if (hijosListos && seleccionadosListos) {
      const descripcion = this.inputSeleccionados[0]; 
      this.hijoSeleccionado = this.hijos.find(x => x.DESCRIPCION === descripcion?.Valor);
      this.hijoSeleccionadoEvent();
    }
  }

  hijoSeleccionadoEvent() {
    let listaCategorias = new Array<any>();
    listaCategorias.push(this.hijoSeleccionado);
    this.emitirListaCategorias.emit(listaCategorias);
  }
  hijoEmitido(listaHijosSeleccionados: any) {
    listaHijosSeleccionados.unshift(this.hijoSeleccionado);
    this.emitirListaCategorias.emit(listaHijosSeleccionados);
  }
  
}
