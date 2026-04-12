import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  userName: string | null = '';
  wishlistItems: any[] = [];

  constructor(
    public authService: AuthService,
    private router: Router   // ✅ FIX: inject router
  ) {}

  ngOnInit() {
    this.userName = this.authService.getCurrentUser();
    this.wishlistItems = [];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']); // ✅ now works
  }
}