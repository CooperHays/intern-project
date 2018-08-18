import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';

import { User } from '../user';
import { Users } from '../users';

@Component({
  selector: 'app-left-recognition',
  templateUrl: './left-recognition.component.html',
  styleUrls: ['./left-recognition.component.less']
})
export class LeftRecognitionComponent implements OnInit {
  user: User = {
    name: 'Michael Cooper'
  };

  users = Users.filter(user => user.name != this.user.name).sort((a,b) => a.name.localeCompare(b.name));
 

  constructor() { }

  ngOnInit() {
    console.log('this is users array filtered and sorted: ', this.users);
  }

}
