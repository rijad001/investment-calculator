import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule], // Dodaj FormsModule i HttpClientModule
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css']
})

export class InvestmentFormComponent {
  investment = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/investments', this.investment)
      .subscribe(
        (response) => {
          console.log('Data sent successfuly!', response);
          alert('Data added in database!');
        },
        (error) => {
          console.error('Error!', error);
          alert('Error while sending data.');
        }
      );
  }
}