import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSSECVesselListComponent } from './ops-sec-vessel-list.component';

describe('OPSSECVesselListComponent', () => {
  let component: OPSSECVesselListComponent;
  let fixture: ComponentFixture<OPSSECVesselListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSSECVesselListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSSECVesselListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
