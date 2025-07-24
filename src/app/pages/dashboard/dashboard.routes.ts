import { Routes } from '@angular/router';
import { PowerBIComponent } from '../power-bi/power-bi.component';
import { LoadSTIComponent } from '../stimulsoft/load/load-sti/load-sti.component';
import { ReportAdministrationComponent } from '../report-administration/report-administration.component';
import { HomeComponent } from '../home/home.component';
import { tokenGuard} from 'src/guards/token.guard';

export default [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'PBI/:idRep', component: PowerBIComponent },
    { path: 'PBI/:idRep/:idKatios/:token', component: PowerBIComponent, canActivate: [tokenGuard] },
    { path: 'STI/:idRep', component: LoadSTIComponent },
    { path: 'STI/:idRep/:idKatios/:token', component: LoadSTIComponent, canActivate: [tokenGuard] },
    { path: 'reports', component: ReportAdministrationComponent }
] as Routes;
