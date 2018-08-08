import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-link',
  templateUrl: './auth-link.component.html',
  styleUrls: ['./auth-link.component.less']
})
export class AuthLinkComponent implements OnInit {
  user = "Michael Cooper";

  logout = "Logout";
  
  constructor() { }

  ngOnInit() {
  }

}
