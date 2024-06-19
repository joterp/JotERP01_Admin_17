import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibManageCurrenciesComponent } from './accounts-lib-manage-currencies.component';

describe('AccountsLibManageCurrenciesComponent', () => {
  let component: AccountsLibManageCurrenciesComponent;
  let fixture: ComponentFixture<AccountsLibManageCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibManageCurrenciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibManageCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
