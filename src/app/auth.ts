import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // This is the function the error is complaining about!
  isLoggedIn(): boolean {
    // It returns true if there is a 'currentUser' in storage
    return localStorage.getItem('currentUser') !== null;
  }

  validate(name: string): boolean {

    const saved = localStorage.getItem('registeredUser');

    return saved === name.toLowerCase();

  }

  login(name: string) {

    localStorage.setItem('currentUser', name.toLowerCase());

  }
  getCurrentUser(): string | null {

    return localStorage.getItem('currentUser');

  }

  logout() {

    localStorage.removeItem('currentUser');

  }
  register(name: string) {

    localStorage.setItem('registeredUser', name.toLowerCase());

  }

}