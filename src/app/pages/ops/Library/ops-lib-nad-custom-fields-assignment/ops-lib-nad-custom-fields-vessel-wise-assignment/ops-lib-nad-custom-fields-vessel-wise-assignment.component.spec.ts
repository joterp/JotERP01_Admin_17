import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSLIBNADCustomFieldsVesselWiseAssignmentComponent } from './ops-lib-nad-custom-fields-vessel-wise-assignment.component';

describe('OPSLIBNADCustomFieldsVesselWiseAssignmentComponent', () => {
  let component: OPSLIBNADCustomFieldsVesselWiseAssignmentComponent;
  let fixture: ComponentFixture<OPSLIBNADCustomFieldsVesselWiseAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSLIBNADCustomFieldsVesselWiseAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSLIBNADCustomFieldsVesselWiseAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
