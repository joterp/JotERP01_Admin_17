import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBLIBSeniorityManagementComponent } from './crew-acc-pb-lib-seniority-management.component';

describe('CREWACCPBLIBSeniorityManagementComponent', () => {
  let component: CREWACCPBLIBSeniorityManagementComponent;
  let fixture: ComponentFixture<CREWACCPBLIBSeniorityManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBLIBSeniorityManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBLIBSeniorityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
