import { Routes } from '@angular/router';
import { PowerBIComponent } from '../power-bi/power-bi.component';
import { LoadSTIComponent } from '../stimulsoft/load/load-sti/load-sti.component';
import { ReportAdministrationComponent } from '../report-administration/report-administration.component';
import { HomeComponent } from '../home/home.component';

export default [
    { path: '', redirectTo: 'PBI', pathMatch: 'full' },
    { path: 'PBI', component: HomeComponent},
    { path: 'PBI/:idRep', component: PowerBIComponent },
    { path: 'STI/:idRep', component: LoadSTIComponent },
    { path: 'reports', component: ReportAdministrationComponent }
] as Routes;
