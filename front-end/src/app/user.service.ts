import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user = [];

  loggedIn = false;

  add(user: string) {
    this.remove();
    this.user.push(user);
    this.loggedIn = true;
  }

  remove() {
    this.user = [];
    this.loggedIn = false;
  }

  constructor() { }
}
// change user to current user; add users: Users[] - import users.ts or do i use users service; modify add()
// and add a line about this.currentUsername = this.users[this.users.findIndex(logic here)]; add a username
// variable = ''.
