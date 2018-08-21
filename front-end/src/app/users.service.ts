import { Injectable } from '@angular/core';
import { Users } from './users';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers(): User[] {
    return Users;
  }

  constructor() { }
}
