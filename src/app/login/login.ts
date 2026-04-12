import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = true;

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // 🔐 LOGIN (STATIC: elle / 12345 handled in service)
  onLogin(nameInput: HTMLInputElement, passInput: HTMLInputElement) {
    const name = nameInput.value.trim();
    const pass = passInput.value.trim();

    const success = this.authService.login(name, pass);

    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password!');
    }
  }

  // ⚠️ OPTIONAL SIGNUP (disabled for static system)
  onSignUp() {
    alert('Signup is disabled. Use: elle / 12345');
  }
}