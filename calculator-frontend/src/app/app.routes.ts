import { Routes } from '@angular/router';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';
import { TablesComponent } from './components/tables/tables.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/investment-form', pathMatch: 'full' }, // Podrazumevana ruta
  { path: 'investment-form', component: InvestmentFormComponent,canActivate: [AuthGuard] },
  { path: 'investments', component: TablesComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent },
  {path: 'register', component: RegisterComponent},
];
