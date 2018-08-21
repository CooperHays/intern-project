import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = [];

  add(user: string) {
    this.remove();
    this.user.push(user);
  }

  remove() {
    this.user = [];
  }

  constructor() { }
}
