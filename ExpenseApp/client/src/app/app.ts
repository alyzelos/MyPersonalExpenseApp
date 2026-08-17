import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  public readonly title = signal('MyPersonalExpenseApp');
  http = inject(HttpClient);
  constructor(private httpClient: HttpClient){}
  categories: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/categories').subscribe({
      next: response => this.categories= response,
      error: error => console.log(error),
      complete: () => console.log('request has completed')
    })
  }

}
