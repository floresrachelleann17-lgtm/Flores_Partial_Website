import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../auth'; // 👈 1. Import your service

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  
  isLogin: boolean = true; 

  // 2. Add AuthService to the constructor here
  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSignUp(nameInput: HTMLInputElement, passInput: HTMLInputElement) {
    const name = nameInput.value.trim();
    const pass = passInput.value.trim();

    if (name && pass) {
      // Use the service to register
      this.authService.register(name);
      localStorage.setItem('registeredPass', pass); // Still saving pass locally
      alert("Signed up!");
      this.isLogin = true;
    }
  }

  onLogin(nameInput: HTMLInputElement, passInput: HTMLInputElement) {
    const typedName = nameInput.value.trim();
    const typedPass = passInput.value.trim();
    const savedPass = localStorage.getItem('registeredPass');

    if (this.authService.validate(typedName) && typedPass === savedPass) {
        this.authService.login(typedName);

        // This is the strongest way to clear the "Login" screen 
        // and force the Dashboard to load fresh.
        window.location.href = '/dashboard'; 

    } else {
        alert("Invalid username or password!");
    }
}
}