import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibDrcAccCategorisationAddComponent } from './accounts-lib-drc-acc-categorisation-add.component';

describe('AccountsLibDrcAccCategorisationAddComponent', () => {
  let component: AccountsLibDrcAccCategorisationAddComponent;
  let fixture: ComponentFixture<AccountsLibDrcAccCategorisationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibDrcAccCategorisationAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibDrcAccCategorisationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
