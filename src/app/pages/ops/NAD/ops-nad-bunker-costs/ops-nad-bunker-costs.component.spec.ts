import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADBunkerCostsComponent } from './ops-nad-bunker-costs.component';

describe('OPSNADBunkerCostsComponent', () => {
  let component: OPSNADBunkerCostsComponent;
  let fixture: ComponentFixture<OPSNADBunkerCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADBunkerCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADBunkerCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
