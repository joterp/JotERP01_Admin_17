import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibVesselPortcallChecklistEditComponent } from './ops-lib-vessel-portcall-checklist-edit.component';

describe('OpsLibVesselPortcallChecklistEditComponent', () => {
  let component: OpsLibVesselPortcallChecklistEditComponent;
  let fixture: ComponentFixture<OpsLibVesselPortcallChecklistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsLibVesselPortcallChecklistEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsLibVesselPortcallChecklistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
