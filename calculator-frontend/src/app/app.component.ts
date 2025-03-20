import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'calculator-frontend';
}
