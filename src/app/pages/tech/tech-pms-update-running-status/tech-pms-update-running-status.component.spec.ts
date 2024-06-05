import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHPMSUpdateRunningStatusComponent } from './tech-pms-update-running-status.component';

describe('TECHPMSUpdateRunningStatusComponent', () => {
  let component: TECHPMSUpdateRunningStatusComponent;
  let fixture: ComponentFixture<TECHPMSUpdateRunningStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHPMSUpdateRunningStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHPMSUpdateRunningStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
