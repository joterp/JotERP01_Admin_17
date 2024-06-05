import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSAddDailyVoyageLogComponent } from './ops-add-daily-voyage-log.component';

describe('OPSAddDailyVoyageLogComponent', () => {
  let component: OPSAddDailyVoyageLogComponent;
  let fixture: ComponentFixture<OPSAddDailyVoyageLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSAddDailyVoyageLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSAddDailyVoyageLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
