import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCOVIDVaccinationAddModalComponent } from './crew-covid-vaccination-add-modal.component';

describe('CREWCOVIDVaccinationAddModalComponent', () => {
  let component: CREWCOVIDVaccinationAddModalComponent;
  let fixture: ComponentFixture<CREWCOVIDVaccinationAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCOVIDVaccinationAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCOVIDVaccinationAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
