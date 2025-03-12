import { Routes } from '@angular/router';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { TablesComponent } from './tables/tables.component';

export const routes: Routes = [
  { path: '', redirectTo: '/investment-form', pathMatch: 'full' }, // Podrazumevana ruta
  { path: 'investment-form', component: InvestmentFormComponent },
  { path: 'tables', component: TablesComponent },
];
