import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselThresholdAddComponent } from './ops-vessel-threshold-add.component';

describe('OPSVesselThresholdAddComponent', () => {
  let component: OPSVesselThresholdAddComponent;
  let fixture: ComponentFixture<OPSVesselThresholdAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselThresholdAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselThresholdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
