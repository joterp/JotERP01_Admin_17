import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADBunkerCostsAddComponent } from './ops-nad-bunker-costs-add.component';

describe('OPSNADBunkerCostsAddComponent', () => {
  let component: OPSNADBunkerCostsAddComponent;
  let fixture: ComponentFixture<OPSNADBunkerCostsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADBunkerCostsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADBunkerCostsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
