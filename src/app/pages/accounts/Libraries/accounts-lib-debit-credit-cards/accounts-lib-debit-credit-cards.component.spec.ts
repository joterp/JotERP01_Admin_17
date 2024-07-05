import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibDebitCreditCardsComponent } from './accounts-lib-debit-credit-cards.component';

describe('AccountsLibDebitCreditCardsComponent', () => {
  let component: AccountsLibDebitCreditCardsComponent;
  let fixture: ComponentFixture<AccountsLibDebitCreditCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibDebitCreditCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibDebitCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
