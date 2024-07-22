import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmClaimsApproversComponent } from './hrm-claims-approvers.component';

describe('HrmClaimsApproversComponent', () => {
  let component: HrmClaimsApproversComponent;
  let fixture: ComponentFixture<HrmClaimsApproversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmClaimsApproversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmClaimsApproversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
