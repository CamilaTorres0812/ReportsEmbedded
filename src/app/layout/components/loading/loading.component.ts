import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'primeng/blockui';


@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, FormsModule,BlockUIModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  message: string = 'Procesando';
  subMessage: string = 'Espere unos momentos...';
  @Input() reportType: string = '';
  isLoading: boolean = true;
}
