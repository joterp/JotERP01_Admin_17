import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADAddDepartureReportComponent } from './ops-nad-add-departure-report.component';

describe('OPSNADAddDepartureReportComponent', () => {
  let component: OPSNADAddDepartureReportComponent;
  let fixture: ComponentFixture<OPSNADAddDepartureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADAddDepartureReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADAddDepartureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
