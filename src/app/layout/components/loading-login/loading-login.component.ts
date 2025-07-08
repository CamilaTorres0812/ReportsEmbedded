import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlockUIModule } from 'primeng/blockui';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-loading-login',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    BlockUIModule
  ],
  templateUrl: './loading-login.component.html',
  styleUrl: './loading-login.component.scss'
})
export class LoadingLoginComponent {

}
