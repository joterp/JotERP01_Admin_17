import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibQUOItemsAddComponent } from './accounts-lib-quo-items-add.component';

describe('AccountsLibQUOItemsAddComponent', () => {
  let component: AccountsLibQUOItemsAddComponent;
  let fixture: ComponentFixture<AccountsLibQUOItemsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibQUOItemsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibQUOItemsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
