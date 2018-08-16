import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-recognition',
  templateUrl: './right-recognition.component.html',
  styleUrls: ['./right-recognition.component.less']
})
export class RightRecognitionComponent implements OnInit {
  right = 'Right Div Here';

  constructor() { }

  ngOnInit() {
  }

}
