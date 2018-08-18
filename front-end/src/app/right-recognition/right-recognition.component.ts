import { Component, OnInit } from '@angular/core';
import { Recognition } from '../mock-recognition';
import { Props } from '../mock-props';

@Component({
  selector: 'app-right-recognition',
  templateUrl: './right-recognition.component.html',
  styleUrls: ['./right-recognition.component.less']
})
export class RightRecognitionComponent implements OnInit {
  props = Props;
  
  constructor() { }

  ngOnInit() {
  }

}
