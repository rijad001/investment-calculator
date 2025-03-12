import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Investment {
  tableID: number;
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}
  isLoading: boolean = true;

  ngOnInit() {
    this.isLoading = true;
    this.http.get('http://localhost:3000/investments').subscribe(
      (response) => {
        this.data = response;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.log('Error:', error);
      }
    );
  }

  removeInvestment(tableID: number) {
    this.http.delete(`http://localhost:3000/investments/${tableID}`).subscribe(
      () => {
        this.data = this.data.filter(
          (investment: Investment) => investment.tableID !== tableID
        );
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
