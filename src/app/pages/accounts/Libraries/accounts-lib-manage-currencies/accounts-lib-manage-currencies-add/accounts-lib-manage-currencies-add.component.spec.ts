import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibManageCurrenciesAddComponent } from './accounts-lib-manage-currencies-add.component';

describe('AccountsLibManageCurrenciesAddComponent', () => {
  let component: AccountsLibManageCurrenciesAddComponent;
  let fixture: ComponentFixture<AccountsLibManageCurrenciesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibManageCurrenciesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibManageCurrenciesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
