import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  users: User[];

  constructor(public usersService: UsersService, public userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    console.log('this is users: ', this.users);
  }

  getUsers(): void {
    this.users = this.usersService.getUsers();
  }

  setUser(user: string): void {
    this.userService.add(user);
    console.log(this.userService.user);
  }

}
