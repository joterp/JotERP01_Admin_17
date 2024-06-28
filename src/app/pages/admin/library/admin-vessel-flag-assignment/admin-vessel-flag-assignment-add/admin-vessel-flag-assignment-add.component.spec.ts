import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVesselFlagAssignmentAddComponent } from './admin-vessel-flag-assignment-add.component';

describe('AdminVesselFlagAssignmentAddComponent', () => {
  let component: AdminVesselFlagAssignmentAddComponent;
  let fixture: ComponentFixture<AdminVesselFlagAssignmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVesselFlagAssignmentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVesselFlagAssignmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
