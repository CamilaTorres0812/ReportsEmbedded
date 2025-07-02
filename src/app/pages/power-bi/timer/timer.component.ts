import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { PopoverModule } from 'primeng/popover';
import { TagModule } from 'primeng/tag';
import { TimerService } from 'src/services/timer.service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule,PopoverModule,PanelModule,TagModule,InputGroupModule,InputGroupAddonModule,InputNumberModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit{
  timerValue: number = 120;
  reproduce: boolean = false;
  message: string = '';
  @Output() changeState = new EventEmitter<any>();

  ngOnInit(): void {
    this.timerService.message$.subscribe(msg => this.message = msg);
  }

  constructor(private timerService: TimerService) {}
  cambiarBoton(){
        this.reproduce = !this.reproduce;
        this.changeState.emit(this.reproduce);
        if(this.reproduce){
          this.guardartimer();
        } else{
          this.pausartimer();
        }
    }

    guardartimer(){
        this.timerValue = this.timerValue < 120 ? 120 : this.timerValue;
        let time = this.timerValue * 1000;
        
        this.timerService.setRefreshInterval(false, time);
    
    }

    pausartimer(){
        let time = this.timerValue * 1000;
        this.timerService.setRefreshInterval(true, time);
    }

    

}
