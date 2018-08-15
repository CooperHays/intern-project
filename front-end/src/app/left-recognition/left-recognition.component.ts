import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-recognition',
  templateUrl: './left-recognition.component.html',
  styleUrls: ['./left-recognition.component.less']
})
export class LeftRecognitionComponent implements OnInit {
  left = 'Left Div Here';

  constructor() { }

  ngOnInit() {
  }

}
