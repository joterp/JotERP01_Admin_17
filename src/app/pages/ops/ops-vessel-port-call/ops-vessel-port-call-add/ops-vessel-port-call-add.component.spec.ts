import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselPortCallAddComponent } from './ops-vessel-port-call-add.component';

describe('OPSVesselPortCallAddComponent', () => {
  let component: OPSVesselPortCallAddComponent;
  let fixture: ComponentFixture<OPSVesselPortCallAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselPortCallAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselPortCallAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
