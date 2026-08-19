import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Expenses } from '../Interfaces/expenses';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  http = inject(HttpClient);
  expenses: any;

  getExpenses (){
    this.http.get('https://localhost:5001/api/categories').subscribe({
      next: response => this.expenses = response,
      error: error => console.log('smth went wrong in the expense-service method getExpenses' + error),
      complete: () => console.info('getExpenses request completed')
    })
  }
}
