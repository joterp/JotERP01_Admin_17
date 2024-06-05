import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCIIReductionFactorComponent } from './ops-nad-cii-reduction-factor.component';

describe('OPSNADCIIReductionFactorComponent', () => {
  let component: OPSNADCIIReductionFactorComponent;
  let fixture: ComponentFixture<OPSNADCIIReductionFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCIIReductionFactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCIIReductionFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
