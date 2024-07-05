import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibCodesComponent } from './accounts-lib-codes.component';

describe('AccountsLibCodesComponent', () => {
  let component: AccountsLibCodesComponent;
  let fixture: ComponentFixture<AccountsLibCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibCodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
