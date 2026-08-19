import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCard, MatCardHeader, MatCardModule } from "@angular/material/card";
import { Expenses } from '../Interfaces/expenses';
import { ExpenseService } from '../_services/expense-service';

@Component({
  selector: 'app-expense-list',
  imports: [RouterOutlet, NgFor, NavigationBar, MatCard, MatCardHeader, MatCardModule],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList implements OnInit {
  http = inject(HttpClient);
  expenseService = inject(ExpenseService);
  // expense = signal<Expenses | null>(null);
  expense: any;
  
  ngOnInit(): void {
    this.expense = this.expenseService.getExpenses();
    console.log('===> expense-list component => result of ngOnInit');
  }


 
  

}