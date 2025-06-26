import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-parametros',
  standalone: true,
  imports: [CommonModule,DropdownModule, FormsModule, SelectModule],
  templateUrl: './parametros.component.html',
  styleUrl: './parametros.component.scss'
})
export class ParametrosComponent {
  @Input() aplicaIdKatios: any;
  @Input() bPermiteModificar: boolean = true;
  @Input() grupo: string = '';
  @Input() idkatios: string = '';
  @Input() valorSeleccionado: any;
  @Output() selectedValue = new EventEmitter<any>();
  public oParametros: any[] = [];
  public opcionSeleccionada: any;

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.cargarParametros()
  }

  ngOnChanges(): void {
    if (this.valorSeleccionado && this.oParametros) this.opcionSeleccionada = this.oParametros.find((x: any) => x.Nivel == this.valorSeleccionado || x.Descripcion == this.valorSeleccionado)
  }

  cargarParametros() {
    this.generalService.getTblParametros(this.idkatios.trim(), this.aplicaIdKatios, this.grupo)
      .then(res => {
        if (!Array.isArray(res.TBLParametros)) res.TBLParametros = [res.TBLParametros]
        this.oParametros = res.TBLParametros;
        if (this.oParametros && this.valorSeleccionado) this.opcionSeleccionada = this.oParametros.find((x: any) => x.Nivel == this.valorSeleccionado || x.Descripcion == this.valorSeleccionado)
      })
  }

  selectValue(iValor: any) {
    this.opcionSeleccionada = iValor.value
    this.selectedValue.emit(this.opcionSeleccionada)
  }
}
