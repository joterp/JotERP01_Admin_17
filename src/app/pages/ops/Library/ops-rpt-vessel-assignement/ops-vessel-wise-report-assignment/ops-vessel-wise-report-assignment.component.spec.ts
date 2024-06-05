import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselWiseReportAssignmentComponent } from './ops-vessel-wise-report-assignment.component';

describe('OPSVesselWiseReportAssignmentComponent', () => {
  let component: OPSVesselWiseReportAssignmentComponent;
  let fixture: ComponentFixture<OPSVesselWiseReportAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselWiseReportAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselWiseReportAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
