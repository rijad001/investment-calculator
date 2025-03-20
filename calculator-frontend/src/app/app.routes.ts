import { Routes } from '@angular/router';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';
import { TablesComponent } from './components/tables/tables.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/investment-form', pathMatch: 'full' }, // Podrazumevana ruta
  { path: 'investment-form', component: InvestmentFormComponent },
  { path: 'investments', component: TablesComponent },
  { path: 'login', component: LoginFormComponent },
];
