import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADAddDailyNoonReportAnchorageComponent } from './ops-nad-add-daily-noon-report-anchorage.component';

describe('OPSNADAddDailyNoonReportAnchorageComponent', () => {
  let component: OPSNADAddDailyNoonReportAnchorageComponent;
  let fixture: ComponentFixture<OPSNADAddDailyNoonReportAnchorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADAddDailyNoonReportAnchorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADAddDailyNoonReportAnchorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
