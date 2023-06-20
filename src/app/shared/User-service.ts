import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly TOKEN_KEY = 'user';

  constructor(private http:HttpClient) { }

    uri_api = 'https://backend-12-28-madagascar.onrender.com/api';
    
    logIn(user : User) : Observable<any> {
        return this.http.post<User>(this.uri_api + '/login', user);
    }

    register(User : User) : Observable<any> {
        return this.http.post<User>(this.uri_api + '/register', User);
    }

}