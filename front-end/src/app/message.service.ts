import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  recognition: any[] = [];

  add(message: any) {
    this.recognition.push(message);
  }

  constructor() { }
}
