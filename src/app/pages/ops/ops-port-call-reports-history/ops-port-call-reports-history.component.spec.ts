import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSPortCallReportsHistoryComponent } from './ops-port-call-reports-history.component';

describe('OPSPortCallReportsHistoryComponent', () => {
  let component: OPSPortCallReportsHistoryComponent;
  let fixture: ComponentFixture<OPSPortCallReportsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSPortCallReportsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSPortCallReportsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
