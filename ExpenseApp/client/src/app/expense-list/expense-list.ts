import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-expense-list',
  imports: [RouterOutlet, NgFor, NavigationBar],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList implements OnInit {
  http = inject(HttpClient);
  categories: any;
  
  ngOnInit(): void {
     this.http.get('https://localhost:5001/api/categories').subscribe({
      next: response => this.categories= response,
      error: error => console.log(error),
      complete: () => console.log('request has completed')
    })
  }
}