import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCApprovalPortalComponent } from './purc-approval-portal.component';

describe('PURCApprovalPortalComponent', () => {
  let component: PURCApprovalPortalComponent;
  let fixture: ComponentFixture<PURCApprovalPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCApprovalPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCApprovalPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
