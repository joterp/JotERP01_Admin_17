import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmHrPoliciesComponent } from './hrm-hr-policies.component';

describe('HrmHrPoliciesComponent', () => {
  let component: HrmHrPoliciesComponent;
  let fixture: ComponentFixture<HrmHrPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmHrPoliciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmHrPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
