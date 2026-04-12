import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router'; // 👈 1. Add 'Router' here
import { CommonModule } from '@angular/common'; 
import { AuthService } from './auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule], 
  templateUrl: './app.html',          
  styleUrl: './app.css'               
})
export class App implements OnInit { 
  
  // 👈 2. Add 'private router: Router' here
  constructor(public authService: AuthService, public router: Router) {} 

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // 👈 3. Add this helper function to force the navigation if the link fails
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  protected readonly title = signal('palawan-bliss');
}