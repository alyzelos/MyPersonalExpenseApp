import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../Interfaces/category';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public http = inject(HttpClient);
  category = signal<Category[]>([]);
  private dataSubject = new BehaviorSubject<Category | null>(null);
  data$ = this.dataSubject.asObservable();

  updateData(newData: Category) {
    this.dataSubject.next(newData);
  }

  getCategories(): Observable<Category> {
    console.info('request from category service');
    var result = this.http.get<Category>('https://localhost:5001/api/categories');
    console.info(result);
    return result;
  }

  getCategory(): void {
    this.http.get<Category[]>('https://localhost:5001/api/categories').subscribe({
      next: (response) => {
        this.category.set(response);
        console.log('Data succesfully retrieved in service', this.category)
      },
      error: error => console.log('smth went wrong in getCategory() service')
    })
  }
}