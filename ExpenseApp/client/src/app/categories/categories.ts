import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {
  http = inject(HttpClient);
  categories: any;
  
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/categories').subscribe({
      next: response => this.categories = response,
      error: error => console.log(error),
      complete: () => console.info('request has completed')
    })
  }

}
