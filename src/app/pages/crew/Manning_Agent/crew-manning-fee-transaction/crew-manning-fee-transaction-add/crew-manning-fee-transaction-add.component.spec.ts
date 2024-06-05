import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWManningFeeTransactionAddComponent } from './crew-manning-fee-transaction-add.component';

describe('CREWManningFeeTransactionAddComponent', () => {
  let component: CREWManningFeeTransactionAddComponent;
  let fixture: ComponentFixture<CREWManningFeeTransactionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWManningFeeTransactionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWManningFeeTransactionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
