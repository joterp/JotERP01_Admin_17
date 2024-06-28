import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVesselFlagAssignmentComponent } from './admin-vessel-flag-assignment.component';

describe('AdminVesselFlagAssignmentComponent', () => {
  let component: AdminVesselFlagAssignmentComponent;
  let fixture: ComponentFixture<AdminVesselFlagAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVesselFlagAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVesselFlagAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
