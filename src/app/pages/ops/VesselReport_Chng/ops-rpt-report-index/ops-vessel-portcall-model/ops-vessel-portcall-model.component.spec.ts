import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselPortcallModelComponent } from './ops-vessel-portcall-model.component';

describe('OPSVesselPortcallModelComponent', () => {
  let component: OPSVesselPortcallModelComponent;
  let fixture: ComponentFixture<OPSVesselPortcallModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselPortcallModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselPortcallModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
