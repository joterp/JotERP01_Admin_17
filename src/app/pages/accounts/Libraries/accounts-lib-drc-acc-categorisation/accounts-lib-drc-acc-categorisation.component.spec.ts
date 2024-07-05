import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLibDrcAccCategorisationComponent } from './accounts-lib-drc-acc-categorisation.component';

describe('AccountsLibDrcAccCategorisationComponent', () => {
  let component: AccountsLibDrcAccCategorisationComponent;
  let fixture: ComponentFixture<AccountsLibDrcAccCategorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsLibDrcAccCategorisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsLibDrcAccCategorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
