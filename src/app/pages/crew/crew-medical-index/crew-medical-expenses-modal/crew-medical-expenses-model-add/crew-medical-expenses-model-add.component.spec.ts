import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMedicalExpensesModelAddComponent } from './crew-medical-expenses-model-add.component';

describe('CREWMedicalExpensesModelAddComponent', () => {
  let component: CREWMedicalExpensesModelAddComponent;
  let fixture: ComponentFixture<CREWMedicalExpensesModelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMedicalExpensesModelAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMedicalExpensesModelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
