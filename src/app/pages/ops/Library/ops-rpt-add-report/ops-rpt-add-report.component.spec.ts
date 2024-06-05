import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSRPTAddReportComponent } from './ops-rpt-add-report.component';

describe('OPSRPTAddReportComponent', () => {
  let component: OPSRPTAddReportComponent;
  let fixture: ComponentFixture<OPSRPTAddReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSRPTAddReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSRPTAddReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
