import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSSECAlertListComponent } from './ops-sec-alert-list.component';

describe('OPSSECAlertListComponent', () => {
  let component: OPSSECAlertListComponent;
  let fixture: ComponentFixture<OPSSECAlertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSSECAlertListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSSECAlertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
