import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule,PaginatorState } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { Slider } from 'primeng/slider';

@Component({
  selector: 'app-pagination-report',
  standalone: true,
  imports: [PaginatorModule, ButtonModule, DividerModule, Slider, FormsModule, SelectModule],
  templateUrl: './pagination-report.component.html',
  styleUrl: './pagination-report.component.scss'
})
export class PaginationReportComponent {

    first2: number = 0;

    rows2: number = 10;

    totalRecords: number = 120;

    options = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
    ];

    onPageChange2(event: PaginatorState) {
        this.first2 = event.first ?? 0;
        this.rows2 = event.rows ?? 10;

        console.log(this.first2, this.first2 + this.rows2)
    }

    
}
