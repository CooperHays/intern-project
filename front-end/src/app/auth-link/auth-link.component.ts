import { Component, OnInit, DoCheck } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

@Component({
  selector: 'app-auth-link',
  templateUrl: './auth-link.component.html',
  styleUrls: ['./auth-link.component.less']
})
export class AuthLinkComponent implements OnInit, DoCheck {
  user = '';

  logout = 'Logout';

  login = 'Login';

  faCog = faCog;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user[0];
    console.log(this.user);
  }

  ngDoCheck() {
    if (this.user !== this.userService.user[0]) {
      this.user = this.userService.user[0];
    }
  }

}
