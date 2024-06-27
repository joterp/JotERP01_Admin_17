import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyBankAccountComponent } from './admin-company-bank-account.component';

describe('AdminCompanyBankAccountComponent', () => {
  let component: AdminCompanyBankAccountComponent;
  let fixture: ComponentFixture<AdminCompanyBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCompanyBankAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompanyBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
