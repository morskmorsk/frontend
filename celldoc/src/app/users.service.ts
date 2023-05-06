import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://127.0.0.1:8000/users/';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiUrl);
  }

  getUsers(url: string) {
    return this.http.get(url);
  }

  registerUser(userData: any) {
    return this.http.post(`${this.apiUrl}users/`, userData);
  }
}
