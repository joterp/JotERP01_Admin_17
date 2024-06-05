import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselPortCallChecklistsAddComponent } from './ops-vessel-port-call-checklists-add.component';

describe('OPSVesselPortCallChecklistsAddComponent', () => {
  let component: OPSVesselPortCallChecklistsAddComponent;
  let fixture: ComponentFixture<OPSVesselPortCallChecklistsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselPortCallChecklistsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselPortCallChecklistsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
