import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { StoredProcedure } from 'src/model/SPReportes';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-sp-list',
  standalone: true,
  imports: [CommonModule,FormsModule,MultiSelectModule, MessageModule],
  templateUrl: './sp-list.component.html',
  styleUrl: './sp-list.component.scss'
})
export class SPListComponent implements OnInit {
  storedProcedures:  Array<StoredProcedure> = [];
  @Input() idKatios: string = "";
  @Input() inputStored: string = "";
  @Input() showError: any;
  selectStoreProcedures: Array<StoredProcedure> = [];
  @Output() storedSeleccionado = new EventEmitter<any>();
 
  constructor(private generalService: GeneralService) { 
  }
  ngOnInit(): void {
    let data = { "tipo": "BI" };
    this.generalService.getSPReports(this.idKatios, data).then((resp:any) => {
      if (resp.RESPUESTA) {
        if (resp.RESPUESTA.Stored.length) {
          this.storedProcedures = resp.RESPUESTA.Stored;
        }
        else {
          this.storedProcedures = new Array<any>(resp.RESPUESTA.Stored);
        }
        if (this.inputStored) {
          console.log(this.inputStored)
          this.selectStoreProcedures = [];
          for (const stored of this.inputStored.split(",")) {
            const sp = this.storedProcedures.find(x => x.Nombre == stored);
            if(sp){
              this.selectStoreProcedures.push(sp);
            }
          }
          this.storedChange();
        }
      }
    }).catch();
  }
  storedChange() {
    console.log(this.selectStoreProcedures);
    this.storedSeleccionado.emit(this.selectStoreProcedures);
  }
}
