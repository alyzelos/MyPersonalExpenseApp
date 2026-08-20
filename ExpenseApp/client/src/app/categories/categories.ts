import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category-service';
import { NgFor, NgIf } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { MatDivider, MatDividerModule } from "@angular/material/divider";
import { map, Observable, tap } from 'rxjs';
import { Category } from '../Interfaces/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  imports: [MatDivider, MatDividerModule, NgIf, NgFor, AsyncPipe],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {
  public categoriesService = inject(CategoryService);
  cat = this.categoriesService.category;

  //section to retrieve observable;
  categories$: Observable<Category[]> = this.categoriesService.categories$;
    
  
  ngOnInit(): void {
    this.categoriesService.getCategory();

    //on init retrieve data trough observable:
    this.categoriesService.getCategories();
  }
}
