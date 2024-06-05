import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselPortCallChecklistsComponent } from './ops-vessel-port-call-checklists.component';

describe('OPSVesselPortCallChecklistsComponent', () => {
  let component: OPSVesselPortCallChecklistsComponent;
  let fixture: ComponentFixture<OPSVesselPortCallChecklistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselPortCallChecklistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselPortCallChecklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
