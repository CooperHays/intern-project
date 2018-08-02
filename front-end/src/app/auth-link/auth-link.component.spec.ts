import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLinkComponent } from './auth-link.component';

describe('AuthLinkComponent', () => {
  let component: AuthLinkComponent;
  let fixture: ComponentFixture<AuthLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
