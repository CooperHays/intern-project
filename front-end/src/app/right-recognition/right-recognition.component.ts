import { Component, OnInit, DoCheck } from '@angular/core';
import { Recognition } from '../mock-recognition';
import { MessageService} from '../message.service';
import { User } from '../user';

@Component({
  selector: 'app-right-recognition',
  templateUrl: './right-recognition.component.html',
  styleUrls: ['./right-recognition.component.less']
})
export class RightRecognitionComponent implements OnInit, DoCheck {
  // props = Props;
  user: User = {
    name: 'Michael Cooper'
  };

  messages = this.messageService.recognition.filter(m => m.receiver === this.user.name).sort((a, b) => b.date - a.date);

  giver = this.user.name.split(' ')[0];

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    console.log(this.messages);
  }

  ngDoCheck() {
    if (this.messages !== this.messageService.recognition.filter(m => m.receiver === this.user.name).sort((a, b) => b.date - a.date)) {
      this.messages = this.messageService.recognition.filter(m => m.receiver === this.user.name).sort((a, b) => b.date - a.date);
    }
  }

}
