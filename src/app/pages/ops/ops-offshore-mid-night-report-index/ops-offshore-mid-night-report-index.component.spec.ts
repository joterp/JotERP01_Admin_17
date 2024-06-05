import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSOffshoreMidNightReportIndexComponent } from './ops-offshore-mid-night-report-index.component';

describe('OPSOffshoreMidNightReportIndexComponent', () => {
  let component: OPSOffshoreMidNightReportIndexComponent;
  let fixture: ComponentFixture<OPSOffshoreMidNightReportIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSOffshoreMidNightReportIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSOffshoreMidNightReportIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
