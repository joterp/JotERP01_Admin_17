import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibDrcCategoryComponent } from './accounts-lib-drc-category.component';

describe('AccountsLibDrcCategoryComponent', () => {
  let component: AccountsLibDrcCategoryComponent;
  let fixture: ComponentFixture<AccountsLibDrcCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibDrcCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibDrcCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
