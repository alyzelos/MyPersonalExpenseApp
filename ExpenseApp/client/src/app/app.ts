import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from "./navigation-bar/navigation-bar";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NavigationBar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  public readonly title = signal('MyPersonalExpenseApp');


}
