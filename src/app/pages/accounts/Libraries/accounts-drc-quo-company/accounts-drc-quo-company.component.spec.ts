import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDRCQUOCompanyComponent } from './accounts-drc-quo-company.component';

describe('AccountsDRCQUOCompanyComponent', () => {
  let component: AccountsDRCQUOCompanyComponent;
  let fixture: ComponentFixture<AccountsDRCQUOCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsDRCQUOCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsDRCQUOCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
