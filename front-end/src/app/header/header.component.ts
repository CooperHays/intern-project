import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
  header = 'Support ';

  title = '';

  constructor(private router: Router, location: Location) { }

  ngOnInit() {
    const currentUrl = location.pathname;
    const tag = currentUrl.slice(1);
    this.title = tag;
    console.log('Current URL is: ', currentUrl);
    console.log('tag is: ', tag);
    console.log('this.location is :', location.pathname);
  }

}
