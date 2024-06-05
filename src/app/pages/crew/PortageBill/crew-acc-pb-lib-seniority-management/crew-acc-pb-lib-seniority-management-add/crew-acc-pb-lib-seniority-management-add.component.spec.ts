import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBLIBSeniorityManagementAddComponent } from './crew-acc-pb-lib-seniority-management-add.component';

describe('CREWACCPBLIBSeniorityManagementAddComponent', () => {
  let component: CREWACCPBLIBSeniorityManagementAddComponent;
  let fixture: ComponentFixture<CREWACCPBLIBSeniorityManagementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBLIBSeniorityManagementAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBLIBSeniorityManagementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
