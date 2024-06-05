import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHRunningHoursHistoryComponent } from './tech-running-hours-history.component';

describe('TECHRunningHoursHistoryComponent', () => {
  let component: TECHRunningHoursHistoryComponent;
  let fixture: ComponentFixture<TECHRunningHoursHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHRunningHoursHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHRunningHoursHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
