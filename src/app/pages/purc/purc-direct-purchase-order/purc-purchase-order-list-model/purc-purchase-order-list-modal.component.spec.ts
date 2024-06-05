import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCPurchaseOrderListModalComponent } from './purc-purchase-order-list-modal.component';

describe('PURCPurchaseOrderListModalComponent', () => {
  let component: PURCPurchaseOrderListModalComponent;
  let fixture: ComponentFixture<PURCPurchaseOrderListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCPurchaseOrderListModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCPurchaseOrderListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
