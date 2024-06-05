import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBBankAccSalaryExceptionComponent } from './crew-acc-pb-bank-acc-salary-exception.component';

describe('CREWACCPBBankAccSalaryExceptionComponent', () => {
  let component: CREWACCPBBankAccSalaryExceptionComponent;
  let fixture: ComponentFixture<CREWACCPBBankAccSalaryExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBBankAccSalaryExceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBBankAccSalaryExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
