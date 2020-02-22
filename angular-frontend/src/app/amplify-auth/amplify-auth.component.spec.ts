import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmplifyAuthComponent } from './amplify-auth.component';

describe('AmplifyAuthComponent', () => {
  let component: AmplifyAuthComponent;
  let fixture: ComponentFixture<AmplifyAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmplifyAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmplifyAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
