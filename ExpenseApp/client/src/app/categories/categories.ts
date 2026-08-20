import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category-service';
import { NgIf } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { MatDivider, MatDividerModule } from "@angular/material/divider";
import { map, Observable, tap } from 'rxjs';
import { Category } from '../Interfaces/category';

@Component({
  selector: 'app-categories',
  imports: [NgIf, AsyncPipe, MatDivider, MatDividerModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {
  public http = inject(HttpClient);
  public categoriesService = inject(CategoryService);
  categories: any;
  category$! : Observable<Category>;
  data$ = this.categoriesService.data$;
  cat = this.categoriesService.category;
    
  
  ngOnInit(): void {
    this.categoriesService.getCategory();
    // section to show observable of category
    this.category$ = this.categoriesService.getCategories();
    // .pipe(
    //   tap(response => console.info('categories data: ', response))
    // );
    


    // section to show signal of category
    this.http.get('https://localhost:5001/api/categories').subscribe({
      next: response => this.categories = response,
      error: error => console.log(error),
      complete: () => console.info('signal request has completed')
    })
  }

}
