import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselPortCallCheckListIndexComponent } from './ops-vessel-port-call-check-list-index.component';

describe('OPSVesselPortCallCheckListIndexComponent', () => {
  let component: OPSVesselPortCallCheckListIndexComponent;
  let fixture: ComponentFixture<OPSVesselPortCallCheckListIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselPortCallCheckListIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselPortCallCheckListIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
