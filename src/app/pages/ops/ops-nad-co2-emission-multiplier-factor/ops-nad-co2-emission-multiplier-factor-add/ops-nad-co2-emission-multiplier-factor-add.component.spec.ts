import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCO2EmissionMultiplierFactorAddComponent } from './ops-nad-co2-emission-multiplier-factor-add.component';

describe('OPSNADCO2EmissionMultiplierFactorAddComponent', () => {
  let component: OPSNADCO2EmissionMultiplierFactorAddComponent;
  let fixture: ComponentFixture<OPSNADCO2EmissionMultiplierFactorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCO2EmissionMultiplierFactorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCO2EmissionMultiplierFactorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
