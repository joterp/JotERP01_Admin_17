import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSSECAlertListAddComponent } from './ops-sec-alert-list-add.component';

describe('OPSSECAlertListAddComponent', () => {
  let component: OPSSECAlertListAddComponent;
  let fixture: ComponentFixture<OPSSECAlertListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSSECAlertListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSSECAlertListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
