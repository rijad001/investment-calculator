import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../investment.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-form',
  imports: [FormsModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css',
})
export class UpdateFormComponent implements OnInit {
  investment: any = {
    tableID: 0,
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Dobijte id iz URL-a
    if (id) {
      this.investment.tableID = +id; // Pretvorite string u broj
      this.http
        .get(`http://localhost:3000/investments/${id}`)
        .subscribe((data: any) => {
          this.investment = data; // Postavite podatke u formu
        });
    }
  }

  onSubmit(): void {
    const id = this.investment.tableID;
    this.http
      .put(`http://localhost:3000/investments/${id}`, this.investment)
      .subscribe(
        (response) => {
          console.log('Investment updated:', response);
          alert('Investment updated successfully!');
        },
        (error) => {
          console.error('Error updating investment:', error);
        }
      );
  }
}
