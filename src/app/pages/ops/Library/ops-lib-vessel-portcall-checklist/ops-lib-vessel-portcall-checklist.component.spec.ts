import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSLIBVesselPortcallChecklistComponent } from './ops-lib-vessel-portcall-checklist.component';

describe('OPSLIBVesselPortcallChecklistComponent', () => {
  let component: OPSLIBVesselPortcallChecklistComponent;
  let fixture: ComponentFixture<OPSLIBVesselPortcallChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSLIBVesselPortcallChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSLIBVesselPortcallChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
