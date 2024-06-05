import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselPortCallCheckListIndexEditComponent } from './ops-vessel-port-call-check-list-index-edit.component';

describe('OPSVesselPortCallCheckListIndexEditComponent', () => {
  let component: OPSVesselPortCallCheckListIndexEditComponent;
  let fixture: ComponentFixture<OPSVesselPortCallCheckListIndexEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselPortCallCheckListIndexEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselPortCallCheckListIndexEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
