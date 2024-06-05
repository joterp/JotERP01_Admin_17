import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewRegistrationAddComponent } from './crew-registration-add.component';

describe('CrewRegistrationAddComponent', () => {
  let component: CrewRegistrationAddComponent;
  let fixture: ComponentFixture<CrewRegistrationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewRegistrationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewRegistrationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
