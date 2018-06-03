import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user) {
    return this.http.post('/api/register', user);
  }

  loginUser(user) {
    return this.http.post('/api/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
