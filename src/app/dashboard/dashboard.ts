import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { AuthService } from '../auth'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  userName: string | null = '';
  wishlistItems: any[] = []; 

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.userName = this.authService.getCurrentUser();
    this.wishlistItems = []; // Keep empty for the lonely wishlist view
  }
}