import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADDailyNoonReportComponent } from './ops-nad-daily-noon-report.component';

describe('OPSNADDailyNoonReportComponent', () => {
  let component: OPSNADDailyNoonReportComponent;
  let fixture: ComponentFixture<OPSNADDailyNoonReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADDailyNoonReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADDailyNoonReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
