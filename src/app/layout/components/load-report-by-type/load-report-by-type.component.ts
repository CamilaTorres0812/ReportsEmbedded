
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { AppRightMenu } from '@/layout/components/app.rightmenu';
import { Toast } from 'primeng/toast';
import { AppBreadcrumb } from '../app.breadcrumb';
import { filter } from 'rxjs';

@Component({
  selector: 'app-load-report-by-type',
  standalone: true,
  imports: [CommonModule, RouterModule,  AppBreadcrumb, AppRightMenu, Toast, LoadReportByTypeComponent],
  templateUrl: './load-report-by-type.component.html',
  styleUrl: './load-report-by-type.component.scss'
})
export class LoadReportByTypeComponent {
}
