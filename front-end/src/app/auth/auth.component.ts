import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService} from '../users.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit, DoCheck {
  users: User[];

  loggedIn = this.userService.loggedIn;

  constructor(public usersService: UsersService, public userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    // console.log('this is users: ', this.users);
  }

  ngDoCheck() {
    if (this.loggedIn !== this.userService.loggedIn) {
      this.loggedIn = this.userService.loggedIn;
      // console.log('this.loggedIn is: ', this.loggedIn);
    }
    // console.log('this is this.userService.loggedIn: ', this.loggedIn);
  }

  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  setUser(user: string): void {
    this.userService.add(user);
    // console.log('this is this.userService.user: ', this.userService.user);
    // console.log('this is this.loggedIn: ', this.loggedIn);
    // console.log('this is this.userService.loggedIn: ', this.userService.loggedIn);
  }

}
