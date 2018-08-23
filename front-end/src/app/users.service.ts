import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from './users';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers(): Observable<User[]> {
    return of(Users);
  }

  constructor() { }
}
