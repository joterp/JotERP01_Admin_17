import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADArrivalReportComponent } from './ops-nad-arrival-report.component';

describe('OPSNADArrivalReportComponent', () => {
  let component: OPSNADArrivalReportComponent;
  let fixture: ComponentFixture<OPSNADArrivalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADArrivalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADArrivalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
