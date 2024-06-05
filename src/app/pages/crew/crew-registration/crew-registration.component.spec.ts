import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewRegistrationComponent } from './crew-registration.component';

describe('CrewRegistrationComponent', () => {
  let component: CrewRegistrationComponent;
  let fixture: ComponentFixture<CrewRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
