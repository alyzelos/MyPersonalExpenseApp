import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Expenses } from '../Interfaces/expenses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  http = inject(HttpClient);
  expenses = signal<Expenses[]>([]);

  getExpenses(): void {
    this.http.get<Expenses[]>('https://localhost:5001/api/expenses').subscribe({
      next: (response) => {
        this.expenses.set(response);
        console.log('Data succesfully saved in service', this.expenses)
      },
      error: error => console.log('smth went wrong in the expense-service method getExpenses' + error),
    })
  }
}
