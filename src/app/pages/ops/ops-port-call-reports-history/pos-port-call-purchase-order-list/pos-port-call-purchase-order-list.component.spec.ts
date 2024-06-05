import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSPortCallPurchaseOrderListComponent } from './pos-port-call-purchase-order-list.component';

describe('POSPortCallPurchaseOrderListComponent', () => {
  let component: POSPortCallPurchaseOrderListComponent;
  let fixture: ComponentFixture<POSPortCallPurchaseOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POSPortCallPurchaseOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POSPortCallPurchaseOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
