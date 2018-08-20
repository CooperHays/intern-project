import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.less']
})
export class RecognitionComponent implements OnInit {
  user: User = {
    name: 'Michael Cooper'
  };

  constructor() { }

  ngOnInit() {
  }

}
