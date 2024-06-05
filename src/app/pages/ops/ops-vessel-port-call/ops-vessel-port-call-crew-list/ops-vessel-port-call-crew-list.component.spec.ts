import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselPortCallCrewListComponent } from './ops-vessel-port-call-crew-list.component';

describe('OPSVesselPortCallCrewListComponent', () => {
  let component: OPSVesselPortCallCrewListComponent;
  let fixture: ComponentFixture<OPSVesselPortCallCrewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselPortCallCrewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselPortCallCrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
