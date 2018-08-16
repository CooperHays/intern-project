import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit, DoCheck {
  header = 'Support ';

  title = '';

  constructor(private ar: ActivatedRoute, router: Router, location: Location) { }

  ngOnInit() {
    const currentUrl = location.pathname.slice(1);
    // const tag = currentUrl.slice(1);
    this.title = currentUrl;
    // console.log('Current URL is: ', currentUrl);
    // console.log('tag is: ', tag);
    // console.log('this.location is :', location.pathname);
    // console.log('ar is: ', this.ar.snapshot);
  }

  ngDoCheck() {
    // console.log(location.pathname);
    if (this.title !== location.pathname.slice(1)) {
      this.title = location.pathname.slice(1);
    }
  }

}
