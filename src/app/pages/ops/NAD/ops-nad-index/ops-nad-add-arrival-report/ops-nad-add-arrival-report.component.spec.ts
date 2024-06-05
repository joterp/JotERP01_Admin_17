import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADAddArrivalReportComponent } from './ops-nad-add-arrival-report.component';

describe('OPSNADAddArrivalReportComponent', () => {
  let component: OPSNADAddArrivalReportComponent;
  let fixture: ComponentFixture<OPSNADAddArrivalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADAddArrivalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADAddArrivalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
