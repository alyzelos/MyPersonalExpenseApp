import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { Category } from '../Interfaces/category';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public http = inject(HttpClient);
  category = signal<Category[]>([]);

  //section for observables:
  private _categoriesSubject$ = new BehaviorSubject<Category[]>([]);
  public categories$: Observable<Category[]> =  this._categoriesSubject$.asObservable();
  // method for observables: 
  get currentCategories(): Category[] {
    return this._categoriesSubject$.value;
  }

  getCategories(): void {
    this.http.get<Category[]>('https://localhost:5001/api/categories').pipe(
      tap(response => {
        this._categoriesSubject$.next(response);
        console.log('Data succesfully retrieved in service', response);
      }),
      catchError(error => {
        console.error('Error in getCategories() service', error);
        return of([]);
      })
    ).subscribe();
  }

  //method for signal retrieving data
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