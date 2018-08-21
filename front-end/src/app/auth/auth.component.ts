import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  users: User[];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
    console.log('this is users: ', this.users);
  }

  getUsers(): void {
    this.users = this.usersService.getUsers();
  }

}
