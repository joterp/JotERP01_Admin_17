import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSRPTReportIndexComponent } from './ops-rpt-report-index.component';

describe('OPSRPTReportIndexComponent', () => {
  let component: OPSRPTReportIndexComponent;
  let fixture: ComponentFixture<OPSRPTReportIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSRPTReportIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSRPTReportIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
