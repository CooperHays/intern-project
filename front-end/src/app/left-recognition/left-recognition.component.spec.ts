import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRecognitionComponent } from './left-recognition.component';

describe('LeftRecognitionComponent', () => {
  let component: LeftRecognitionComponent;
  let fixture: ComponentFixture<LeftRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
