import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InvestmentFormComponent } from "./investment-form/investment-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvestmentFormComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator-frontend';
}
