import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibDrcCategoryAddComponent } from './accounts-lib-drc-category-add.component';

describe('AccountsLibDrcCategoryAddComponent', () => {
  let component: AccountsLibDrcCategoryAddComponent;
  let fixture: ComponentFixture<AccountsLibDrcCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibDrcCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibDrcCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
