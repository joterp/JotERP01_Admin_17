import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCIIReductionFactorAddComponent } from './ops-nad-cii-reduction-factor-add.component';

describe('OPSNADCIIReductionFactorAddComponent', () => {
  let component: OPSNADCIIReductionFactorAddComponent;
  let fixture: ComponentFixture<OPSNADCIIReductionFactorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCIIReductionFactorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCIIReductionFactorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
