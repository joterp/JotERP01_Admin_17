import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmClaimsApproverAddComponent } from './hrm-claims-approver-add.component';

describe('HrmClaimsApproverAddComponent', () => {
  let component: HrmClaimsApproverAddComponent;
  let fixture: ComponentFixture<HrmClaimsApproverAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmClaimsApproverAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmClaimsApproverAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
