import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSSECSecurityDashBoardComponent } from './ops-sec-security-dash-board.component';

describe('OPSSECSecurityDashBoardComponent', () => {
  let component: OPSSECSecurityDashBoardComponent;
  let fixture: ComponentFixture<OPSSECSecurityDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSSECSecurityDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSSECSecurityDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
