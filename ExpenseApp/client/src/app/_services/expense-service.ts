import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Expenses } from '../Interfaces/expenses';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  http = inject(HttpClient);
  expenses = signal<Expenses[]>([]);

  //section dedicated to obtaining data trough observables
  private _expenseSubject$ = new BehaviorSubject<Expenses[]>([]);
  public expensesObs$: Observable<Expenses[]> = this._expenseSubject$.asObservable();

  //method to get data from api: 
  getExpenseList(): void {
    this.http.get<Expenses[]>('https://localhost:5001/api/expenses').pipe(
      tap(response => {
        this._expenseSubject$.next(response);
        console.info('Expense data succesfully retrieved into expenseService', response);
      }),
      catchError(error => {
        console.error('Error in getExpenseList service', error);
        return of([]);
      })
    ).subscribe();
    
  }


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
