import { Component, OnInit } from '@angular/core';
import { Recognition } from '../mock-recognition';
import { Props } from '../mock-props';
import { MessageService} from '../message.service';
import { User } from '../user';

@Component({
  selector: 'app-right-recognition',
  templateUrl: './right-recognition.component.html',
  styleUrls: ['./right-recognition.component.less']
})
export class RightRecognitionComponent implements OnInit {
  // props = Props;
  user: User = {
    name: 'Michael Cooper'
  };

  giver = this.user.name.split(' ')[0];

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
