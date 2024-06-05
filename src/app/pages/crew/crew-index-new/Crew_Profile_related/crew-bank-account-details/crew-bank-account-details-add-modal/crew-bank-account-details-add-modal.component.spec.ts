import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWBankAccountDetailsAddModalComponent } from './crew-bank-account-details-add-modal.component';

describe('CREWBankAccountDetailsAddModalComponent', () => {
  let component: CREWBankAccountDetailsAddModalComponent;
  let fixture: ComponentFixture<CREWBankAccountDetailsAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWBankAccountDetailsAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWBankAccountDetailsAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
