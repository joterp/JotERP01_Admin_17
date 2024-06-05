import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSSECAlertAreasComponent } from './ops-sec-alert-areas.component';

describe('OPSSECAlertAreasComponent', () => {
  let component: OPSSECAlertAreasComponent;
  let fixture: ComponentFixture<OPSSECAlertAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSSECAlertAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSSECAlertAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
