import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHPMSJobHistoryComponent } from './tech-pms-job-history.component';

describe('TECHPMSJobHistoryComponent', () => {
  let component: TECHPMSJobHistoryComponent;
  let fixture: ComponentFixture<TECHPMSJobHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHPMSJobHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHPMSJobHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
