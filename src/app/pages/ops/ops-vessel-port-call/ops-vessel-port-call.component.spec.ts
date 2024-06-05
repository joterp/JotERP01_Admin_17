import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselPortCallComponent } from './ops-vessel-port-call.component';

describe('OPSVesselPortCallComponent', () => {
  let component: OPSVesselPortCallComponent;
  let fixture: ComponentFixture<OPSVesselPortCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselPortCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselPortCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
