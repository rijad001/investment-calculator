import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { Investment } from "../investment.model";


@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent  {
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

  deleteInvestment(id: number) {
    this.http.delete(`http://localhost:3000/investments/${id}`).subscribe(
      () => {
        this.data = this.data.filter(
          (investment: Investment) => investment.tableID !== id
        );
      },
      (error) => {
        console.log('Error deleting investment:', error);
      }
    );
  }

  
}
