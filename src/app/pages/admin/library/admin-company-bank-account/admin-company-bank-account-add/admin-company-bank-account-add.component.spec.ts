import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyBankAccountAddComponent } from './admin-company-bank-account-add.component';

describe('AdminCompanyBankAccountAddComponent', () => {
  let component: AdminCompanyBankAccountAddComponent;
  let fixture: ComponentFixture<AdminCompanyBankAccountAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCompanyBankAccountAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompanyBankAccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
