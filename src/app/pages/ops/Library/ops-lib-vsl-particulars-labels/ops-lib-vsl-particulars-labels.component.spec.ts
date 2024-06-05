import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSLIBVSLPARTICULARSLABELSComponent } from './ops-lib-vsl-particulars-labels.component';

describe('OPSLIBVSLPARTICULARSLABELSComponent', () => {
  let component: OPSLIBVSLPARTICULARSLABELSComponent;
  let fixture: ComponentFixture<OPSLIBVSLPARTICULARSLABELSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSLIBVSLPARTICULARSLABELSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSLIBVSLPARTICULARSLABELSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
