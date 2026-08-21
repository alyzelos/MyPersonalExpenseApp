import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { AsyncPipe, NgFor, NgIf, NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCard, MatCardHeader, MatCardModule } from "@angular/material/card";
import { Expenses } from '../Interfaces/expenses';
import { ExpenseService } from '../_services/expense-service';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-expense-list',
  imports: [MatCard, MatCardHeader, MatCardModule, MatDividerModule, MatDivider, NgIf, NgFor, AsyncPipe],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList implements OnInit {
  private http = inject(HttpClient);
  expenseService = inject(ExpenseService);
  // expense = signal<Expenses | null>(null);
  expense = this.expenseService.expenses;

  expenseList$: Observable<Expenses[]> = this.expenseService.expensesObs$;
  
  ngOnInit() {
    this.expenseService.getExpenses();
    this.expenseService.getExpenseList();
  }
}