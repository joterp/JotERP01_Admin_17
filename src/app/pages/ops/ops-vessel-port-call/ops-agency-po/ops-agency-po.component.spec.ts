import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSAgencyPOComponent } from './ops-agency-po.component';

describe('OPSAgencyPOComponent', () => {
  let component: OPSAgencyPOComponent;
  let fixture: ComponentFixture<OPSAgencyPOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSAgencyPOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSAgencyPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
