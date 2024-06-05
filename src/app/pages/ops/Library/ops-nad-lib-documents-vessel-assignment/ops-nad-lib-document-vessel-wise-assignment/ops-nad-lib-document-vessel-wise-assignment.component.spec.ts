import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADLIBDOCUMENTVESSELWISEASSIGNMENTComponent } from './ops-nad-lib-document-vessel-wise-assignment.component';

describe('OPSNADLIBDOCUMENTVESSELWISEASSIGNMENTComponent', () => {
  let component: OPSNADLIBDOCUMENTVESSELWISEASSIGNMENTComponent;
  let fixture: ComponentFixture<OPSNADLIBDOCUMENTVESSELWISEASSIGNMENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADLIBDOCUMENTVESSELWISEASSIGNMENTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADLIBDOCUMENTVESSELWISEASSIGNMENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
