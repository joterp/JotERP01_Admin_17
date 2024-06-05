import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSRPTVESSELAssignementComponent } from './ops-rpt-vessel-assignement.component';

describe('OPSRPTVESSELAssignementComponent', () => {
  let component: OPSRPTVESSELAssignementComponent;
  let fixture: ComponentFixture<OPSRPTVESSELAssignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSRPTVESSELAssignementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSRPTVESSELAssignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
