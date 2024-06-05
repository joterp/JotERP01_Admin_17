import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMedicalExpensesModalComponent } from './crew-medical-expenses-modal.component';

describe('CREWMedicalExpensesModalComponent', () => {
  let component: CREWMedicalExpensesModalComponent;
  let fixture: ComponentFixture<CREWMedicalExpensesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMedicalExpensesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMedicalExpensesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
