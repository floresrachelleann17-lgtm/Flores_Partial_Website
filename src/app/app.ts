import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router'; // Added Router
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
  
  // The constructor injects the tools you need (Auth and Router)
  constructor(public authService: AuthService, public router: Router) {} 

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // This function forces the app to go to the dashboard if the HTML link fails
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  protected readonly title = signal('palawan-bliss');
}