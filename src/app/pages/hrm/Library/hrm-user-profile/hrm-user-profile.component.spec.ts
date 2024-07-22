import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRMUserProfileComponent } from './hrm-user-profile.component';

describe('HRMUserProfileComponent', () => {
  let component: HRMUserProfileComponent;
  let fixture: ComponentFixture<HRMUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HRMUserProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HRMUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
