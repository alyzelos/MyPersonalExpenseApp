import { Routes } from '@angular/router';
import { ExpenseList } from './expense-list/expense-list';
import { Categories } from './categories/categories';
import { App } from './app';
import { pattern } from '@angular/forms/signals';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'', component: Home},
    {path: 'expense-list', component:ExpenseList},
    {path: 'categories', component:Categories},

];
