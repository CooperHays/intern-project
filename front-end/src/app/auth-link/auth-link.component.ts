import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth-link',
  templateUrl: './auth-link.component.html',
  styleUrls: ['./auth-link.component.less']
})
export class AuthLinkComponent implements OnInit {
  user = 'Michael Cooper';

  logout = 'Logout';

  faCog = faCog;

  constructor() { }

  ngOnInit() {
  }

}
