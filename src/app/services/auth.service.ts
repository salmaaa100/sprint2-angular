import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'salma', password: '123', roles: ['USER'] }
  ];

  loggedUser?: string;
  isloggedIn: boolean = false;
  roles?: string[];

  constructor(private router: Router) {}

  signIn(user: User): boolean {
    const found = this.users.find(u => u.username === user.username && u.password === user.password);
    if (!found) {
      return false;
    }
    this.loggedUser = found.username;
    this.isloggedIn = true;
    this.roles = found.roles;
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    return true;
  }

  logout(): void {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    if (!this.roles) {
      return false;
    }
    return this.roles.indexOf('ADMIN') > -1;
  }

  setLoggedUserFromLocalStorage(login: string): void {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string): void {
    const found = this.users.find(u => u.username === username);
    if (found) {
      this.roles = found.roles;
    }
  }
}
