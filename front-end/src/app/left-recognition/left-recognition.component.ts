import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';

import { User } from '../user';
import { Users } from '../users';
import { Recognition } from '../mock-recognition';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-left-recognition',
  templateUrl: './left-recognition.component.html',
  styleUrls: ['./left-recognition.component.less']
})
export class LeftRecognitionComponent implements OnInit {
  user: User = {
    name: 'Michael Cooper'
  };

  users = Users.filter(user => user.name !== this.user.name).sort((a, b) => a.name.localeCompare(b.name));

  body = '';

  receiver = '';

  giver = this.user.name;

  date: number;

  message = {};

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    console.log(this.giver);
  }

  setReceiver(receiver: string): void {
    this.receiver = receiver;
    console.log(this.receiver);
  }

  setBody(body: string): void {
    this.body = body;
    console.log(this.body);
  }

  setRecognition(message: any): void {
    this.message = {
      body: this.body,
      giver: this.giver,
      receiver: this.receiver,
      date: Date.now()
    };
    console.log(this.message);
    this.messageService.add(this.message);
    console.log(this.messageService.recognition);
    // this.date = Date.now();
    // console.log('this is the timestamp: ', this.date);
    // console.log('i work!');
    // console.log(this.body);
  }

  setCancel(cancel: string): void {
    this.body = null;
    console.log('i work');
  }

}
