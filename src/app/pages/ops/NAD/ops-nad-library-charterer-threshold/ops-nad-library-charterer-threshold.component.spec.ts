import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADLIBRARYCHARTERERTHRESHOLDComponent } from './ops-nad-library-charterer-threshold.component';

describe('OPSNADLIBRARYCHARTERERTHRESHOLDComponent', () => {
  let component: OPSNADLIBRARYCHARTERERTHRESHOLDComponent;
  let fixture: ComponentFixture<OPSNADLIBRARYCHARTERERTHRESHOLDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADLIBRARYCHARTERERTHRESHOLDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADLIBRARYCHARTERERTHRESHOLDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
