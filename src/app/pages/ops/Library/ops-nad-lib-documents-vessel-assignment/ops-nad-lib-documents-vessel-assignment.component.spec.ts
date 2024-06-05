import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent } from './ops-nad-lib-documents-vessel-assignment.component';

describe('OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent', () => {
  let component: OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent;
  let fixture: ComponentFixture<OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
