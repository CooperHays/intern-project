import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  recognition: any[] = [
    {
      body: 'Cooper is an inspiration to all! The time he has spent learning from Brett is obviously paying off!!',
      giver: 'Courtney Park',
      receiver: 'Michael Cooper',
      date: 1534856065389
  },
  {
      body: 'I love Coop!',
      giver: 'Jason Gilbert',
      receiver: 'Michael Cooper',
      date: 1534856082722
  },
  {
      body: 'Brett is doing a great job. He should be on CA team!',
      giver: 'Zack Taylor',
      receiver: 'Brett Hays',
      date: 1534856090900
  },
  {
      body: 'Brett is my Hero',
      giver: 'Mike Sprunt',
      receiver: 'Brett Hays',
      date: 1534856098535
  },
  {
      body: 'Jason is an ACH phenom!',
      giver: 'Brett Hays',
      receiver: 'Jason Gilbert',
      date: 1534856106931
  },
  ];

  add(message: any) {
    this.recognition.push(message);
  }

  constructor() { }
}
