import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCIICalculationIndexComponent } from './ops-nad-cii-calculation-index.component';

describe('OPSNADCIICalculationIndexComponent', () => {
  let component: OPSNADCIICalculationIndexComponent;
  let fixture: ComponentFixture<OPSNADCIICalculationIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCIICalculationIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCIICalculationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
