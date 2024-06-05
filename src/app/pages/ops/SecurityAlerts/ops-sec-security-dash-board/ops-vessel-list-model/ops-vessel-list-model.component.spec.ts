import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselListModelComponent } from './ops-vessel-list-model.component';

describe('OPSVesselListModelComponent', () => {
  let component: OPSVesselListModelComponent;
  let fixture: ComponentFixture<OPSVesselListModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselListModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselListModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
