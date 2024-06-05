import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADAddDailyNoonReportAlongsideComponent } from './ops-nad-add-daily-noon-report-alongside.component';

describe('OPSNADAddDailyNoonReportAlongsideComponent', () => {
  let component: OPSNADAddDailyNoonReportAlongsideComponent;
  let fixture: ComponentFixture<OPSNADAddDailyNoonReportAlongsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADAddDailyNoonReportAlongsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADAddDailyNoonReportAlongsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
