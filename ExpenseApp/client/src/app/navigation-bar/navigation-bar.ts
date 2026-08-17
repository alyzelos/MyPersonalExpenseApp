import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navigation-bar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink,MatDividerModule],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css',
})
export class NavigationBar {}
