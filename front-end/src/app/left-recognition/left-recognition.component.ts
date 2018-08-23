import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';

import { UsersService } from '../users.service';
import { User } from '../user';
import { Recognition } from '../mock-recognition';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-left-recognition',
  templateUrl: './left-recognition.component.html',
  styleUrls: ['./left-recognition.component.less']
})
export class LeftRecognitionComponent implements OnInit {
  user = this.userService.user;

  users: User[];

  filteredUsers = [];

  body = '';

  receiver = '';

  giver = this.user[0];

  date: number;

  message = {};

  constructor(private messageService: MessageService, private userService: UserService, private usersService: UsersService) { }

  ngOnInit() {
    // console.log(this.messageService.recognition);
    // console.log('current user is: ', this.user);
    this.getUsers();
    this.filteredUsers = this.users.filter(user => user.name !== this.user[0]).sort((a, b) => a.name.localeCompare(b.name));
  }

  setReceiver(receiver: string): void {
    this.receiver = receiver;
    // console.log(this.receiver);
  }

  setBody(body: string): void {
    this.body = body;
    // console.log(this.body);
  }

  setRecognition(message: any): void {
    this.message = {
      body: this.body,
      giver: this.giver,
      receiver: this.receiver,
      date: Date.now()
    };
    // console.log(this.message);
    this.messageService.add(this.message);
    // console.log(this.messageService.recognition);
    this.body = null;
    // this.date = Date.now();
    // console.log('this is the timestamp: ', this.date);
    // console.log('i work!');
    // console.log(this.body);
  }

  setCancel(cancel: string): void {
    this.body = null;
    // console.log('i work');
  }

  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }

}
