import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCPurchaseOrderSummaryModalComponent } from './purc-purchase-order-summary-modal.component';

describe('PURCPurchaseOrderSummaryModalComponent', () => {
  let component: PURCPurchaseOrderSummaryModalComponent;
  let fixture: ComponentFixture<PURCPurchaseOrderSummaryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCPurchaseOrderSummaryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCPurchaseOrderSummaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
