import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibCodesAddComponent } from './accounts-lib-codes-add.component';

describe('AccountsLibCodesAddComponent', () => {
  let component: AccountsLibCodesAddComponent;
  let fixture: ComponentFixture<AccountsLibCodesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibCodesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibCodesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
