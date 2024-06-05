import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSRPTCompareReportComponent } from './ops-rpt-compare-report.component';

describe('OPSRPTCompareReportComponent', () => {
  let component: OPSRPTCompareReportComponent;
  let fixture: ComponentFixture<OPSRPTCompareReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSRPTCompareReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSRPTCompareReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
