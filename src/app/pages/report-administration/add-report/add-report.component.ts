import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddStimulsfotReportComponent } from './add-stimulsfot-report/add-stimulsfot-report.component';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AddPowerbiReportComponent } from './add-powerbi-report/add-powerbi-report.component';

@Component({
  selector: 'app-add-report',
  standalone: true,
  imports: [CommonModule, FormsModule, TabsModule, ButtonModule, DialogModule, AddStimulsfotReportComponent, AddPowerbiReportComponent],
  templateUrl: './add-report.component.html',
  styleUrl: './add-report.component.scss'
})
export class AddReportComponent {
  public visible: boolean = false; 
  @Input() idKatios: string = "";
  @Output() addReport = new EventEmitter<any>();
  selectedTab: string = "STI";
  constructor() { 
  }

  showAddDialog(){
    this.visible = true;
  }
  addNewReport(){
    this.visible = false;
    this.addReport.emit();
  }
  changeTab(){
    console.log("Tab actual: ", this.selectedTab);
  }

}
