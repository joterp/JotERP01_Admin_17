import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSReportSFIsFilterComponent } from './ops-report-sfis-filter.component';

describe('OPSReportSFIsFilterComponent', () => {
  let component: OPSReportSFIsFilterComponent;
  let fixture: ComponentFixture<OPSReportSFIsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSReportSFIsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSReportSFIsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
