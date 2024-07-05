import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibDebitCreditCardsAddComponent } from './accounts-lib-debit-credit-cards-add.component';

describe('AccountsLibDebitCreditCardsAddComponent', () => {
  let component: AccountsLibDebitCreditCardsAddComponent;
  let fixture: ComponentFixture<AccountsLibDebitCreditCardsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibDebitCreditCardsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibDebitCreditCardsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
