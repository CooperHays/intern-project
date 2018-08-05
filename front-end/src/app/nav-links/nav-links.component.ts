import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.less']
})
export class NavLinksComponent implements OnInit {
  stats = "Support Stats";
  recognition = "Recognition";

  constructor() { }

  ngOnInit() {
  }

}
