import { Routes } from '@angular/router';
import { PowerBIComponent } from '../power-bi/power-bi.component';
import { LoadSTIComponent } from '../stimulsoft/load/load-sti/load-sti.component';
import { ReportAdministrationComponent } from '../report-administration/report-administration.component';

export default [
    { path: '', redirectTo: 'PBI', pathMatch: 'full' },
    { path: 'PBI', data: { breadcrumb: 'Analytics Dashboard' }, loadComponent: () => import('./analytics/dashboardanalytics').then((c) => c.DashboardAnalytics)},
    { path: 'PBI/:idRep', component: PowerBIComponent },
    { path: 'STI/:idRep', component: LoadSTIComponent },
    { path: 'reports', component: ReportAdministrationComponent }
] as Routes;
