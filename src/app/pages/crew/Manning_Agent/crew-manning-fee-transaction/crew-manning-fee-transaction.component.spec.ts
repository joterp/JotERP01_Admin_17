import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWManningFeeTransactionComponent } from './crew-manning-fee-transaction.component';

describe('CREWManningFeeTransactionComponent', () => {
  let component: CREWManningFeeTransactionComponent;
  let fixture: ComponentFixture<CREWManningFeeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWManningFeeTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWManningFeeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
