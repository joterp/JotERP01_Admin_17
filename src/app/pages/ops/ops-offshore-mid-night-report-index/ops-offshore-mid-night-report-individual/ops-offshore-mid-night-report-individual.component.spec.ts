import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSOffshoreMidNightReportIndividualComponent } from './ops-offshore-mid-night-report-individual.component';

describe('OPSOffshoreMidNightReportIndividualComponent', () => {
  let component: OPSOffshoreMidNightReportIndividualComponent;
  let fixture: ComponentFixture<OPSOffshoreMidNightReportIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSOffshoreMidNightReportIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSOffshoreMidNightReportIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
