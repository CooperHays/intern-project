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
