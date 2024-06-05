import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselThresholdComponent } from './ops-vessel-threshold.component';

describe('OPSVesselThresholdComponent', () => {
  let component: OPSVesselThresholdComponent;
  let fixture: ComponentFixture<OPSVesselThresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselThresholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
