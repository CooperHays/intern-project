import { Component, OnInit, DoCheck } from '@angular/core';
import { Recognition } from '../mock-recognition';
import { MessageService} from '../message.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-right-recognition',
  templateUrl: './right-recognition.component.html',
  styleUrls: ['./right-recognition.component.less']
})
export class RightRecognitionComponent implements OnInit, DoCheck {
  // props = Props;
  user = this.userService.user;

  messages = this.messageService.recognition.filter(m => m.receiver === this.user[0]).sort((a, b) => b.date - a.date);

  giver = this.user[0].split(' ')[0];

  constructor(public messageService: MessageService, public userService: UserService) { }

  ngOnInit() {
    console.log(this.messageService.recognition);
    console.log(this.messages);
  }

  ngDoCheck() {
    if (this.messages !== this.messageService.recognition.filter(m => m.receiver === this.user[0]).sort((a, b) => b.date - a.date)) {
      this.messages = this.messageService.recognition.filter(m => m.receiver === this.user[0]).sort((a, b) => b.date - a.date);
    }
  }

}
