import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSRecentAlertsModelComponent } from './ops-recent-alerts-model.component';

describe('OPSRecentAlertsModelComponent', () => {
  let component: OPSRecentAlertsModelComponent;
  let fixture: ComponentFixture<OPSRecentAlertsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSRecentAlertsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSRecentAlertsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
