import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-home',
  standalone : true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appTitle: string = 'Welcome to my Midterm Project';
  userImageUrl: string = 'https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-cute-cat-cat-kawaii-chibi-drawing-style-cat-cartoon-png-image_12965065.png';
}
