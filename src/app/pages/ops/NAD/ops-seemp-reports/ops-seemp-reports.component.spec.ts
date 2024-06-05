import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSSEEMPREPORTSComponent } from './ops-seemp-reports.component';

describe('OPSSEEMPREPORTSComponent', () => {
  let component: OPSSEEMPREPORTSComponent;
  let fixture: ComponentFixture<OPSSEEMPREPORTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSSEEMPREPORTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSSEEMPREPORTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
