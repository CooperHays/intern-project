import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightRecognitionComponent } from './right-recognition.component';

describe('RightRecognitionComponent', () => {
  let component: RightRecognitionComponent;
  let fixture: ComponentFixture<RightRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
