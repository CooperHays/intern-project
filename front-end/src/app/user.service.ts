import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: string[];

  add(user: string) {
    this.user.push(user);
  }

  remove() {
    this.user = [];
  }

  constructor() { }
}
