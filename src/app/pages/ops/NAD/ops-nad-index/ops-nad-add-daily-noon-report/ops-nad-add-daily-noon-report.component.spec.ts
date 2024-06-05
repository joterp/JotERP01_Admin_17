import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADAddDailyNoonReportComponent } from './ops-nad-add-daily-noon-report.component';

describe('OPSNADAddDailyNoonReportComponent', () => {
  let component: OPSNADAddDailyNoonReportComponent;
  let fixture: ComponentFixture<OPSNADAddDailyNoonReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADAddDailyNoonReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADAddDailyNoonReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
