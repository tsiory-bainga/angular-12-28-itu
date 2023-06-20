import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly TOKEN_KEY = 'user';

  constructor(private http:HttpClient) { }

  uri_api = 'http://localhost:8010/api/login';

  logIn(user : User) {
    return this.http.post<User>(this.uri_api, user);
  }
}