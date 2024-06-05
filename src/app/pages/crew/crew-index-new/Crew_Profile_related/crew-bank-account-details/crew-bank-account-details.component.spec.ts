import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWBankAccountDetailsComponent } from './crew-bank-account-details.component';

describe('CREWBankAccountDetailsComponent', () => {
  let component: CREWBankAccountDetailsComponent;
  let fixture: ComponentFixture<CREWBankAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWBankAccountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWBankAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
