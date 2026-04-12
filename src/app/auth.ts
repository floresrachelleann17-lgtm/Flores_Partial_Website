import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly USERNAME = 'elle';
  private readonly PASSWORD = '12345';

  login(name: string, pass: string): boolean {
    if (name === this.USERNAME && pass === this.PASSWORD) {
      localStorage.setItem('currentUser', name);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): string | null {
    return localStorage.getItem('currentUser');
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}