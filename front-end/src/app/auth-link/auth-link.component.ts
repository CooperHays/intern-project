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

  loggedIn = this.userService.loggedIn;

  constructor(public userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.user[0];
    console.log(this.user);
    console.log('this.loggedIn is: ', this.loggedIn);
  }

  ngDoCheck() {
    if (this.user !== this.userService.user[0]) {
      this.user = this.userService.user[0];
      this.loggedIn = this.userService.loggedIn;
      console.log('this.loggedIn is: ', this.loggedIn);
    }
  }

  setLogout() {
    this.userService.remove();
    this.user = this.userService.user[0];
    this.loggedIn = this.userService.loggedIn;
    console.log('logout user good:', this.user);
    console.log('this.loggedIn is: ', this.loggedIn);
    console.log('this.userService.loggedIn is: ', this.userService.loggedIn);
  }
}
