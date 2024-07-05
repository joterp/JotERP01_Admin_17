import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDRCQUOCompanyAddComponent } from './accounts-drc-quo-company-add.component';

describe('AccountsDRCQUOCompanyAddComponent', () => {
  let component: AccountsDRCQUOCompanyAddComponent;
  let fixture: ComponentFixture<AccountsDRCQUOCompanyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsDRCQUOCompanyAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsDRCQUOCompanyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
