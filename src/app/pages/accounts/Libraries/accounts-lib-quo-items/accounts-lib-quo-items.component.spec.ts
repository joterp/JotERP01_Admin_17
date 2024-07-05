import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibQUOItemsComponent } from './accounts-lib-quo-items.component';

describe('AccountsLibQUOItemsComponent', () => {
  let component: AccountsLibQUOItemsComponent;
  let fixture: ComponentFixture<AccountsLibQUOItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibQUOItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibQUOItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
