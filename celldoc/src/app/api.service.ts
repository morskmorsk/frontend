import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getData() {
    return this.http.get('http://127.0.0.1:8000/users/users/');
  }
}


