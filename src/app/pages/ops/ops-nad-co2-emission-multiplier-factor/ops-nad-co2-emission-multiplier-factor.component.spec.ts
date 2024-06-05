import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCO2EmissionMultiplierFactorComponent } from './ops-nad-co2-emission-multiplier-factor.component';

describe('OPSNADCO2EmissionMultiplierFactorComponent', () => {
  let component: OPSNADCO2EmissionMultiplierFactorComponent;
  let fixture: ComponentFixture<OPSNADCO2EmissionMultiplierFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCO2EmissionMultiplierFactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCO2EmissionMultiplierFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
