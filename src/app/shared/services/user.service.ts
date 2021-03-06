import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post<{ message: string }>(
      `${environment.host}/users/signup`,
      user
    );
  }
}
